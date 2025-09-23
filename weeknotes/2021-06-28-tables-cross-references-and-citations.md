---
title: Tables, Cross-References & Citations
description: >-
  This week we introduced changes for internal cross-referencing of content and
  citation management improvements.
short_title: ''
subtitle: Week of June 28, 2021
date: 2021-06-28
tags:
  - citation
  - tables
  - weeknote
thumbnail: thumbnails/2021-06-28-tables-cross-references-and-citations.png
---

This week we released updates to tables, citation management, cross-references, and using Curvenote for writing papers and publishing with these new referencing features in mind. We will be making progress on _bibtex_ import over the coming weeks as well as integrating with reference managers like [Zotero](https://www.zotero.org/).

# Jun 24, 2021 Internal References

## 🔢 Numbering and Referencing internal content

- Equations and headings can now be numbered and can be referenced throughout your articles. You can use the `[[sec:` and `[[eq:` to search through section headings and equations, respectively. You can see the numbering on the headers about and on the equation and figures. 🚀 🔢

```{math}
:label: a46314cc

\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x)\ e^{-2\pi i x \xi}\,dx
```

You can now reference sections and equations as well as traditional citations: {cite:t}`Cockett2018Efficient`.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-wJfz7n327hL6BPok8gPx-v2.mp4
:name: ab9fd561
:align: center
:width: 70%

Internal references to sections and figure numbers.
```

You can also reference figures, for example, {numref}`Figure %s <ab9fd561>` above! Try clicking it, and you can see what it refers to.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-4PpZUKxmFOR3XCya7UFE-v2.png
:name: ab315e36
:align: center
:width: 40%

Image previews for figures are inline when you start to reference the content.
```

### 📝 Editor changes

- The suggestions now trigger in more situations (after punctuation, emojis, or on an internal break).
- The suggestion panel is better placed when it is above the suggestion area
- Images, code-blocks, equations and headers now have IDs.
- Only show the header actions if the whole header is selected, it will also show up when you start typing the header as well.
  - We also removed a bug that happened when two different headers were selected, where the inline action prompt would show up for the first one - now nothing shows up in this situation. 🧙
  - Another bug was fixed where if you created a new block while a header was selected, the app would error.
- The link search is now only filtered when you type `:`, for example, `[[fig:` which searches figure references.
- The labels that were on headers and figures (🏷️) have been removed for now. This means output $\LaTeX$ will be through an ID system for now (which is a bit less readable).
- The figure caption is now no longer the same width as the image for small images.

### 💌 Quality of Life

- The circular progress on forms is now (again) contained to the line-height.
- Forms do not resize the height of the screen when there is a new form status or on successful completion.
- There was a problem publishing citations - the visibility of those was not included in what was published, meaning users couldn’t see the citation. This has been fixed.
- Clear preview was added in View mode, and the style issues of overlap were fixed!
- We have added a clear preview of a block when viewing the content, previously this was only available in edit mode.
