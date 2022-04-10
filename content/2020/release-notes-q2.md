---
title: 2020-Q2
description: Iooxa's (now Curvenote's) first ever release notes!
date: 2020-09-02T21:18:48.688Z
name: 2020-2
oxa: oxa:9Kv3iYv0uCgaG0zl4WDZ/TdaZwt4zzTL0LECRXsCi
---

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/CgGstdBFMOIbrUZmcWOG.2"}

## March 26, 2020

Both of the suggestion panels use [fuzzy-search](https://en.wikipedia.org/wiki/Approximate_string_matching), which means you get suggestions that are _close_ to what you type. In using the emoji suggestion, you are exposed to many more emoji, which is fun 🧑 🎨

### New Features ✨

- Suggestions can be triggered using `/` for a list of commands. At this time they are:
  - Callout, aside, headers, bullet list, math, dividers
- Add emojis using the `:` command, 🎉 🚀

### Improvements

- There are now prompts for command suggestions when the `block` is blank

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/YZXq13vpqgtzXQ6QpL2Y.3"}

## March 22, 2020

### New Features

- `Code` can be added using \`backticks\`
- Math can now be added using “$” and then typing your equation

### Improvements

- Language improvements around the publish process
- Enter & Escape in a math block now deselects and hides the latex input
- Code formatting can be toggled with the shortcut `Control/⌘-Shift-C`
- Code can no longer be bold/italic etc.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/YdRfXFE8U98bFTUeWHCe.2"}

## March 19, 2020

### New Features

- Add collaborators to a project with their username
- See the users that are added to a project
- Project settings can now be edited
- Publish an article and be able to see it when not-signed in

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/UEQWYf1d9fcwK5kxZIkG.4"}

## March 06, 2020

### New Features

- Subscript, superscript, strike through, underline, including menu and shortcuts
- Bullet point and numbered lists now have distinct styles (1. a. i.)
- Horizontal line can be created with `---` or `~~~`
- Improved block addition interface allows you to add above/below the current block
- Remove block from article (currently does not delete the block)

### Improvements

- Variable creation is less sensitive to spaces in the expression (type: `x = 1` for a variable)
- Node creations no longer selects node when created (type: `{{ 40 + 2 }}`)
- Clicking the menu items no longer jump you to the top of the document
- Display values are now shown with an underline
- Article title is now full width and can wrap to be multiline when editing
- Improved style of inline code element and drag number
- Iooxa logo now directs to your profile

### Bug Fixes

- Bug allowing you to edit/paste into a block when it was **_not_** editable has been fixed.
  - _Note_: edits were never saved and only effected your local document
- You can no longer nest Callout or Aside elements

### Deprecated

- Removed em-dash creation from shortcut `--` as it conflicted with horizontal line
