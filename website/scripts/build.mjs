import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { marked } from 'marked'
import { createSlugger, decodeEntities, slugSegment } from './lib/slug.mjs'
import {
  hrefBetween,
  resolveRepoPath,
  rootPrefixFor,
  splitHref,
} from './lib/links.mjs'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const siteDir = path.resolve(scriptDir, '..')
const repoRoot = path.resolve(siteDir, '..')
const outDir = path.join(siteDir, '_site')
const assetsDir = path.join(siteDir, 'assets')
const appDir = path.join(repoRoot, 'docs', 'blueprints', 'training', 'artificial-intelligence', 'app')

const repoUrl = 'https://github.com/Jay-Baldostamon/gamedevelopment-sops'
const repoBranch = 'main'
const siteName = 'Game Development SOPs'
// GitHub Pages serves 404.html for paths at any depth, so its links must be absolute.
const siteBase = process.env.SITE_BASE ?? '/gamedevelopment-sops/'

const excludedDirs = new Set(['.git', '.github', '_site', 'dist', 'node_modules'])

const sectionLabels = {
  architecture: 'Architecture',
  blueprints: 'Blueprints & Training',
  'career-ladder': 'Career Ladder',
  'incident-response': 'Incident Response',
  operations: 'Operations',
  playbooks: 'Playbooks',
  'state-of-engineering': 'State of Engineering',
  'value-engines': 'Value Engines',
}

const sectionBlurbs = {
  architecture: 'Backend, frontend, and schema standards that keep systems consistent.',
  blueprints: 'Multi-month enablement programs, including the 80-day training plan and QA gates.',
  'career-ladder': 'Discipline progression, role expectations, and promotion criteria from L1 to L7.',
  'incident-response': 'Dated incident assessments, retrospectives, and risk acceptance records.',
  playbooks: 'Step-by-step operating procedures for delivery, quality, governance, incidents, people, and platform work.',
  'state-of-engineering': 'Periodic studio health and capability reports.',
  'value-engines': 'How each part of the studio creates player value.',
}

const stopWords = new Set(['a', 'an', 'and', 'for', 'in', 'of', 'on', 'the', 'to', 'with'])
const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' })
const acronyms = {
  ai: 'AI',
  api: 'API',
  aws: 'AWS',
  ci: 'CI',
  cd: 'CD',
  db: 'DB',
  qa: 'QA',
  ui: 'UI',
  ux: 'UX',
}

const brokenLinks = new Map()
const assetCopies = new Map()

function warnBroken(target, source) {
  if (!brokenLinks.has(target)) brokenLinks.set(target, new Set())
  brokenLinks.get(target).add(source)
}

function walkMarkdown(relativeRoot) {
  const results = []
  const root = path.join(repoRoot, relativeRoot)
  if (!fs.existsSync(root)) return results

  const walk = (absolute) => {
    for (const entry of fs.readdirSync(absolute, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (excludedDirs.has(entry.name)) continue
        walk(path.join(absolute, entry.name))
      } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
        results.push(path.relative(repoRoot, path.join(absolute, entry.name)).split(path.sep).join('/'))
      }
    }
  }

  walk(root)
  return results.sort()
}

function pageOutput(repoRel) {
  if (repoRel === 'README.md') return 'overview.html'
  let rel = repoRel.startsWith('docs/') ? repoRel.slice('docs/'.length) : repoRel
  const dir = path.posix.dirname(rel)
  const base = path.posix.basename(rel)
  const slugDir = dir === '.' ? '' : dir.split('/').map(slugSegment).join('/')
  const name = /^readme\.md$/i.test(base)
    ? 'index.html'
    : `${slugSegment(base.replace(/\.md$/i, ''))}.html`
  return slugDir ? `${slugDir}/${name}` : name
}

function assetOutput(repoRel) {
  return repoRel.startsWith('docs/') ? repoRel.slice('docs/'.length) : repoRel
}

function prettify(segment) {
  return segment
    .split(/[-_]+/)
    .filter(Boolean)
    .map((word, index) => {
      const lower = word.toLowerCase()
      if (acronyms[lower]) return acronyms[lower]
      if (index > 0 && stopWords.has(lower)) return lower
      return lower.charAt(0).toUpperCase() + lower.slice(1)
    })
    .join(' ')
}

