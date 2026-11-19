import assert from 'node:assert/strict'
import test from 'node:test'
import {
  hrefBetween,
  resolveRepoPath,
  rootPrefixFor,
  splitHref,
} from '../scripts/lib/links.mjs'

test('resolveRepoPath resolves encoded, parent-relative links', () => {
  assert.equal(
    resolveRepoPath(
      'docs/blueprints/training/artificial-intelligence/L1/Week 1/Day 1 - Exposure.md',
      '../../Tools-Only%2080-Day%20Learning%20Plan.md',
    ),
    'docs/blueprints/training/artificial-intelligence/Tools-Only 80-Day Learning Plan.md',
  )
  assert.equal(
    resolveRepoPath('docs/playbooks/README.md', 'ai-enablement/GitHub%20Issue%20Task%20Creator.md'),
    'docs/playbooks/ai-enablement/GitHub Issue Task Creator.md',
  )
  assert.equal(resolveRepoPath('README.md', 'docs/playbooks/README.md'), 'docs/playbooks/README.md')
})

test('hrefBetween builds encoded relative urls and keeps fragments', () => {
  assert.equal(hrefBetween('playbooks/ai/x.html', 'playbooks/index.html'), '../index.html')
  assert.equal(
    hrefBetween('playbooks/index.html', 'blueprints/tools-only-80-day.html', '#level-1'),
    '../blueprints/tools-only-80-day.html#level-1',
  )
  assert.equal(
    hrefBetween('a/b/c.html', 'a/d/my page.html'),
    '../d/my%20page.html',
  )
})

test('rootPrefixFor counts directory depth', () => {
  assert.equal(rootPrefixFor('index.html'), './')
  assert.equal(rootPrefixFor('playbooks/index.html'), '../')
  assert.equal(rootPrefixFor('playbooks/ai/page.html'), '../../')
})

test('splitHref separates path and fragment', () => {
  assert.deepEqual(splitHref('a/b.md#section'), { pathname: 'a/b.md', hash: '#section' })
  assert.deepEqual(splitHref('#section'), { pathname: '', hash: '#section' })
})
