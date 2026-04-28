# ZetaX Website — GitHub Push: Error Report & Solutions

**Date:** 2026-04-29  
**Repository:** https://github.com/Devashish-01/ZetaX-Website  
**Project:** `d:\zetax\ZetaX-main`

---

## Summary

Three separate issues were encountered while trying to push the ZetaX project to GitHub. All have been resolved or have documented solutions below.

---

## ❌ Error 1 — App Not Showing Anything (Blank Page)

### What You Did
```
npm run dev
```

### What Went Wrong
The `index.html` was **missing the `<script type="module" src="/index.tsx">` entry tag** that Vite requires to load the React app.

The file contained an `importmap` block (lines 57–68) that is designed for browser-native ESM loading (e.g., from `esm.sh`). This is incompatible with Vite's bundler — **Vite ignores importmaps entirely** and needs its own script tag to inject itself.

Because there was no script tag pointing to the React entry point, Vite served an empty shell `<div id="root"></div>` with no JavaScript ever loaded → **blank page**.

### ✅ Fix Applied
Removed the `importmap` block and added the correct Vite entry point:

```diff
- <script type="importmap">
- {
-   "imports": {
-     "react": "https://esm.sh/react@^19.2.3",
-     ...
-   }
- }
- </script>
- </head>
  <body>
    <div id="root"></div>
+   <script type="module" src="/index.tsx"></script>
  </body>
```

---

## ❌ Error 2 — `rmdir /s /q .git` Fails in PowerShell

### What You Typed
```
rmdir /s /q .git
```

### What Went Wrong
You were using **Command Prompt (cmd.exe) syntax** inside **PowerShell**.

In PowerShell, `rmdir` is aliased to `Remove-Item`, which does **not** accept `/s` or `/q` flags. These are CMD-only flags.

```
Remove-Item : A positional parameter cannot be found that accepts argument '/q'.
```

### ✅ Correct PowerShell Syntax
```powershell
# PowerShell way:
Remove-Item -Recurse -Force .git

# OR use the cmd-style shorthand (only works in PowerShell 5+):
rd -Recurse -Force .git
```

---

## ❌ Error 3 — `echo "# ZetaX-Website" >> README.md` Wrote Null Bytes

### What You Typed
```
echo "# ZetaX-Website" >> README.md
```

### What Went Wrong
In **PowerShell**, `echo` outputs UTF-16 LE (with null bytes between each character) by default when redirected with `>>`. This corrupted your README with null characters (`\0` bytes):

```
# ZetaX-Website  →  Stored as: #\0 \0Z\0e\0t\0a\0X\0-\0W\0e\0b\0s\0i\0t\0e\0
```

This caused the README to show garbled content at the bottom.

### ✅ Fix Applied
Replaced the README with a clean, properly encoded version using the editor.

### ✅ Prevention for Future
```powershell
# Use Add-Content which writes UTF-8 by default:
Add-Content README.md "# ZetaX-Website"

# OR force UTF-8 with Out-File:
"# ZetaX-Website" | Out-File -Append -Encoding utf8 README.md
```

---

## ✅ Complete Correct Workflow (PowerShell)

Run these commands in order from `d:\zetax\ZetaX-main`:

```powershell
# 1. Remove any old .git if it exists
Remove-Item -Recurse -Force .git -ErrorAction SilentlyContinue

# 2. Initialize fresh repo
git init

# 3. Set Git identity (one-time global setup)
git config --global user.name "Devashish-01"
git config --global user.email "your-email@example.com"

# 4. Stage all files
git add .

# 5. Commit
git commit -m "first commit"

# 6. Set branch name and push
git branch -M main
git remote add origin https://github.com/Devashish-01/ZetaX-Website.git
git push -u origin main
```

> **Note:** For `git push` to work, you need to be authenticated with GitHub.  
> The easiest way: **GitHub CLI** — run `gh auth login` once and all future pushes work automatically.  
> Or use a **Personal Access Token (PAT)**: create one at https://github.com/settings/tokens and use it as your password when prompted.

---

## Root Cause Summary

| # | Command | Shell Assumed | Actual Shell | Result |
|---|---------|--------------|--------------|--------|
| 1 | `echo "..." >> README.md` | CMD / Bash | PowerShell | Null bytes in file |
| 2 | `rmdir /s /q .git` | CMD | PowerShell | Parameter error |
| 3 | Missing `<script>` in `index.html` | — | — | Blank page |

---

## Key Lesson

> **PowerShell ≠ CMD.** PowerShell has different syntax for file operations. Always use PowerShell-native commands (`Remove-Item`, `Add-Content`, `Out-File`) when working in a PowerShell terminal.
