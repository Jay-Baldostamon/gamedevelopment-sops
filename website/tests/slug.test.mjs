import assert from 'node:assert/strict'
import test from 'node:test'
import { createSlugger, githubSlug, slugSegment } from '../scripts/lib/slug.mjs'

test('githubSlug matches anchors used by GitHub headings', () => {
  assert.equal(githubSlug('Level 1 — Foundations (Days 1–20)'), 'level-1--foundations-days-120')
  assert.equal(githubSlug('L4 - Staff / Engineering Manager'), 'l4---staff--engineering-manager')
  assert.equal(githubSlug('Day 1 — Meet Gemini and Brief the Game'), 'day-1--meet-gemini-and-brief-the-game')
  assert.equal(githubSlug('MySQL Table Creation & Data Migration'), 'mysql-table-creation--data-migration')
})

test('createSlugger suffixes duplicate headings', () => {
  const slug = createSlugger()
  assert.equal(slug('Overview'), 'overview')
  assert.equal(slug('Overview'), 'overview-1')
  assert.equal(slug('Overview'), 'overview-2')
})

test('slugSegment produces url-safe segments', () => {
  assert.equal(slugSegment('Tools-Only 80-Day Learning Plan'), 'tools-only-80-day-learning-plan')
  assert.equal(slugSegment('CI-CD & Deployment'), 'ci-cd-deployment')
  assert.equal(slugSegment('???'), 'page')
})
