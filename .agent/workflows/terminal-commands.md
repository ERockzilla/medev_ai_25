---
description: How to run terminal commands in this project
---

# Terminal Command Guidelines for medev_ai_25

## IMPORTANT: Use CMD, not PowerShell

This project requires using **cmd** (Command Prompt) syntax, NOT PowerShell.

### When Running Commands:

1. **Do NOT use PowerShell-specific syntax** like:
   - `Select-Object`
   - `|` piping to PowerShell cmdlets
   - `2>&1 | head` or similar

2. **Use CMD-compatible commands**:
   ```cmd
   npm run build
   npm run dev
   npm run lint
   ```

3. **For output limiting**, just run the command and let it complete - don't try to pipe to head/tail.

4. **For running the dev server**:
   ```cmd
   npm run dev
   ```

// turbo-all