function stripFrontmatter(markdown) {
  return markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '')
}

function addHeadingIds(html) {
  const slug = createSlugger()
  return html.replace(
    /<h([1-6])([^>]*)>([\s\S]*?)<\/h\1>/gi,
    (match, level, attributes, inner) => {
      if (/\bid=/.test(attributes)) return match
      return `<h${level}${attributes} id="${slug(inner)}">${inner}</h${level}>`
    },
  )
}

function rewriteTarget(href, page) {
  const value = decodeEntities(href.trim())
  if (!value || /^(?:[a-z][a-z0-9+.-]*:|\/\/|#|\?)/i.test(value)) return href

  const { pathname, hash } = splitHref(value)
  if (!pathname) return href

  const resolved = resolveRepoPath(page.repoRel, pathname)
  if (!resolved || resolved.startsWith('..')) {
    warnBroken(value, page.repoRel)
    return href
  }

  const clean = resolved.replace(/\/+$/, '')
  const candidates = [
    resolved,
    clean,
    `${clean}/README.md`,
    `${clean}/index.md`,
    `${clean}.md`,
  ]
  const targetPage = candidates
    .map((candidate) => pages.get(candidate) ?? pages.get(candidate.toLowerCase()))
    .find(Boolean)

  if (targetPage) return hrefBetween(page.output, targetPage.output, hash)

  // Some source links point at a file that has since moved into a subfolder.
  // Resolve by basename when the match is unambiguous.
  const baseMatches = byBase.get(path.posix.basename(clean).toLowerCase())
  if (baseMatches?.length === 1) {
    return hrefBetween(page.output, baseMatches[0].output, hash)
  }

  const assetPath = path.join(repoRoot, resolved)
  try {
    if (fs.statSync(assetPath).isFile()) {
      const output = assetOutput(clean)
      assetCopies.set(clean, output)
      return hrefBetween(page.output, output, hash)
    }
  } catch {
    // The target does not exist; report it below.
  }

  warnBroken(value, page.repoRel)
  return href
}

function rewriteUrls(html, page) {
  const withAttributes = html.replace(
    /(<(?:a|img|source)\b[^>]*?\b(?:href|src)=)(["'])([^"']*)\2/gi,
    (match, prefix, quote, value) => `${prefix}${quote}${rewriteTarget(value, page)}${quote}`,
  )

  return withAttributes.replace(/<a\b[^>]*href="(?:https?:)?\/\/[^"]*"[^>]*>/gi, (tag) =>
    /\btarget=/.test(tag) ? tag : tag.replace(/>$/, ' target="_blank" rel="noopener noreferrer">'),
  )
}

function plainText(html) {
  return decodeEntities(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' '),
  )
    .replace(/\s+/g, ' ')
    .trim()
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function extractTitle(html, fallback) {
  const heading = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)
  if (!heading) return fallback
  const title = plainText(heading[1])
  return title || fallback
}

function buildPageList() {
  const pages = new Map()
  const byLower = new Map()
  const usedOutputs = new Set()

  const add = (repoRel, section) => {
    let output = pageOutput(repoRel)
    if (usedOutputs.has(output)) {
      let counter = 2
      const extension = path.posix.extname(output)
      const stem = output.slice(0, -extension.length)
      while (usedOutputs.has(`${stem}-${counter}${extension}`)) counter += 1
      output = `${stem}-${counter}${extension}`
    }
    usedOutputs.add(output)

    const page = {
      repoRel,
      section,
      output,
      url: output,
      title: path.posix.basename(repoRel, path.posix.extname(repoRel)),
      html: '',
      plain: '',
    }
    pages.set(repoRel, page)
    byLower.set(repoRel.toLowerCase(), page)
    return page
  }

  add('README.md', 'overview')
  for (const repoRel of walkMarkdown('docs')) add(repoRel, 'docs')
  for (const repoRel of walkMarkdown('schemas')) add(repoRel, 'schemas')
  for (const repoRel of walkMarkdown('archive')) add(repoRel, 'archive')

  return { pages, byLower }
}

marked.setOptions({ gfm: true, breaks: false })

const { pages, byLower } = buildPageList()

// Resolve case-insensitive references before rendering starts.
for (const [key, page] of byLower) {
  if (!pages.has(key)) pages.set(key, page)
}

const byBase = new Map()
for (const page of new Set(pages.values())) {
  const key = path.posix.basename(page.repoRel).toLowerCase()
  byBase.set(key, [...(byBase.get(key) ?? []), page])
}

function renderPages() {
  const ordered = [...new Set([...pages.values()])]
  for (const page of ordered) {
    const markdown = fs.readFileSync(path.join(repoRoot, page.repoRel), 'utf8')
    const body = stripFrontmatter(markdown)
    let html = marked.parse(body)
    html = addHeadingIds(html)
    html = rewriteUrls(html, page)
    page.html = html
    page.plain = plainText(html)
    page.title = extractTitle(html, path.posix.basename(page.repoRel, '.md'))
    page.description = page.plain.slice(0, 180)
  }
}

renderPages()

function createSectionIndexes() {
  const docsRoot = path.join(repoRoot, 'docs')
  if (!fs.existsSync(docsRoot)) return
  const existingPages = () => [...new Set(pages.values())]

  for (const entry of fs.readdirSync(docsRoot, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    const dir = entry.name
    const prefix = `docs/${dir}/`
    if (pages.has(`${prefix}README.md`)) continue

    const sectionPages = existingPages().filter((page) => page.repoRel.startsWith(prefix))
    if (sectionPages.length === 0) continue

    const output = `${slugSegment(dir)}/index.html`
    if (existingPages().some((page) => page.output === output)) continue

    const title = sectionLabels[dir] ?? prettify(dir)
    const blurb = sectionBlurbs[dir] ?? `Documents for ${title.toLowerCase()}.`
    const groups = new Map()
    const directPages = []

    for (const page of sectionPages) {
      const parts = page.repoRel.slice(prefix.length).split('/')
      if (parts.length === 1) {
        directPages.push(page)
        continue
      }
      const key = parts[0]
      if (!groups.has(key)) groups.set(key, [])
      groups.get(key).push(page)
    }

    const cards = [...groups.entries()]
      .map(([key, groupPages]) => ({
        label: sectionLabels[key] ?? prettify(key),
        target: groupPages.find((page) => /\/readme\.md$/i.test(page.repoRel)) ?? groupPages[0],
        count: groupPages.length,
      }))
      .sort((left, right) => collator.compare(left.label, right.label))
      .concat(
        directPages
          .sort((left, right) => collator.compare(left.title, right.title))
          .map((page) => ({ label: page.title, target: page, count: 1 })),
      )

    const html = `<p>${escapeHtml(blurb)}</p>
<h2>In this section</h2>
<div class="section-grid">${cards
      .map(
        (card) =>
          `<a class="section-card" href="${hrefBetween(output, card.target.output)}"><span class="section-count">${card.count} ${
            card.count === 1 ? 'document' : 'documents'
          }</span><strong>${escapeHtml(card.label)}</strong></a>`,
      )
      .join('')}</div>`

    const page = {
      repoRel: `${prefix}README.md`,
      section: 'docs',
      output,
      url: output,
      title,
      html,
      plain: `${title} ${blurb} ${cards.map((card) => card.label).join(' ')}`,
      description: blurb,
      virtual: true,
    }
    pages.set(page.repoRel, page)
    byLower.set(page.repoRel.toLowerCase(), page)
  }
}

createSectionIndexes()

function buildTree(sectionKey, sectionTitle, sectionPages, basePath) {
  const root = { key: sectionKey, title: sectionTitle, children: [] }

  for (const page of sectionPages) {
    const rel = basePath ? page.repoRel.slice(basePath.length) : page.repoRel
    const parts = rel.split('/')
    let node = root

    for (const dirPart of parts.slice(0, -1)) {
      let child = node.children.find((candidate) => candidate.children && candidate.key === dirPart)
      if (!child) {
        child = {
          key: dirPart,
          title: sectionKey === 'docs' && node === root
            ? sectionLabels[dirPart] ?? prettify(dirPart)
            : prettify(dirPart),
          children: [],
          indexPage: null,
        }
        node.children.push(child)
      }
      node = child
    }

    const file = parts.at(-1)
    if (/^readme\.md$/i.test(file)) {
      node.indexPage = page
    } else {
      node.children.push({ key: file, title: page.title, url: page.url, page })
    }
  }

  return finalize(root)
}

function finalize(node) {
  if (node.indexPage) {
    node.children.unshift({
      key: '__index',
      title: 'Overview',
      url: node.indexPage.url,
      page: node.indexPage,
    })
  }

  node.children.sort((left, right) => {
    const leftDir = Boolean(left.children)
    const rightDir = Boolean(right.children)
    if (leftDir !== rightDir) return leftDir ? -1 : 1
    return collator.compare(left.title, right.title)
  })

  for (const child of node.children) {
    if (child.children) finalize(child)
  }

  return node
}

const overviewPage = pages.get('README.md')
const docPages = [...new Set(pages.values())].filter((page) => page.section === 'docs')
const schemaPages = [...new Set(pages.values())].filter((page) => page.section === 'schemas')
const archivePages = [...new Set(pages.values())].filter((page) => page.section === 'archive')

const navSections = [
  buildTree('overview', 'Overview', [overviewPage]),
  buildTree('docs', 'Documentation', docPages, 'docs/'),
  buildTree('schemas', 'Schemas', schemaPages, 'schemas/'),
  buildTree('archive', 'Archive', archivePages, 'archive/'),
].filter((section) => section.children.length > 0)

function flattenPages(node, output = []) {
  for (const child of node.children) {
    if (child.children) flattenPages(child, output)
    else if (child.page) output.push(child.page)
  }
  return output
}

const orderedPages = navSections.flatMap((section) => flattenPages(section))
const pager = new Map()
orderedPages.forEach((page, index) => {
  pager.set(page, {
    previous: orderedPages[index - 1] ?? null,
    next: orderedPages[index + 1] ?? null,
  })
})

function navJson(node) {
  const result = { t: node.title }
  if (node.url) result.u = node.url
  if (node.children?.length) result.c = node.children.map(navJson)
  return result
}

function tocFor(html) {
  const entries = []
  const pattern = /<h([23]) id="([^"]+)">([\s\S]*?)<\/h\1>/gi
  let match
  while ((match = pattern.exec(html)) !== null) {
    entries.push({ level: Number(match[1]), id: match[2], text: plainText(match[3]) })
  }
  return entries
}

function pagerLink(page, direction) {
  const entry = pager.get(page)?.[direction]
  if (!entry) return ''
  const label = direction === 'previous' ? '← Previous' : 'Next →'
  return `<a class="pager-link pager-${direction}" href="${rootPrefixFor(page.url)}${entry.url}"><span class="pager-label">${label}</span><span class="pager-title">${escapeHtml(entry.title)}</span></a>`
}

function pageTemplate(page) {
  const root = rootPrefixFor(page.url)
  const toc = tocFor(page.html)
  const tocHtml = toc.length >= 2
    ? `<aside class="toc"><p class="toc-title">On this page</p><ul>${toc
        .map((entry) => `<li class="toc-level-${entry.level}"><a href="#${entry.id}">${escapeHtml(entry.text)}</a></li>`)
        .join('')}</ul></aside>`
    : ''
  const siteData = JSON.stringify({ root, page: page.url, title: page.title }).replace(/</g, '\\u003c')
  const editUrl = page.virtual
    ? `${repoUrl}/tree/${repoBranch}/docs/${page.repoRel.split('/')[1]}`
    : `${repoUrl}/blob/${repoBranch}/${encodeURI(page.repoRel)}`
  const editLabel = page.virtual ? 'Browse this section on GitHub' : 'Edit this page on GitHub'

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(page.title)} · ${siteName}</title>
  <meta name="description" content="${escapeHtml(page.description)}">
  <meta name="theme-color" content="#f0f3ed">
  <link rel="icon" href="${root}favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${root}assets/site.css">
  <script>window.__SITE__ = ${siteData};</script>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="topbar">
    <button class="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">☰</button>
    <a class="brand" href="${root}">
      <span class="brand-mark">GD</span>
      <span class="brand-copy"><strong>Game Development</strong><small>SOP LIBRARY</small></span>
    </a>
    <div class="search">
      <input id="site-search" type="search" placeholder="Search docs…" autocomplete="off" aria-label="Search documentation">
      <div id="search-results" class="search-results" hidden></div>
    </div>
    <nav class="topnav" aria-label="Site">
      <a class="pill" href="${root}tracker/">Training Tracker</a>
      <a class="icon-link" href="${repoUrl}" target="_blank" rel="noopener noreferrer" aria-label="Repository on GitHub">GitHub</a>
    </nav>
  </header>
  <div class="layout">
    <aside class="sidebar" id="sidebar"><nav id="nav" aria-label="Documentation"></nav></aside>
    <main class="content" id="main">
      <nav class="crumbs" aria-label="Breadcrumb"><a href="${root}">Home</a><span>/</span><span>${escapeHtml(page.title)}</span></nav>
      <article class="markdown">${page.html}</article>
      <div class="page-footer">
        <a href="${editUrl}" target="_blank" rel="noopener noreferrer">${editLabel}</a>
      </div>
      <nav class="pager" aria-label="Page navigation">
        ${pagerLink(page, 'previous')}
        ${pagerLink(page, 'next')}
      </nav>
    </main>
    ${tocHtml}
  </div>
  <script src="${root}assets/site.js" defer></script>
</body>
</html>
`
}

function sectionCard(folder, title, blurb) {
  const sectionPages = [...new Set(pages.values())].filter((page) =>
    page.repoRel.startsWith(`docs/${folder}/`) && !page.virtual,
  )
  const index =
    pages.get(`docs/${folder}/README.md`) ??
    sectionPages.find((page) => page.repoRel === `docs/${folder}/README.md`) ??
    sectionPages[0]
  const href = index ? index.url : '#'
  return `<a class="section-card" href="./${href}">
    <span class="section-count">${sectionPages.length} ${sectionPages.length === 1 ? 'document' : 'documents'}</span>
    <strong>${escapeHtml(title)}</strong>
    <span class="section-blurb">${escapeHtml(blurb)}</span>
  </a>`
}

function homePage() {
  const docCount = [...new Set(pages.values())].filter(
    (page) => page.section !== 'overview' && !page.virtual,
  ).length
  const cards = [
    ['playbooks', 'Playbooks', 'Step-by-step operating procedures for delivery, quality, governance, incidents, people, and platform work.'],
    ['blueprints', 'Blueprints & Training', 'Multi-month enablement programs, including the 80-day training plan and QA gates.'],
    ['career-ladder', 'Career Ladder', 'Discipline progression, role expectations, and promotion criteria from L1 to L7.'],
    ['architecture', 'Architecture', 'Backend, frontend, and schema standards that keep systems consistent.'],
    ['blueprints/quality-assurance', 'Quality Assurance', 'Progressive quality gates and testing practice across the delivery lifecycle.'],
    ['incident-response', 'Incident Response', 'Dated incident assessments, retrospectives, and risk acceptance records.'],
    ['state-of-engineering', 'State of Engineering', 'Periodic studio health and capability reports.'],
    ['value-engines', 'Value Engines', 'How each part of the studio creates player value.'],
  ]
    .filter(([folder]) => [...pages.values()].some((page) => page.repoRel.startsWith(`docs/${folder}/`)))
  const sectionCards = cards.map(([folder, title, blurb]) => sectionCard(folder, title, blurb)).join('\n')

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${siteName}</title>
  <meta name="description" content="Version-controlled operating knowledge for a game development studio.">
  <meta name="theme-color" content="#f0f3ed">
  <link rel="icon" href="./favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./assets/site.css">
  <script>window.__SITE__ = ${JSON.stringify({ root: './', page: 'index.html', title: siteName })};</script>
</head>
<body class="home">
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="topbar">
    <a class="brand" href="./">
      <span class="brand-mark">GD</span>
      <span class="brand-copy"><strong>Game Development</strong><small>SOP LIBRARY</small></span>
    </a>
    <div class="search">
      <input id="site-search" type="search" placeholder="Search docs…" autocomplete="off" aria-label="Search documentation">
      <div id="search-results" class="search-results" hidden></div>
    </div>
    <nav class="topnav" aria-label="Site">
      <a class="pill" href="./tracker/">Training Tracker</a>
      <a class="icon-link" href="${repoUrl}" target="_blank" rel="noopener noreferrer">GitHub</a>
    </nav>
  </header>
  <main class="home-main" id="main">
    <section class="hero">
      <p class="eyebrow">VERSION-CONTROLLED OPERATING KNOWLEDGE</p>
      <h1>How we build and ship games.</h1>
      <p class="hero-copy">Production playbooks, engine and content pipeline standards, quality gates, live-ops runbooks, and discipline career ladders — kept current in one GitHub source of truth.</p>
      <div class="hero-actions">
        <a class="button primary" href="./${overviewPage.url}">Browse the documentation</a>
        <a class="button" href="./tracker/">Open the training tracker</a>
      </div>
      <dl class="hero-stats">
        <div><dt>${docCount}</dt><dd>documents</dd></div>
        <div><dt>${cards.length}</dt><dd>doc sections</dd></div>
        <div><dt>20</dt><dd>training days</dd></div>
      </dl>
    </section>
    <section class="home-sections" aria-labelledby="sections-title">
      <h2 id="sections-title">Browse by area</h2>
      <div class="section-grid">
        ${sectionCards}
      </div>
    </section>
    <section class="tracker-cta">
      <div>
        <p class="eyebrow">TRAINING</p>
        <h2>Unity Game Training — Fieldwork</h2>
        <p>Work through Level 1, Days 1–20: daily lessons, checklists, notes, and progress that stays in your browser.</p>
      </div>
      <a class="button primary" href="./tracker/">Start the tracker →</a>
    </section>
  </main>
  <footer class="site-footer">
    <span>${siteName}</span>
    <span>Built from Markdown in <a href="${repoUrl}" target="_blank" rel="noopener noreferrer">gamedevelopment-sops</a></span>
  </footer>
  <script src="./assets/site.js" defer></script>
</body>
</html>
`
}

