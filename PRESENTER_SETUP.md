# Presenter setup — 13-pair CI exercise

## Before the workshop

1. Merge the **CI-only exercise** PR into the original Fontys repository's `main`.
2. Check `.github/workflows/ci.yml`, `site/calculator.js`, `tests/calculator.test.js`, `site/index.html`, and `WORKSHOP_HANDS_ON.md` exist on `main`.
3. Verify that `Calculator CI` passes on the original repository's `main` branch.
4. Test a **fresh fork created after the merge**: enable Actions, change the heading, confirm green; introduce subtraction, confirm red; restore addition, confirm green.
5. Keep `feature/ci-cd-demo` unchanged for the live demonstration.

## In the room (15–20 minutes)

- 0–3 min: Introduce the goal and the repository URL, ask students to pair up.
- 3–7 min: Help students create forks and enable Actions.
- 7–10 min: First commit — heading change — green CI.
- 10–15 min: Break addition — red CI — inspect error.
- 15–18 min: Restore addition — green CI.
- 18–20 min: Ask what a workflow trigger is, which job ran, and why one run failed.

## Division of responsibilities

- Presenter 1: Project instructions and live GitHub Actions walkthrough.
- Presenter 2: Walk around assisting with forks, Actions enablement, and edit/commit issues.

## Common issues

- A fresh fork may require Actions to be enabled in the fork's Actions tab.
- Default branch should be `main`, avoiding the earlier `feature/ci-cd-demo` workaround.
- Only `Calculator CI` is part of this exercise; the three demo workflows remain confined to the demo branch.
- Students require a GitHub account; one account per pair is sufficient.
