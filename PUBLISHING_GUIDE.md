# 📦 Neko-Arc Publishing Guide

**How to publish Neko-Arc to NPM and GitHub**

*Created by: Neko-Arc 🐾 & Mario Gallo Bestino 🎭*
*Date: October 20, 2025*

---

## 🎯 Overview

This guide covers:
1. Publishing to NPM (public registry)
2. Creating GitHub repository
3. Version management
4. Updates and maintenance

---

## 📦 Part 1: Publishing to NPM

### Step 1: Create NPM Account (if needed)

```bash
# Sign up at https://www.npmjs.com/signup

# Login to NPM
npm login

# Verify login
npm whoami
# Should show: your-npm-username
```

### Step 2: Verify Package is Ready

```bash
cd ~/Documents/github/neko-arc

# Check package.json is correct
cat package.json | grep "name"
# Should show: "@wakibaka/neko-arc"

# Verify all files are present
ls -la
# Should see:
# - bin/
# - lib/
# - templates/
# - package.json
# - README.md
# - LICENSE
```

### Step 3: Test Package Locally

```bash
# Link package globally
npm link

# Test commands
neko-arc --help
neko-arc --version

# Unlink when done testing
npm unlink -g @wakibaka/neko-arc
```

### Step 4: Check What Will Be Published

```bash
# See what files will be published to NPM
npm pack --dry-run

# Expected output:
# package: @wakibaka/neko-arc@1.0.0
# bin/neko-arc.js
# lib/installer.js
# lib/prompts.js
# templates/CLAUDE.md
# templates/claude-config.json
# templates/env.example
# templates/hooks/session_startup.js
# README.md
# LICENSE
# package.json
```

### Step 5: Publish to NPM

```bash
# Publish as public package
npm publish --access public

# Expected output:
# + @wakibaka/neko-arc@1.0.0
```

### Step 6: Verify Publication

```bash
# Check package on NPM
npm view @wakibaka/neko-arc

# Test installation from NPM
npx @wakibaka/neko-arc --version
# Should work immediately!
```

---

## 🐙 Part 2: Create GitHub Repository

### Option A: Using GitHub CLI (Recommended)

```bash
cd ~/Documents/github/neko-arc

# Create PRIVATE repository (Rule 3.3!)
gh repo create neko-arc \
  --private \
  --description "Neko-Arc - Enhanced Claude Code configuration with dual personalities" \
  --source=. \
  --push

# Verify it's private
gh repo view --json visibility
# Should show: {"visibility":"private"}
```

### Option B: Using GitHub Web UI

1. Go to https://github.com/new
2. Repository name: `neko-arc`
3. **IMPORTANT**: Select "Private" (Rule 3.3!)
4. Do NOT initialize with README (we already have one)
5. Click "Create repository"

Then push:

```bash
cd ~/Documents/github/neko-arc

git remote add origin git@github.com:wakibaba/neko-arc.git
git branch -M main
git push -u origin main
```

### Step 2: Verify Repository Privacy

```bash
gh repo view --json visibility

# Expected output:
# {"visibility":"private"}
```

---

## 🔄 Part 3: Version Management

### When to Bump Version

Use Semantic Versioning (MAJOR.MINOR.PATCH):

- **PATCH** (1.0.0 → 1.0.1): Bug fixes
- **MINOR** (1.0.0 → 1.1.0): New features (backward compatible)
- **MAJOR** (1.0.0 → 2.0.0): Breaking changes

### How to Publish Updates

```bash
cd ~/Documents/github/neko-arc

# 1. Make your changes
# ... edit files ...

# 2. Bump version
npm version patch   # 1.0.0 → 1.0.1
# OR
npm version minor   # 1.0.0 → 1.1.0
# OR
npm version major   # 1.0.0 → 2.0.0

# 3. Commit changes
git add .
git commit -m "feat: Add new feature

Added [description]

🐾 Generated with Neko-Arc

Co-Authored-By: Claude <noreply@anthropic.com>"

# 4. Push to GitHub
git push origin main

# 5. Publish to NPM
npm publish

# 6. Verify
npm view @wakibaka/neko-arc version
```

