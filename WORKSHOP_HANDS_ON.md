# GitHub Actions > Multiplication challenge (15–20 minutes)

**Goal:** Discover a failing CI run, implement multiplication, and make CI pass. Work in pairs using **one GitHub account and a browser**. No terminal or installation needed.

## Start: Fork and enable Actions (3–5 minutes)

1. Open https://github.com/FontysVenlo/esd-2026-workshop-g04.
2. Select **Fork → Create a new fork**. Keep `main` as the default branch. Each pair should work in their own fork, not in the original repository.
3. In your fork, open the **Actions** tab. If GitHub asks you to enable workflows, click **I understand my workflows, go ahead and enable them**.
4. Confirm you are on your fork's **main** branch.

## Part 1: Discover the failure (3–4 minutes)

1. In your fork, open `README.md` and select the pencil icon to edit it.
2. Add some interesting text down below for example: `Potatoes are pealable`
3. Commit the change directly to `main` with message `exercise: start multiplication challenge`.
4. Open **Actions → Calculator CI → latest run**.
5. The workflow should be **red**. Open the failed **test** job and expand **Test the calculator**.
6. Look for the multiplication tests and their error message: `Multiplication is not implemented yet`.

**Discuss:** What triggered the workflow? Why did addition pass but multiplication fail?

## Part 2: Implement multiplication (5–7 minutes)

1. Open `site/calculator.js` in **your fork** and select the pencil icon.
2. Find the `multiply(first, second)` function. It currently throws an error.
3. Replace the error with an implementation that multiplies the two inputs. Keep the `add` function unchanged.
4. Commit directly to `main` with message `feat: implement advanced multiplication B)`.
5. Open **Actions → Calculator CI → latest run**. If your implementation is correct, all **7 tests** should pass and CI should be **green**.

**Discuss:** Did CI fix the code, or did it only check your changes?

## Finished?

Show us **two workflow runs: red → green**. Explain in one sentence how a commit triggered an automated test job.

## Troubleshooting

- **No workflow visible?** Open your fork's Actions tab and enable workflows if prompted. Check **Settings → Actions → General** if Actions are disabled.
- **No new run?** Confirm your commit was made to `main` in **your fork**, not the original repository.
- **Still red?** Open **Actions → Calculator CI → test → Test the calculator** to read which test failed. Check that `multiply` returns the product rather than throwing an error.
- **Already had a fork?** Sync it with the original `main` before starting, or create a fresh fork if appropriate.
- **Working on a phone?** GitHub's browser editor may be easier to use in desktop mode or on a laptop.

**Reminder:** This is a CI-only exercise. You do not need to deploy the website, configure GitHub Pages, or change the workflow YAML.
