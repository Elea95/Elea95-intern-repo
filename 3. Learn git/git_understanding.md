# Understanding Staging vs. Committing in Git

## Difference Between Staging and Committing

- **Staging (`git add`)** prepares changes before committing.
- **Committing (`git commit`)** saves the staged changes in Git history.

## Why Git Separates Staging and Committing

- Allows organizing changes before committing.
- Helps group related modifications into a single commit.
- Prevents committing unfinished work accidentally.

## When to Stage Without Committing

- When working on multiple features but committing them separately.
- When reviewing changes before making them permanent.
- When preparing commits for a clean Git history.

# Understanding Branching & Team Collaboration in Git

## Why Pushing Directly to Main is Problematic

- Changes could break the main branch.
- Unfinished or buggy code could be deployed accidentally.
- No opportunity for review and feedback.

## How Branches Help with Reviewing Code

- Developers can test features in isolation before merging.
- Code reviews via pull requests improve code quality.
- Issues can be addressed without affecting production code.

## What Happens When Two People Edit the Same File on Different Branches?

- A **merge conflict** occurs if the same lines are changed.
- Git requires **manual conflict resolution** before merging.
- Teams use **code reviews and rebase strategies** to manage conflicts.

# Advanced Git Commands & When to Use Them

## 1. git checkout main -- <file>

- **Restores a specific file from the main branch** without affecting other changes.
- **Use case**: If I accidentally modified or deleted a file and want to undo changes.

## 2. git cherry-pick <commit>

- **Applies a single commit** from another branch without merging everything.
- **Use case**: If a teammate made a useful fix but their branch isn’t ready to merge yet.

## 3. git log

- **Displays commit history** with details like author, timestamp, and changes.
- **Use case**: To track code evolution and find past changes.

## 4. git blame <file>

- **Shows who modified each line** in a file and when.
- **Use case**: Helps debug issues by identifying who made the last change.

### What Surprised Me?

- `git cherry-pick` is really powerful for **applying specific changes** without merging a whole branch.
- `git blame` is useful for **understanding why code was changed** before modifying it.

# Git Bisect: Debugging Faster

## What Does `git bisect` Do?

- `git bisect` is a binary search tool to identify which commit introduced a bug.
- It automates the process of checking each commit, speeding up debugging.

## When Would You Use It?

- When a bug appears, but we don't know **which commit introduced it**.
- If a large team is working on a project and **many commits** were made before the bug was noticed.

## How Does It Compare to Manual Debugging?

- **Manual Debugging**: Requires checking each commit one by one, which is slow.
- **Git Bisect**: Uses a **binary search approach**, reducing the number of checks dramatically.

## Key Learnings:

- `git bisect` is powerful for debugging long-running projects.
- Marking commits as **"good" or "bad"** helps track down the exact cause.
- Using `git bisect reset` ensures the repository is returned to normal.

# Writing Meaningful Commit Messages

## What Makes a Good Commit Message?

- A good commit message is **clear, concise, and structured**.
- It follows a **consistent format** (e.g., `type(scope): short summary`).
- It **explains why** a change was made, not just what changed.

## How Does a Clear Commit Message Help in Team Collaboration?

- Helps developers **quickly understand** changes without reading the code.
- Makes debugging and **reverting commits easier**.
- Provides **historical context** for decisions in long-term projects.

## How Can Poor Commit Messages Cause Issues Later?

- **Vague messages** ("updated files") make it impossible to know what was changed.
- **Overly detailed messages** waste time and clutter commit history.
- **Unstructured messages** reduce readability and make team collaboration harder.

# Creating & Reviewing Pull Requests

## Why Are PRs Important in a Team Workflow?

- Ensures **code quality** before merging.
- Encourages **collaboration and discussion**.
- Allows **tracking of changes** and their reasoning.

## What Makes a Well-Structured PR?

- **Clear Title** – Explains the change (e.g., `fix(auth): improve login security`).
- **Detailed Description** – Lists changes and reasons.
- **Linked Issues** – References related issues (e.g., `Fixes #42`).
- **Concise Commits** – Small, logical commits improve readability.

## What Did I Learn from Reviewing an Open-Source PR?

- **Constructive feedback** is crucial in reviews.
- Well-structured PRs **speed up approval**.
- Reviewing helps **catch potential bugs early**.
