import path from 'node:path'

export function safeDecode(value) {
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

export function splitHref(href) {
  const hashIndex = href.indexOf('#')
  if (hashIndex === -1) return { pathname: href, hash: '' }
  return { pathname: href.slice(0, hashIndex), hash: href.slice(hashIndex) }
}

export function resolveRepoPath(fromRepoPath, hrefPath) {
  const cleaned = safeDecode(hrefPath).replace(/\\/g, '/')
  if (cleaned.startsWith('/')) return path.posix.normalize(cleaned.slice(1))
  return path.posix.normalize(path.posix.join(path.posix.dirname(fromRepoPath), cleaned))
}

export function encodeUrlPath(value) {
  return value
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/')
}

export function hrefBetween(fromOutput, toOutput, hash = '') {
  const relative = path.posix.relative(path.posix.dirname(fromOutput), toOutput)
  return encodeUrlPath(relative || path.posix.basename(toOutput)) + hash
}

export function rootPrefixFor(outputPath) {
  const depth = outputPath.split('/').length - 1
  return depth === 0 ? './' : '../'.repeat(depth)
}
