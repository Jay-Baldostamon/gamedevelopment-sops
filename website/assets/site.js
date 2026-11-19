(() => {
  const config = window.__SITE__ ?? { root: './', page: '' }
  const root = config.root
  const current = config.page

  const escapeHtml = (value) =>
    String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')

  const containsCurrent = (node) =>
    node.u === current || (node.c ?? []).some(containsCurrent)

  const renderNode = (node) => {
    if (node.c && node.c.length > 0) {
      const open = containsCurrent(node) ? ' open' : ''
      return `<li class="nav-dir"><details${open}><summary>${escapeHtml(node.t)}</summary><ul>${node.c
        .map(renderNode)
        .join('')}</ul></details></li>`
    }
    const active = node.u === current ? ' active' : ''
    const href = `${root}${node.u ?? ''}`
    return `<li><a class="nav-link${active}" href="${href}">${escapeHtml(node.t)}</a></li>`
  }

  const renderNav = (payload) => {
    const nav = document.getElementById('nav')
    if (!nav) return
    nav.innerHTML = (payload.sections ?? [])
      .map(
        (section) =>
          `<section class="nav-section"><p class="nav-section-title">${escapeHtml(
            section.t,
          )}</p><ul>${(section.c ?? []).map(renderNode).join('')}</ul></section>`,
      )
      .join('')
  }

  fetch(`${root}nav.json`)
    .then((response) => (response.ok ? response.json() : null))
    .then((payload) => {
      if (payload) renderNav(payload)
    })
    .catch(() => {})

  const menuToggle = document.querySelector('.menu-toggle')
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const open = document.body.classList.toggle('nav-open')
      menuToggle.setAttribute('aria-expanded', String(open))
    })
  }

  const input = document.getElementById('site-search')
  const results = document.getElementById('search-results')
  let indexPromise = null
  let focusIndex = -1

  const loadIndex = () => {
    if (!indexPromise) {
      indexPromise = fetch(`${root}search-index.json`).then((response) =>
        response.ok ? response.json() : [],
      )
    }
    return indexPromise
  }

  const closeResults = () => {
    if (!results) return
    results.hidden = true
    results.innerHTML = ''
    focusIndex = -1
  }

  const showResults = (entries, query) => {
    if (!results) return
    if (entries.length === 0) {
      results.innerHTML = `<p class="search-empty">No matches for “${escapeHtml(query)}”.</p>`
      results.hidden = false
      return
    }

    results.innerHTML = entries
      .map(
        (entry, index) =>
          `<a class="search-result" data-index="${index}" href="${root}${entry.u}"><strong>${escapeHtml(
            entry.t,
          )}</strong><span>${escapeHtml(entry.s)} · ${escapeHtml(entry.x.slice(0, 90))}</span></a>`,
      )
      .join('')
    results.hidden = false
  }

  const search = async (query) => {
    const trimmed = query.trim().toLowerCase()
    if (trimmed.length < 2) {
      closeResults()
      return
    }

    const entries = await loadIndex()
    const terms = trimmed.split(/\s+/)
    const matches = []

    for (const entry of entries) {
      const haystack = `${entry.t} ${entry.x}`.toLowerCase()
      if (terms.every((term) => haystack.includes(term))) {
        matches.push(entry)
        if (matches.length >= 60) break
      }
    }

    matches.sort((left, right) => {
      const leftTitle = left.t.toLowerCase().includes(trimmed) ? 0 : 1
      const rightTitle = right.t.toLowerCase().includes(trimmed) ? 0 : 1
      return leftTitle - rightTitle
    })

    showResults(matches.slice(0, 20), query)
  }

  if (input) {
    let timer = 0
    input.addEventListener('input', () => {
      window.clearTimeout(timer)
      timer = window.setTimeout(() => search(input.value), 120)
    })

    input.addEventListener('keydown', (event) => {
      if (!results || results.hidden) return
      const links = [...results.querySelectorAll('.search-result')]
      if (event.key === 'Escape') {
        input.blur()
        closeResults()
      } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault()
        if (links.length === 0) return
        focusIndex = event.key === 'ArrowDown'
          ? Math.min(focusIndex + 1, links.length - 1)
          : Math.max(focusIndex - 1, 0)
        links.forEach((link, index) => link.classList.toggle('is-focused', index === focusIndex))
        links[focusIndex].scrollIntoView({ block: 'nearest' })
      } else if (event.key === 'Enter' && focusIndex >= 0) {
        event.preventDefault()
        links[focusIndex].click()
      }
    })

    input.addEventListener('focus', () => {
      if (input.value.trim().length >= 2) search(input.value)
    })

    document.addEventListener('click', (event) => {
      if (!event.target.closest('.search')) closeResults()
    })
  }

  const tocLinks = [...document.querySelectorAll('.toc a')]
  const headings = tocLinks
    .map((link) => document.getElementById(decodeURIComponent(link.hash.slice(1))))
    .filter(Boolean)

  if (headings.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          tocLinks.forEach((link) =>
            link.classList.toggle(
              'is-active',
              decodeURIComponent(link.hash.slice(1)) === entry.target.id,
            ),
          )
        }
      },
      { rootMargin: '-90px 0px -70% 0px', threshold: 0 },
    )
    headings.forEach((heading) => observer.observe(heading))
  }
})()
