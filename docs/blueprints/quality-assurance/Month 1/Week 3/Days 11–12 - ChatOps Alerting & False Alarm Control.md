# Days 11–12: ChatOps Alerting & False Alarm Control


Days 11 and 12 build a high-signal alerting layer on top of the Playwright CI pipeline from Day 10.

For hurdman/simplabots, the goal is not to spam Slack or Teams every time a workflow runs.
The goal is to stay silent when everything is healthy and send clear, forensic, actionable messages only when the Playwright quality gate fails.

The team standard is:

Quiet success. Loud, actionable failure.

## Day 11: Alert Architecture & Webhook Provisioning

### Session: Define the Silent Pass Rule

The team adopts the most important alerting rule:

If a PR smoke run passes, send no chat message.

Successful runs already show as green checks directly on GitHub pull requests. Sending extra “success” messages creates alert fatigue and makes real failures easier to ignore.

Chat notifications are reserved for:

- failed PR smoke gates

- failed nightly regression runs

- failed scheduled visual/regression checks

- repeated flake patterns that require attention

### Session: Define Alert Destinations

The team maps where each alert should go.

| Run Type | Trigger | Chat Behavior | Audience |
| --- | --- | --- | --- |
| Pull Request Smoke Gate | PR opened/updated | Notify only on failure | PR author + QA/staging alert channel |
| Push to Protected Branch | Merge to main/master | Notify only on failure | Engineering/QA |
| Nightly Regression | Scheduled cron | Send summary if failed; optional morning health report | #qa-alerts-staging |
| Manual Workflow Dispatch | Human-triggered run | Notify only on failure unless explicitly debugging | Person who triggered it |

Recommended channel:

#qa-alerts-staging



Important correction:

@${{ github.actor }} does not automatically tag someone in Slack unless that GitHub username matches a Slack handle or you maintain a GitHub-to-Slack user mapping.

For true direct pings, the team needs one of these:

- GitHub Slack app/user mapping

- a checked-in or secret-managed mapping table

- Slack user IDs stored as GitHub variables/secrets

- a simpler first phase: post author name without direct mention

### Session: Provision the Webhook Securely

The team creates one incoming webhook for Slack or Teams.

Recommended GitHub Secret names:

SLACK_WEBHOOK_URL



or:

TEAMS_WEBHOOK_URL



Security rule:

Webhook URLs are credentials. Treat them like passwords.

They must never appear in:

- workflow plaintext

- .env.example

- docs

- screenshots

- local notes committed to the repo

- Playwright fixtures

- test output

### Session: Decide the Minimum Useful Alert Payload

A useful failure alert should answer five questions immediately:

- What failed?

- Where did it fail?

- Who triggered it?

- Which branch/PR is affected?

- Where are the forensic artifacts?

Required fields:

- repository

- workflow name

- branch

- PR link if available

- actor

- event type

- GitHub run link

- Playwright report/artifact link if available

- failure type or gate name, such as “PR smoke gate”

### Session: Artifact Link Strategy

The safest first version should always include the GitHub Actions run URL:

https://github.com/<owner>/<repo>/actions/runs/<run_id>



That page contains:

- logs

- uploaded artifacts

- failed job details

- rerun controls

- commit/branch context

If using actions/upload-artifact@v4, the workflow can also expose a direct artifact URL through step outputs.

Recommended approach:

- Upload playwright-report/

- Upload test-results/

- Notify Slack/Teams after artifact upload

- Include both:

- GitHub run URL

- artifact URL when available

### Day 11 Deliverable

By end of Day 11, the team should have:

- Silent Pass rule documented

- alert routing matrix agreed

- Slack/Teams webhook created

- webhook stored in GitHub Secrets

- no webhook value committed anywhere

- agreed failure payload fields

- decision made on whether developer direct-pings are required in phase one

## Day 12: Payload Engineering & False Alarm Filter

### Session: Add Failure-Only Notification Step

The workflow should notify only after Playwright fails.

For Simplabots, this should extend the existing .github/workflows/playwright.yml from Day 10.

The important condition is:

if: failure()



This prevents successful runs from posting noise.

### Session: Recommended Slack Notification Implementation

This version uses curl directly instead of a third-party Slack action.
That keeps the workflow explicit and avoids adding another action dependency.

name: Playwright Quality Gates

on:

pull_request:

