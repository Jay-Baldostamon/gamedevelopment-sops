# Game Shell Ticket

Used on **Day 12 — First task: the game shell**.

This is a pre-written ticket. Every game needs these screens, so everyone delivers the same one. You write your own ticket on Day 14.

**How to use it:** paste everything inside the box below into a task ticket in your game repository, replace `<your game>`, then deliver it through one branch and one pull request.

---

```markdown
## Summary

<your game> can be played, but it has no beginning or end. A player who opens it lands straight in the action and has to quit the program to try again. Add the shell around the game so it can be started, paused, finished and restarted like a real game.

## Acceptance Criteria

- [ ] AC1: When the game opens, a title screen shows the game's name and a way to start (button or key).
- [ ] AC2: Starting from the title screen begins gameplay.
- [ ] AC3: Pressing Escape during gameplay pauses the game. Nothing moves while paused. The pause screen offers Resume and Quit to Title.
- [ ] AC4: When the player wins, a win screen says so clearly.
- [ ] AC5: When the player loses, a lose screen says so clearly.
- [ ] AC6: From both the win screen and the lose screen, the player can restart without closing the game. After restart, score, health, timers and objects are back to their starting state.
- [ ] AC7: A full run of title, play, lose, restart, play, win, title produces zero errors in the Unity Console.

## Files Involved

- New: a game state script (for example `GameManager.cs`) that tracks Title, Playing, Paused, Won and Lost
- New: UI for title, pause, win and lose (plain text and buttons are fine)
- Changed: whichever scripts currently decide winning and losing, so they report to the game state script
- Changed: the main scene

## Not Included

- Settings or options menus
- Sound or music
- Animated transitions
- Art for the screens (plain text on a plain background is correct for now)

## Evidence Required in the Pull Request

- One GIF or short video per acceptance criterion, labelled AC1 to AC7
- A screenshot of the Console after the AC7 run
```

---

## Delivery Rules

- Branch name: `feature/day12-game-shell`
- The pull request description contains `Closes #<ticket number>` so the work links back
- Keep it plain. The win screen can be the words "You Win" and a Restart button
- Every acceptance criterion gets its own labelled GIF

## Tips

- Ask your AI assistant to read the ticket and propose a plan **before** it writes code. Check that the plan covers all seven criteria.
- Pausing is usually done by setting `Time.timeScale` to 0. Ask what that stops and what it does not.
- The restart bug everyone hits: something still holds its old value after restart. Test AC6 twice in a row.
- AI writes, you wire: ask for click-by-click steps to build the UI and connect the buttons.
