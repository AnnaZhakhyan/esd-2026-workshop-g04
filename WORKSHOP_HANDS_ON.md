# GitHub Actions — Pair exercise (15–20 minutes)

**Goal:** Watch automated tests pass, fail, and pass again after three GitHub commits. Work in pairs using **one GitHub account and a browser**. No terminal or installation needed.

## Start (3–5 minutes)

1. Open https://github.com/FontysVenlo/esd-2026-workshop-g04.
2. Click **Fork** → **Create a new fork**. Keep the default branch (`main`) and create the fork. If you already have a fork, open it instead.
3. Open your fork's **Actions** tab. If GitHub offers **I understand my workflows, go ahead and enable them**, select it. If necessary, check **Settings → Actions → General** to ensure Actions are allowed.
4. Verify your fork is on **main**. Do **not** work in the original Fontys repository.

## Part 1: Make CI pass (3 minutes)

1. Open `site/index.html` in **your fork**.
2. Select the pencil (**Edit this file**).
3. Change `<h1>Calculator CI Workshop</h1>` to `<h1>Calculator CI Workshop - Pair 1</h1>` (use your own pair number).
4. Click **Commit changes**; message: `exercise: update calculator heading`. Commit directly to **main in your fork**.
5. Open **Actions → Calculator CI → latest run**. Wait for **test** to pass (green).

**Discuss:** What caused the workflow to start? What command did it run?

## Part 2: Make CI fail (4 minutes)

1. Open `site/calculator.js` in your fork; click the pencil icon.
2. Change `return first + second;` to `return first - second;`.
3. Commit to **main** with `exercise: introduce calculator bug`.
4. Open **Actions → Calculator CI → latest run → test → Test the calculator**.
5. Confirm the test run is **red**. For `add(2, 3)` the expected result is **5**, but the actual result is **-1**.

**Discuss:** Why did the test fail? Did GitHub Actions automatically repair the code? (No.)

## Part 3: Fix CI (3 minutes)

1. Reopen `site/calculator.js`, click the pencil.
2. Restore `return first + second;`.
3. Commit to **main** with `fix: restore calculator addition`.
4. Open **Actions** again and check the latest **Calculator CI** run is **green**.

## Finished?

Show the presenters your three runs: **green → red → green**. Explain, in one sentence, how a `push` triggers a test job.

## Troubleshooting

- **No Actions workflows?** Make sure the fork was created *after the exercise was merged to the original repository's main*. Open the fork's **Actions** tab and enable workflows; check **Settings → Actions → General**.
- **No new run?** Check that you committed in your fork on `main` (not a new branch or the original repository).
- **Tests always green?** Verify you changed the actual function in `site/calculator.js`, not a comment.
- **Not finished on time?** A screenshot of the latest workflow run is enough to discuss the result.

**Reminder:** This is CI only. GitHub Pages deployment is not needed and is not configured in this exercise.