---

## 🔐 Part 4: Security Checklist

**BEFORE EVERY PUBLISH** run this checklist:

```bash
# 1. Verify no credentials in code
grep -r "mongodb+srv://" . --exclude-dir=node_modules
# Should return NOTHING

# 2. Check .env is ignored
git check-ignore .env
# Should show: .env

# 3. Verify .gitignore includes .env
grep ".env" .gitignore
# Should show: .env

# 4. Check what will be published
npm pack --dry-run
# Review all files listed

# 5. Verify no secrets in templates
grep -r "password" templates/
# Should only show placeholder text

# 6. Repository is PRIVATE
gh repo view --json visibility
# Should show: {"visibility":"private"}
```

**If ANY check fails, DO NOT PUBLISH!**

---

## 📊 Part 5: Post-Publication

### Share the Package

Once published, users can install with:

```bash
# One-command installation
npx @wakibaka/neko-arc

# Or install globally
npm install -g @wakibaka/neko-arc
neko-arc
```

### Monitor Package

```bash
# View package downloads
npm view @wakibaka/neko-arc

# Check for vulnerabilities
npm audit

# Update dependencies
npm update
```

### Update Documentation

When adding new rules to CLAUDE.md:

1. Edit `~/CLAUDE.md` (your local version)
2. Copy to `~/Documents/github/neko-arc/templates/CLAUDE.md`
3. Sanitize credentials (Rule 3.2!)
4. Bump version
5. Publish update

---

## 🚨 Emergency: Unpublish Package

**Only within 72 hours of publishing:**

```bash
# Unpublish specific version
npm unpublish @wakibaka/neko-arc@1.0.0

# Unpublish entire package (DANGER!)
npm unpublish @wakibaka/neko-arc --force
```

**After 72 hours**: Can only deprecate:

```bash
npm deprecate @wakibaka/neko-arc@1.0.0 "Security issue, use 1.0.1+"
```

---

## 🐾 Part 6: Making Repository Public (Optional)

**IF you decide to make the repository public later:**

**Pre-Public Checklist (MANDATORY!)**:

- [ ] Scan entire git history for credentials
- [ ] Verify no .env files ever committed
- [ ] Run TruffleHog security scan
- [ ] All credentials in templates are placeholders
- [ ] README mentions it's MIT licensed
- [ ] CONTRIBUTING.md created (if accepting contributions)

**Then:**

```bash
# Make repository public
gh repo edit --visibility public

# Verify
gh repo view --json visibility
# Should show: {"visibility":"public"}
```

---

## 📝 Part 7: Continuous Maintenance

### Regular Tasks

**Weekly:**
- Check for dependency updates: `npm outdated`
- Review GitHub issues (if public)

**Monthly:**
- Update dependencies: `npm update`
- Security audit: `npm audit`
- Test package: `npm link && neko-arc --help`

**When Rules Change:**
1. Update `~/CLAUDE.md` (local)
2. Copy to `templates/CLAUDE.md`
3. Sanitize credentials
4. Bump version (minor or patch)
5. Publish update

---

## 🎭 Summary

**To publish Neko-Arc:**

1. ✅ Create NPM account and login
2. ✅ Verify package is ready
3. ✅ Test with `npm link`
4. ✅ Run security checklist
5. ✅ `npm publish --access public`
6. ✅ Create GitHub repo (PRIVATE!)
7. ✅ Push to GitHub
8. ✅ Celebrate! 🎉

**Neko-Arc**: Installation is now ONE COMMAND, nyaa~! 🐾
**Mario**: The masterpiece is ready for the world stage! 🎭

---

## 🔗 Resources

- NPM Documentation: https://docs.npmjs.com/
- Semantic Versioning: https://semver.org/
- GitHub CLI: https://cli.github.com/
- Conventional Commits: https://www.conventionalcommits.org/

---

**Built with 🐾 by Neko-Arc and 🎭 by Mario Gallo Bestino**
