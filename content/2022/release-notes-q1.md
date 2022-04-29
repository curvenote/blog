---
title: 2022-Q1
description: Document export improvements, API tokens, author improvements!
date: 2022-01-07T23:06:55.967Z
name: 2022-1
subject: Release Notes
oxa: oxa:9Kv3iYv0uCgaG0zl4WDZ/LSP3vg3i6ez1uALQaTW4
---

# 2022-Q1

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/BbExDhwaRxvWSDNwsKmi.2"}

### Mar 30, 2022 - Quality of Life 🦋

- Projects with a large number of references (100s) can still take a few seconds to load the full set of the latest versions for the first time. We have updated the loading indicator to let you know about that initial load.
- The Download menu item was confusing as it was only available for notebooks. This has been removed and notebooks and articles are downloaded / exported using the button in the page header.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-m7uwDOeNU5m7pyEvDh8o-v1.png
:name: KLbKXW8hy2
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/p3FzCOVJf8e6KgZ2UsIZ.5"}

## Mar 29, 2022 - Quality of Life 🐛 🏋️

### Citations

We’ve made a number of improvements to citation handling:

- The pop up menu for selection citations (accessible from `[[cite:` and `/cite`) has been improved - Citations load more quickly, it is easier to scroll through and select the citation that you need to add.
- That pop up also has a link that will open the Citation Management window should you need to add a new citation.
- The Citation Management window is now accessible from the toolbar on the bottom left.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-tV8XJhifvBEc2AoVRTg5-v1.png
:name: bnq5pYENzu
```

- We’ve improved performance of reference loading - this has the biggest impact in projects that have a lot of references loaded. In some cases with projects containing 100s of references the list would take a long time to load, this has been reduced to around 10s seconds in the Reference Manager and should be unnoticeable when using the `[[cite:` for a project with 700+ references. This will improve further in future.
- It is possible to copy and paste text between blocks in Curvenote. If the copied content contains citations, these will be pasted as linked citations. When this is done across projects, it is possible that the citation may be inaccessible to some viewers, who don’t have permission for the originating project and can affect export. A warning now appears for these citations, prompting authors to add references via bibtex to the project.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-UyYAY4Lerh4YFd4TthQK-v1.png
:name: GJJhEJ4fbL
```

### Other Changes

- When a project is loading, it is possible to see a page with “Project is Empty”. We’ve updated the message there to avoid confusion.
- We’ve increased the size of the icons on each block for adding new comment and the block status / version number - now they’re much more visible and easier to click. 🙌

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-rKXyThMt1RhiZX9lhSJ6-v1.gif
:name: jO73PF0Dms
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/AEw3LcCWSl55S8GY4ENs.1"}

## Mar 23, 2022 - Projects Settings

Project editors, not just owners, can now edit design features of a project (name, title, description, reference style). The project owner is still the only one who can change the project visibility (e.g. making a project public).

### Bug Fixes 🐛

- There was a problem with saving the affiliations if you were a project editor that has been resolved.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/jEVEbUcsRKvgatYoSB9Q.2"}

## Mar 21, 2022 - Block Drag and Drop reordering

We have introduced drag and drop for rearranging blocks of content in the app! These can be moved using `Opt-Up` on a Mac or `Alt-Up` on a PC. This can also be found through the option menu for any block.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-TNPZJheHRh8L5Wdq9XTc-v1.png
:name: x0cgm4OU1l
```

As a part of this change, we have redesigned the drag handle and moved the options menu to the left hand side. Over time the two other buttons for accessing the versioning and comment with be moved around a bit as well!

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-Wb8v9Lzv3YQVEQL6Nt9V-v1.gif
:name: r7Imesqr1R
```

### 🐛 Bug fixes and Improvements

- Using `Cmd-up` or `Cmd-down` to jump to the top/bottom of the page now works! 🖱️
- Selecting an affiliation with `Enter` (rather than the through a click) will now create the affiliation. ⌨️

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/AUwn19yJ2G3SdrB67IiP.1"}

### Mar 10, 2022 - Updated author lists

You can now search for authors by their user name or create them directly, you can now edit their ORCID, corresponding email, affiliation(s), and the various contributor roles ([CRediT Roles](https://casrai.org/credit/)) which are getting built into various PDF and other exports. Previously this was defined through the export process, and now more of this is available across templates!

The affiliations are saved in your project, so those can be edited or updated in a single place.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-oMOTaBjQly07EQjqToAW-v1.gif
:name: dbSqwkceNa
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/jivYqmfKY295Kox0a6Rh.2"}

## Feb 28, 2022

### Author Lookup

- Now when adding authors to your paper or article, you are able to look them up from the database of current Curvenote users by their name, or username. If the Author is does not have a Curvenote account, you can continue to add them as before by just typing their name.

### Bug Fixes 🐛

- Drag and drop has been restored to the Curvenote editor. Now you can drag citation in and out of groups, and drag images around in any active editor block.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/VYfkWwn9H9jgXFGbF0m4.2"}

## Feb 17, 2022 Pandas table widths

It’s possible to create tables with content wider than the page, especially when that originates from a Jupyter notebook via a library like `pandas`. We now scale tables proportionally in `tex` and `pdf` exports so that the content fits to the page width.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-WQhkqXkigtT1kIbkJsV1-v1.png
:name: cpa3Tikpsw
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/zHAyCs6QjmlKYrIHahOe.1"}

## Feb 16, 2022 Figure Referencing Options

We have added the ability to edit and set project wide defaults for reference labels, like figures, equations, tables, sections, and programs.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-ZsOzAO4QQSdEhU3GHzdG-v1.png
:name: zzEt4R7mkg

You can now update reference label defaults in the projects settings under a new design tab.
```

When you click on a reference (to a figure, equation, table, etc.) you will now be shown a way to edit the text that is displayed. You can fill the number into the text with a `%s`.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-ramCKfMuqfhU45M8uWJ0-v1.png
:name: Y5mqtllPdf
```

### 🐛 Bug fixes

- Removed autocomplete form filling in on forms where it doesn’t apply
- The 404 page no longer shows a spinner (bug was introduced with last changes!)

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/3fkUoqIzJ17SKI2cb4ft.2"}

## Feb 7, 2022 Bug Fixes 🐛

- Articles containing SVG images will now export to latex/pdf properly. SVGs are automatically converted to PDFs and included in tex/pdf.
- References in `.bib` files will now be de-duplicated based on the `label` field
- In the `public/default` template
  - The author/affiliation section of the title page will now wrap appropriately (previously this overflowed to the right and ran beyond the page)
  - A **References** section will no longer be added when the article does not contain citations.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/hQSqETaWeizBM4MPmYwF.1"}

## Feb 1, 2022 Groups in Nav

You can now add groups to your content by clicking on the `+` button at the bottom of the navigation bar!

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-FylibgMGpswcXzVie119-v1.png
:name: Is1NCJuvOS
```

We have also updated the nav items to look even better as well as added a shortcut to create a new article directly underneath an existing nav item.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-yxTKjKvhOim3GtmCZtsk-v1.gif
:name: x5Hl7nxYoB
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/QX1ITMoXRXT9JKZ48KDc.1"}

### Jan 24, 2022 - LaTeX Export improvements

There are many new improvements for the LaTeX export around making the export more robust and helpful!

- 🇬🇷 All greek letters are now transformed into their equivalent LaTeX
- 🔺 Text that includes signs like `<` `>` are transformed into `\textless` etc.
- 🧂 Equations in tables now no-longer cause a build failure
- ❓ Unknown citations, or those that are missing a key no longer cause the build to fail 🐛

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/5Ut4eFhqQbBA8JQKa5y3.1"}

### Jan 18, 2022 - API Tokens

You can now create an API token directly in the app, this is used to access the API and the Curvenote command-line interfaces. More information on that coming soon — if you want to sign up for the beta please get in touch with Rowan ([rowan@curvenote.com](mailto:rowan@curvenote.com)).

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-J3czBaBL7ZoDJzJbeMUX-v1.png
:name: eahiueXkoV
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/2S5pxx3PbWrortBHmOwY.1"}

### Jan 17, 2022 Share & Collaborate

We have added a few more hints on how to add collaborators to your project. Now when you `@mention` someone and are the project owner, you will have the opportunity to invite anyone else that you need! 🚀

````{margin}
We have also added share button in a few more places! 💥

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-RqIeO95RGMnTSyBTGyQw-v1.png
:name: yGwFwTBnaw
```

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-clvta6IhI1PmQulSgLUJ-v1.png
:name: ZjQKWNev8X
```

````

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-XaT2TbdtlM90ZCzDJ7Qw-v1.png
:name: yrKllyrxQT
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/pTV85YGrvxQBNvCkoCsW.3"}

## Jan 14, 2022

- All cited references in an article are now shown in a References section at the bottom of the page.
  - See the bottom of this page 👇 😄
- You can set the default citation style for your project the Project Settings. This citation style will be applied in the Curvenote app and in your exported files, except in LaTeX/PDF where the chosen template specifies its own citation and bibliography stying.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-d2WK4ReuMh5UKKElCY9h-v1.png
:name: j8qyXlE894
```

- Various improvements to the DOCX export including Table, Figure and Equation cross-referencing.

### Quality of Life 🐛

- Code mirror cell contents no longer overlap the right hand side Info / Version Sidebar in the app.
- Clicking the version badge on a cell now always opens the Info / Version panel even when the block is selected.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/h29148e2GX8IEpFCxKZZ.2"}

## Jan 7, 2022 - Welcome to 2022! 🎉

- References now show years in parenthesis if they are in-text, for example, {cite:t}`Cockett2015SimPEG`.
- In text citations have better defaults, and are now coming consistently through on the API. We have extended the API for references to allow for various citation formats.
- Notification URLs are fixed for in-app notifications (they previously went to the wrong base URL).