branches: [main, master]

push:

branches: [main, master]

schedule:

- cron: '0 6 * * *'

workflow_dispatch:

jobs:

playwright:

timeout-minutes: 60

runs-on: ubuntu-latest

env:

PLAYWRIGHT_BASE_URL: ${{ secrets.PLAYWRIGHT_BASE_URL }}

E2E_USER_EMAIL: ${{ secrets.E2E_USER_EMAIL }}

E2E_USER_PASSWORD: ${{ secrets.E2E_USER_PASSWORD }}

CI_TEST_ACCOUNT_ID: ${{ secrets.CI_TEST_ACCOUNT_ID }}

CI_TEST_PROFILE_ID: ${{ secrets.CI_TEST_PROFILE_ID }}

steps:

- name: Checkout repository

uses: actions/checkout@v4

- name: Setup Node.js

uses: actions/setup-node@v4

with:

node-version: '20'

cache: 'pnpm'

- name: Setup pnpm

uses: pnpm/action-setup@v4

with:

version: 10

- name: Configure Font Awesome Pro registry

run: |

echo "@fortawesome:registry=https://npm.fontawesome.com/" >> ~/.npmrc

echo "//npm.fontawesome.com/:_authToken=${{ secrets.FONTAWESOME_NPM_AUTH_TOKEN }}" >> ~/.npmrc

- name: Install dependencies

run: pnpm install --frozen-lockfile

- name: Install Playwright browsers and Linux dependencies

run: pnpm exec playwright install --with-deps

- name: Run Pull Request smoke gate

if: github.event_name == 'pull_request'

run: pnpm exec playwright test --grep @smoke

- name: Run main branch smoke gate

if: github.event_name == 'push'

run: pnpm exec playwright test --grep @smoke

- name: Run nightly regression suite

if: github.event_name == 'schedule' || github.event_name == 'workflow_dispatch'

run: pnpm exec playwright test

- name: Upload Playwright report

id: upload-playwright-report

if: ${{ !cancelled() }}

uses: actions/upload-artifact@v4

with:

name: playwright-report-${{ github.run_id }}

path: playwright-report/

retention-days: 7

- name: Upload Playwright test results

id: upload-playwright-results

if: ${{ failure() }}

uses: actions/upload-artifact@v4

with:

name: playwright-test-results-${{ github.run_id }}

path: test-results/

retention-days: 7

- name: Notify QA channel on Playwright failure

if: ${{ failure() }}

env:

SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}

REPOSITORY: ${{ github.repository }}

BRANCH: ${{ github.head_ref || github.ref_name }}

ACTOR: ${{ github.actor }}

EVENT_NAME: ${{ github.event_name }}

RUN_URL: ${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }}

REPORT_URL: ${{ steps.upload-playwright-report.outputs.artifact-url }}

RESULTS_URL: ${{ steps.upload-playwright-results.outputs.artifact-url }}

PR_URL: ${{ github.event.pull_request.html_url }}

run: |

MESSAGE=$(cat <<EOF

{

"blocks": [

{

"type": "header",

"text": {

"type": "plain_text",

"text": "🚨 Simplabots Playwright Quality Gate Failed",

"emoji": true

}

},

{

"type": "section",

"fields": [

{

"type": "mrkdwn",

"text": "*Repository:*\\n${REPOSITORY}"

},

{

"type": "mrkdwn",

"text": "*Branch:*\\n${BRANCH}"

},

{

"type": "mrkdwn",

"text": "*Triggered By:*\\n${ACTOR}"

},

{

"type": "mrkdwn",

"text": "*Event:*\\n${EVENT_NAME}"

}

]

},

{

"type": "section",

"text": {

"type": "mrkdwn",

"text": "A Playwright test gate failed. Review the GitHub run and download the Playwright report/test artifacts before rerunning or merging."

}

},

{

"type": "actions",

"elements": [

{

"type": "button",

"text": {

"type": "plain_text",

"text": "View GitHub Run"

},

"url": "${RUN_URL}",

"style": "danger"

},

{

"type": "button",

"text": {

"type": "plain_text",

"text": "Open Playwright Report Artifact"

},

"url": "${REPORT_URL}"

},

{

"type": "button",

"text": {

"type": "plain_text",

"text": "Open Test Results Artifact"

},

"url": "${RESULTS_URL}"

}

]

}

]

}

EOF

)

