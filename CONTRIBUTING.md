# Contributing to Flawless Clothing Store

Thank you for your interest in contributing to this project! This guide will help you set up your local development environment and handle common git operations, including merging branches.

## Table of Contents

- [Getting Started](#getting-started)
- [Local Development Setup](#local-development-setup)
- [Git Workflow](#git-workflow)
- [Merging Branches](#merging-branches)
- [Resolving Merge Conflicts](#resolving-merge-conflicts)
- [Common Issues and Solutions](#common-issues-and-solutions)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- Git

### Clone the Repository

```bash
git clone https://github.com/DanielAsare-ux/clothing-store.git
cd clothing-store
```

## Local Development Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Build for production:**

   ```bash
   npm run build
   ```

4. **Run linting:**

   ```bash
   npm run lint
   ```

## Git Workflow

### Creating a Feature Branch

Always create a new branch for your changes:

```bash
# Make sure you're on the main branch
git checkout main

# Pull the latest changes
git pull origin main

# Create a new branch
git checkout -b feature/your-feature-name
```

### Making Commits

```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Add: description of your changes"
```

### Pushing Your Branch

```bash
git push origin feature/your-feature-name
```

## Merging Branches

### Merging main into Your Feature Branch

Before creating a pull request, it's recommended to merge the latest `main` branch into your feature branch:

```bash
# Fetch the latest changes from remote
git fetch origin

# Switch to your feature branch
git checkout feature/your-feature-name

# Merge main into your branch
git merge origin/main
```

### Merging a Feature Branch into main (After PR Approval)

```bash
# Switch to main
git checkout main

# Pull latest changes
git pull origin main

# Merge your feature branch
git merge feature/your-feature-name

# Push the changes
git push origin main
```

### Using Rebase (Alternative to Merge)

Rebasing creates a cleaner history:

```bash
# Fetch latest changes
git fetch origin

# Switch to your feature branch
git checkout feature/your-feature-name

# Rebase onto main
git rebase origin/main

# Force push if you've already pushed (use with caution)
git push --force-with-lease origin feature/your-feature-name
```

> ⚠️ **Warning**: Force pushing overwrites the remote branch history. Only use this on your own feature branches and ensure no one else is working on the same branch. The `--force-with-lease` flag provides some protection by failing if the remote has new commits you haven't seen.

## Resolving Merge Conflicts

Merge conflicts happen when the same lines of code have been modified in different branches.

### Step 1: Identify Conflicted Files

After running `git merge`, Git will tell you which files have conflicts:

```bash
git status
```

Conflicted files will be listed under "Unmerged paths".

### Step 2: Open and Edit Conflicted Files

Open each conflicted file. You'll see conflict markers:

```
<<<<<<< HEAD
// Your current branch's code
=======
// Code from the branch you're merging
>>>>>>> branch-name
```

### Step 3: Resolve the Conflict

Edit the file to keep the code you want. Remove the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).

**Example:**

Before:
```javascript
<<<<<<< HEAD
const greeting = "Hello";
=======
const greeting = "Hi there";
>>>>>>> feature/new-greeting
```

After (choose one or combine):
```javascript
const greeting = "Hello there";
```

### Step 4: Mark as Resolved and Complete the Merge

```bash
# Stage the resolved file
git add <filename>

# Complete the merge
git commit -m "Merge branch 'main' into feature/your-feature-name"
```

### Using VS Code to Resolve Conflicts

VS Code provides a visual interface for resolving conflicts:

1. Open the conflicted file in VS Code
2. You'll see options above each conflict:
   - **Accept Current Change** - Keep your branch's version
   - **Accept Incoming Change** - Keep the other branch's version
   - **Accept Both Changes** - Keep both versions
   - **Compare Changes** - See a side-by-side diff

## Common Issues and Solutions

### "Your local changes would be overwritten by merge"

This happens when you have uncommitted changes. Solution:

```bash
# Option 1: Commit your changes first
git add .
git commit -m "WIP: Save current progress"
git merge origin/main

# Option 2: Stash your changes temporarily
git stash
git merge origin/main
git stash pop
```

### "fatal: refusing to merge unrelated histories"

This can happen when trying to merge branches that don't share a common ancestor:

```bash
git merge origin/main --allow-unrelated-histories
```

> ⚠️ **Warning**: Only use `--allow-unrelated-histories` in specific scenarios (like combining two separate repositories or initializing a new repository from another). This flag bypasses Git's safety mechanism, so make sure you understand why the histories are unrelated before using it.

### Abort a Merge in Progress

If you want to cancel a merge that's in progress:

```bash
git merge --abort
```

### Abort a Rebase in Progress

If you want to cancel a rebase:

```bash
git rebase --abort
```

### Check Current Branch Status

```bash
# See which branch you're on and uncommitted changes
git status

# See recent commit history
git log --oneline -10

# See all branches
git branch -a
```

### Reset to a Clean State

If things go wrong, you can reset your working directory:

```bash
# Soft reset - undo last commit but keep changes staged
git reset --soft HEAD~1

# Hard reset - undo last commit and discard all changes (use with caution!)
git reset --hard HEAD~1

# Discard all uncommitted changes (but keep commits)
git restore .
# For older Git versions (pre-2.23):
git checkout -- .
```

### Update Your Fork (If Working on a Fork)

```bash
# Add the original repository as upstream
git remote add upstream https://github.com/DanielAsare-ux/clothing-store.git

# Fetch from upstream
git fetch upstream

# Merge upstream changes into your main
git checkout main
git merge upstream/main

# Push to your fork
git push origin main
```

## Need Help?

If you encounter any issues not covered here:

1. Check the [Git documentation](https://git-scm.com/doc)
2. Open an issue in the repository
3. Reach out to the maintainers

---

Happy coding! 🛍️
