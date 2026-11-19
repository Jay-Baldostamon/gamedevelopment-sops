const punctuation = /[^\p{L}\p{N}\p{M}\s_-]/gu

const namedEntities = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&apos;': "'",
  '&nbsp;': ' ',
}

export function decodeEntities(value) {
  return value
    .replace(/&(?:amp|lt|gt|quot|apos|nbsp);/g, (entity) => namedEntities[entity])
    .replace(/&#(x?)([0-9a-f]+);/gi, (_, hex, code) =>
      String.fromCodePoint(Number.parseInt(code, hex ? 16 : 10)),
    )
}

// Mirrors github-slugger so in-repo anchors written for GitHub keep working.
export function githubSlug(text) {
  return decodeEntities(text)
    .replace(/<[^>]*>/g, '')
    .toLowerCase()
    .replace(punctuation, '')
    .replace(/\s/g, '-')
}

export function createSlugger() {
  const seen = new Map()
  return (text) => {
    const base = githubSlug(text)
    const count = seen.get(base) ?? 0
    seen.set(base, count + 1)
    return count === 0 ? base : `${base}-${count}`
  }
}

export function slugSegment(value) {
  const slug = value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  return slug || 'page'
}