curl -X POST \

-H 'Content-type: application/json' \

--data "$MESSAGE" \

"$SLACK_WEBHOOK_URL"



### Session: If the Team Prefers rtCamp/action-slack-notify

This is simpler, but less flexible than custom Slack Block Kit.

- name: Notify QA channel on Playwright failure

if: failure()

uses: rtCamp/action-slack-notify@v2

env:

SLACK_WEBHOOK: ${{ secrets.SLACK_WEBHOOK_URL }}

SLACK_CHANNEL: qa-alerts-staging

SLACK_COLOR: '#FF0000'

SLACK_TITLE: '🚨 Simplabots Playwright Quality Gate Failed'

SLACK_MESSAGE: |

Repository: ${{ github.repository }}

Branch: ${{ github.head_ref || github.ref_name }}

Triggered By: ${{ github.actor }}

Event: ${{ github.event_name }}

Run: ${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }}

The Playwright quality gate failed. Review the GitHub run and download the Playwright report/test-results artifacts.

SLACK_FOOTER: 'Simplabots Playwright CI'



### Session: False Alarm Filter

The team defines what should and should not alert.

#### Should Alert

- PR smoke gate failure

- main/master smoke gate failure

- scheduled nightly regression failure

- workflow failure due to missing secrets

- dependency install failure

- Playwright setup failure

- artifact upload failure if reports cannot be retrieved

#### Should Not Alert

- successful PR runs

- successful pushes

- successful nightly runs, unless the team explicitly wants a daily health summary

- cancelled runs

- draft PR experiments, if configured to skip

- local QA runs

Optional future improvement:

if: ${{ failure() && github.event.pull_request.draft == false }}



Use that only if the team wants draft PRs to avoid notifications.

### Session: Intentional Failure Drill

The team performs a controlled alert drill.

Steps:

- Create a temporary branch.

- Open a PR.

- Break one known Playwright smoke assertion.

- Push the change.

- Watch GitHub Actions run.

- Confirm chat stays silent while the job is still passing/running.

- Confirm chat alert fires only after failure.

- Click the GitHub run link from chat.

- Download the Playwright report/test-results artifact.

- Revert the intentional failure.

- Confirm the rerun passes silently.

Success criteria:

- no success message is sent

- failure card appears in the right channel

- card contains correct repository, branch, actor, event

- GitHub run link works

- report/artifact link works

- the message is readable on desktop and mobile

### Session: Mobile Formatting Review

The team reviews the alert on a phone.

Check:

- title is visible without opening the full message

- branch and actor are easy to see

- action buttons are not buried

- message is not too long

- no raw JSON appears

- no secrets appear

- artifact/run links are clickable

Team rule:

A failure alert should be short enough to scan and rich enough to act on.

### Day 12 Deliverable

By end of Day 12, the team should have:

- failure-only Slack or Teams notification added to CI

- SLACK_WEBHOOK_URL or TEAMS_WEBHOOK_URL stored in GitHub Secrets

- Silent Pass behavior verified

- GitHub run link included in failure alert

- Playwright report/test-results artifact link included when available

- intentional failure drill completed

- mobile readability checked

- notification policy documented

### Advisor Checklist for You (Leader) at EOD

- [ ] Do successful PR Playwright runs send zero chat messages?

- [ ] Is the webhook stored only in GitHub Secrets?

- [ ] Is the webhook absent from committed code, docs, logs, screenshots, and .env.example?

- [ ] Does a failed PR smoke gate send one clear alert?

- [ ] Does the alert include repository, branch, actor, event, and GitHub run link?

- [ ] Does the alert include report/artifact links or at least a direct GitHub Actions run link?

- [ ] Did the team confirm that GitHub actor mentions do not falsely imply Slack pings unless user mapping exists?

- [ ] Did the team perform an intentional failure drill?

- [ ] Is the alert readable on mobile?

- [ ] Did the team revert the intentional failure and confirm the next green run stays silent?

## Milestone: ChatOps Diagnostics Online

By the end of Day 12, Simplabots has a practical ChatOps layer:

- green runs stay quiet

- failed runs notify the right channel

- reports and traces are easy to find

- webhook credentials remain secure

- developers receive actionable context instead of vague “tests failed” noise

This turns Playwright CI from a passive gate into an active diagnostic system.

