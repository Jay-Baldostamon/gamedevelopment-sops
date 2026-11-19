# Week 18 Overview: Visual, Copy, and Layout Correctness Enforcement

Week 18 tightens the SimplaBots (`hurdman/simplabots`) Month 5 gate to treat visual, copy, and layout correctness as release-blocking quality, not deferred tech debt.

The objective is to make the product look and read exactly as intended at release, with pixel, text, and viewport checks running as first-class gate requirements rather than last-minute cosmetic reviews.

## What to Expect This Week

### Days 86-90 - Visual, Copy, and Layout Correctness Enforcement

This week converts design and content expectations into enforced, verifiable release checks.

Core execution focus:

- promote visual regression checks from advisory to blocking status
- automate copy, label, and message correctness against approved text
- validate layout across supported browsers, viewports, and zoom levels
- enforce brand and component styling consistency at release
- route locator and baseline churn through a controlled update pipeline

SimplaBots operating scope:

- baseline management for visual regression across core workflows
- copy-source-of-truth validation for user-facing text
- viewport and cross-browser layout coverage used by the release gate
- exception handling for deliberate design changes

## Week 18 Success Criteria

By the end of Week 18, QA should have:

- [ ] Visual regression checks wired into the blocking release gate
- [ ] Copy correctness validated against an approved copy source of truth
- [ ] Layout checks covering supported browsers, viewports, and zoom levels
- [ ] A controlled visual-baseline update and review process
- [ ] Zero silent visual/copy defects shipping in the covered workflow set
- [ ] Leadership visibility into visual quality metrics

## Guiding Principle

What users see and read is part of what they judge.

Week 18 ensures SimplaBots ships releases that match product intent down to the pixel and the word, making polish an enforced standard rather than an afterthought.
