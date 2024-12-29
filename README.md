# My Git Learning Journey 🚀

Hey Future Me! 

I started this project to get better at using GitHub and make it a daily habit. The main idea was to collect screenshots from different websites (like are.na and cosmos style) and learn proper version control along the way. I was struggling with Git commands and VS Code at first, so I made this guide to remember everything I learned.

The project itself is about collecting visual inspiration, but this README is really about not forgetting all the Git stuff I'm learning. I worked with Claude to figure out the JavaScript parts and did the CSS changes myself.

## Why This Exists
- To remember Git commands
- To make using GitHub a daily habit
- To document my learning process
- To have a reference when I'm stuck

## Git Commands & Notes

### Initial Setup
```bash
# Create new repository locally
git init

# Connect to GitHub repository
git remote add origin [repository-url]

# Check repository status
git status

# Add files to staging
git add .                  # Add all files
git add [filename]         # Add specific file

# Commit changes
git commit -m "message"    # Always write clear messages!
```

### Daily Workflow
```bash
# 1. Always check status first
git status

# 2. Add changes
git add .

# 3. Commit with message
git commit -m "what I changed"

# 4. Push to GitHub
git push
```

### Time Travel (Checking Out Old Versions) ⌛
```bash
# See commit history
git log                    # Shows all commits with their hashes
git log --oneline         # Simplified view of commits

# Go to specific commit (all files)
git checkout [commit-hash] # Example: git checkout abc123f

# Checkout specific file from latest version
git checkout main -- [filename]     # Example: git checkout main -- chapter.txt

# Checkout specific file from old commit
git checkout [commit-hash] -- [filename]    # Example: git checkout abc123f -- chapter.txt

# Return to latest version
git checkout main         # Or 'master' in older repos

# Create new branch from old commit
git checkout -b [new-branch] [commit-hash]

# See file history
git log -- [filename]     # Shows commits that changed specific file
```

## Quick References 📝

### Common Situations

#### When Things Go Wrong
```bash
# Check what's happening
git status

# See what changed
git diff

# Fix last commit message
git commit --amend -m "New message"
```

#### Branch Management
```bash
# See all branches
git branch

# Create new branch
git checkout -b new-branch

# Switch branches
git checkout [branch-name]
```

## Daily Checklist ✅

1. `git status` - Check what's changed
2. `git add` - Stage changes
3. `git commit` - Save changes with message
4. `git push` - Upload to GitHub

## Remember 🧠

- Commit often
- Write clear messages
- When stuck: Status → Add → Commit → Push
- It's okay to mess up!

---

*Note to self: This whole thing started as a way to organize cool website screenshots, but it turned into a pretty good Git learning experience. Keep at it, and don't forget to check this guide when stuck!* 👊