function notFoundPage() {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Page not found · ${siteName}</title>
  <meta name="theme-color" content="#f0f3ed">
  <link rel="icon" href="${siteBase}favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${siteBase}assets/site.css">
  <script>window.__SITE__ = ${JSON.stringify({ root: siteBase, page: `${siteBase}404.html`, title: 'Page not found' })};</script>
</head>
<body class="home">
  <header class="topbar">
    <a class="brand" href="${siteBase}">
      <span class="brand-mark">GD</span>
      <span class="brand-copy"><strong>Game Development</strong><small>SOP LIBRARY</small></span>
    </a>
    <div class="search">
      <input id="site-search" type="search" placeholder="Search docs…" autocomplete="off" aria-label="Search documentation">
      <div id="search-results" class="search-results" hidden></div>
    </div>
    <nav class="topnav" aria-label="Site">
      <a class="pill" href="${siteBase}tracker/">Training Tracker</a>
      <a class="icon-link" href="${repoUrl}" target="_blank" rel="noopener noreferrer">GitHub</a>
    </nav>
  </header>
  <main class="home-main" id="main">
    <section class="hero">
      <p class="eyebrow">404</p>
      <h1>That page moved or never existed.</h1>
      <p class="hero-copy">Try searching the library, or start from the documentation overview.</p>
      <div class="hero-actions">
        <a class="button primary" href="${siteBase}${overviewPage.url}">Documentation overview</a>
        <a class="button" href="${siteBase}">Home</a>
      </div>
    </section>
  </main>
  <script src="${siteBase}assets/site.js" defer></script>
</body>
</html>
`
}

function writeFile(relativePath, contents) {
  const target = path.join(outDir, relativePath)
  fs.mkdirSync(path.dirname(target), { recursive: true })
  fs.writeFileSync(target, contents)
}

function copyFile(source, relativeTarget) {
  const target = path.join(outDir, relativeTarget)
  fs.mkdirSync(path.dirname(target), { recursive: true })
  fs.copyFileSync(source, target)
}

function copyDirectory(source, relativeTarget) {
  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const from = path.join(source, entry.name)
    const to = path.posix.join(relativeTarget, entry.name)
    if (entry.isDirectory()) copyDirectory(from, to)
    else if (entry.isFile()) copyFile(from, to)
  }
}

function buildTracker() {
  const builtIndex = path.join(appDir, 'dist', 'index.html')
  if (process.env.SKIP_TRACKER_BUILD !== '1' || !fs.existsSync(builtIndex)) {
    const command = process.platform === 'win32' ? process.env.ComSpec ?? 'cmd.exe' : 'npm'
    const args = process.platform === 'win32'
      ? ['/d', '/s', '/c', 'npm run build']
      : ['run', 'build']
    execFileSync(command, args, { cwd: appDir, stdio: 'inherit' })
  }

  copyDirectory(path.join(appDir, 'dist'), 'tracker')

  const trackerIndex = path.join(outDir, 'tracker', 'index.html')
  const trackerHtml = fs.readFileSync(trackerIndex, 'utf8').replace(
    '</body>',
    `  <a class="sop-back" href="../">← SOP Library</a>
  <style>
    .sop-back { position: fixed; right: 18px; bottom: 18px; z-index: 50; padding: 9px 14px; color: #173d35; background: #d3e4d7; border: 1px solid #bdd5c4; border-radius: 999px; font: 600 12px 'DM Sans', 'Segoe UI', sans-serif; text-decoration: none; box-shadow: 0 6px 18px rgba(23, 61, 53, 0.18); }
    .sop-back:hover { background: #c6ddcc; }
  </style>
</body>`,
  )
  fs.writeFileSync(trackerIndex, trackerHtml)
}

fs.rmSync(outDir, { recursive: true, force: true })
fs.mkdirSync(outDir, { recursive: true })

for (const page of new Set(pages.values())) {
  writeFile(page.output, pageTemplate(page))
}

writeFile('index.html', homePage())
writeFile('404.html', notFoundPage())
writeFile('.nojekyll', '')

const navPayload = {
  sections: navSections.map((section) => ({
    t: section.title,
    c: section.children.map(navJson),
  })),
}
writeFile('nav.json', JSON.stringify(navPayload))

const searchIndex = [...new Set(pages.values())]
  .filter((page) => page.section !== 'overview')
  .map((page) => ({
    t: page.title,
    u: page.url,
    s: page.section === 'docs'
      ? sectionLabels[page.repoRel.split('/')[1]] ?? prettify(page.repoRel.split('/')[1])
      : page.section === 'schemas'
        ? 'Schemas'
        : 'Archive',
    x: page.plain.slice(0, 1400),
  }))
writeFile('search-index.json', JSON.stringify(searchIndex))

copyFile(path.join(assetsDir, 'site.css'), 'assets/site.css')
copyFile(path.join(assetsDir, 'site.js'), 'assets/site.js')
copyFile(path.join(appDir, 'public', 'favicon.svg'), 'favicon.svg')

for (const [repoRel, output] of assetCopies) {
  const source = path.join(repoRoot, repoRel)
  if (fs.existsSync(source)) copyFile(source, output)
}

buildTracker()

const pageCount = new Set(pages.values()).size
console.log(`\nGenerated ${pageCount} documentation pages into ${path.relative(repoRoot, outDir)}`)

if (brokenLinks.size > 0) {
  console.warn(`\n${brokenLinks.size} unresolved link target(s):`)
  let shown = 0
  for (const [target, sources] of brokenLinks) {
    if (shown >= 40) break
    console.warn(`  ${target}  (from ${[...sources][0]})`)
    shown += 1
  }
  if (process.env.STRICT_LINKS === '1') process.exitCode = 1
}
