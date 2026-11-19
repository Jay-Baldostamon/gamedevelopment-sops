import fs from 'node:fs'
import http from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const siteDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '_site')
const port = Number(process.env.PORT ?? 4173)

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
}

http
  .createServer((request, response) => {
    const urlPath = decodeURIComponent(new URL(request.url, 'http://localhost').pathname)
    let file = path.join(siteDir, urlPath)
    if (urlPath.endsWith('/')) file = path.join(file, 'index.html')

    if (!file.startsWith(siteDir) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
      response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' })
      response.end('Not found')
      return
    }

    response.writeHead(200, {
      'content-type': contentTypes[path.extname(file)] ?? 'application/octet-stream',
    })
    fs.createReadStream(file).pipe(response)
  })
  .listen(port, '127.0.0.1', () => {
    console.log(`Previewing the built site at http://127.0.0.1:${port}/`)
  })
