---
title: 2020-Q3
description: Import blocks, images, and more!
date: 2020-08-28T05:36:54.598Z
name: 2020-3
oxa: oxa:9Kv3iYv0uCgaG0zl4WDZ/yjRCR9Sr4R71NQKhN2we
---

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/YcbLDLRmovn6m5xsUEff.2"}

## Sept 30, 2020

### New Website

We have added a completely new website, still a process of actually filling out the content, but that will come with time!! 🚀

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-im6YQrfgyvxr5NWPfIs7-v1.png
:name: 78fb756a

The about page on iooxa.com. Including updating our logo slightly!
```

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-ynWbZKwqMXg6GsyIYtBT-v1.png
:name: 6b1353fc
```

Our favourite part is the new Team section, because the team is awesome - and now they are displayed!!

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-vxV1vXf2qz3gwEAQw9o3-v1.png
:name: aaac7614
```

### ✨ UI Improvements

- Navigating to the settings page now changes the URL.
- There are performance improvements on first load of profiles and project pages.
- The command and emoji suggestion panels are dismissed after a trailing space. `: `and `/`

### 📖 API Improvements

- We now have documentation for our API. See the [API page](https://iooxa.com/api) on our website for more information.
- You can now query for projects in a team, and it returns all that you have access to.
- You can now query for all published blocks in a project, including if that project is public or has manifest security.

### 🐛 Bugs

- There was a problem in switching between block IDs and a named block, where the name was used regardless of if it was the same block. This fixes the navigation issue.

### 🛑 Deprecated

- The API endpoints for `/users/my/projects` have been deprecated and replaced with `/my/projects`, etc.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/Cfr3uPGnYmxlDHlN6avH.1"}

## Sept 23, 2020

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-FbAKkMb1xtZnMV6NJBe8-v1.png
:name: 1e5e4bba

Check out our [JupyterCon video](https://www.youtube.com/watch?v=WAyiDTt9DnQ&ab\_channel=iooxa).
```

### Jupyter Extension Updates (0.1.3)

You can now see (simple) outputs in the iooxa view of your Jupyter Notebooks, we have also improved the styling of a notebook to be a bit more similar to Jupyter (including code syntax highlighting).

This means you can also use outputs directly in iooxa articles! This is a focus of our JupyterCon poster and [presentation](https://www.youtube.com/watch?v=WAyiDTt9DnQ&ab_channel=iooxa) (Oct 12), which demonstrates real-time collaboration in Jupyter and reusing figures and other computational outputs in your articles.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-fE97uNAJHxQuO2381V1h-v1.gif
:name: 28890db3
```

New status indicators for all cells.

### UI Improvements

- New status badges to indicate loading and changes.
- Accordion starts closed for smaller screens, and the Getting Started and Contact Us are now secondary.

### Bug Fixes

- The notebook would not always capture the output changes, and this would indicate that the notebook did not look like it was saved properly. This is now fixed.
- Open in API menu items should now properly log you into the iooxa API.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/TYU3hDxpnZLKClan0uZG.2"}

## Sept 10, 2020

### Jupyter Extension Updates (0.1.2)

#### Accordion

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-exbxPkRiD0xrtTbmgj0K-v1.gif
:name: e0c87a60
The new and improved panel in the Jupyter Extension. ✨
```

We have focused the UI to let you see one type of action at a time:

- Getting Started
- Notebook
- Selected Cell
- Contact Us!

We hope this helps you better navigate the interface and understand the various parts of how we are helping to version and comment on your notebooks.

### Menus, All of the Menus

We have exposed quite a bit more functionality through menu items in the toolbar, on each cell, and in the panel menu.

We hope this will help with onboarding and figuring out what the extension is good for!! 🤞

### Import Cell

You can now import cells and notebooks from an `oxa` link shared with you, or copied from another notebook. Cells retain their outputs, and notebooks load to the specified versions, with all of the outputs included!

We are really excited to see how people start to use it in the future! We think this is an awesome way to share notebooks and cells.

### Unlink Notebook, but not the Cells!

This is a really interesting use case that allows you to start a _different_ notebook but keep all of the cells linked!

As you change the new notebook, you can send updates back and forth between your linked cells. Great for experimentation! 🧪

### Performance

- We have improved performance of the extension by \~30x, and there are very few perceptible lags in the user interface.
- The notebook now loads all children in a batch from the server, this saves a number of network requests and speeds up initial load for large notebooks (e.g. $10s$ to $<1s$).

### Improvements

- When you are not seeing the latest version in the Version List, the user interface now emphasizes the button.
- You can now unlink all cells even if the notebook is not versioned.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/I4jpdYMd1E7NSOsC5ywK.1"}

## Sept 9, 2020

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-mI7ZXcIStPWUSklK66DS-v1.png
:name: 3fc8efe7

A new list in the sidebar allows you to see and preview previous versions of a block!
```

### Version Lists

You can now see a list of the versions in the app. This allows you to preview the changes to any block over time.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-GOBVQPXboU9mrYHuzx7J-v1.png
:name: ed6d4e8b
```

When you click on the version number, a `Clear Preview` button will show to go back to the original block version. If you are in edit mode, a `Use Version` will show in the panel on the right allowing you to use that specific version.

### Improvements

- You can now open a block as a page and see that specific version, as `oxa` links and page URLs now pass the information of the version number!
- Math, Equations and Images are now able to be selected in view only mode.
- Blocks now load faster and show a loading state.

### Bugs

- `oxa` links with versions now resolve properly in the application; previously our router thought that they were a file extension to a static file 🤷.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/Y19Dd7SQ8iXoWwFZXm90.4"}

## Sept 2, 2020

### Images

You can now put images in!!! **Drag and drop** them into the editor, or **copy-paste** from your file system or clipboard.

```{margin}
**Images:** You can now drag or paste images into your iooxa documents!

These are easy to resize or position in the document by dragging them around or using the toolbar. 🖼️

```

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-RODdOZzw8k1Ie7DD940Z-v1.gif
:name: 18ecb005
```

### Copy Link

```{margin}
**Copy Block:** You can now copy blocks which gives a unique url for that block at the specific version.

```

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-Oaz9wRh5s1wmpf273uDb-v1.gif
:name: c8a3eaf1
```

- The link has the same form as a DOI link!

### Import Blocks

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-hOEVm68viAhZ1JBlQsy9-v1.gif
:name: 8551b89f
```

- You can use that link that you copied to import a block into the article that you are working on.

### Editor Improvements

- There is now a full width editor for equations for editing $\KaTeX$.

### API Improvements

- Content blocks now return a list of children containing any images
- Publishing now publishes content in the document
- You can publish individual blocks

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/LqLrrys9XlRVYAKTI1Mb.2"}

## August 30, 2020

Better `404 Not Found` pages!

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-iQQbSI5CpKLDZSukbvfo-v1.png
:name: 4642c322
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/Q5iUpSXZGF5qo58WdXNF.1"}

## August 15, 2020

### Chrome Extension for Jupyter

- This is the first release of our Chrome extension in alpha.
- When you install it, and fire up a JupyterLab or Notebook, you get an extra panel that allows you to synchronize the content of cells to iooxa.com
  - You can save entire Notebooks or individual Cells.
  - Code cells save the outputs as well, allowing you to reference images in other documents.
- If you change anything in the notebook, you can see the differences from the version that was saved.
  - This is in a diff-merge view, that shows you all changed characters

```{margin}
This is being completed in collaboration with the Executable Books Project!

We hope that there will be lots more collaboration between these open-source projects in the future as well!
```

- To get this working, we also introduced `markdown-it-myst` which is a javascript implementation of the myst markdown ecosystem (used in JupyterBook)
- Each cell also comes with comments! That update in real-time with anyone who has access to that project!
- You can view these notebooks online, and publish them in your project.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/wBKoVzqTwb23xxTpE3IZ.1"}

## @iooxa/editor

- This is a new open source library that we have released that helps us go between markdown and our internal format (which is a json schema).
- This means we have new API endpoints that you can download content in different formats.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/fh1upEqRdXQ7GjoKvTDo.1"}

## New Components

There are a few new components to use:

```{r:var}
:name: "x"
:value: "0"
:format: ".0f"
```

```{r:var}
:name: "emoji"
:value: "''"
:format: ".1f"
```

- {r:button}`label="Buttons!", rClick="{x: 5, emoji: '🚀'}"` {r:display}`rValue="x", rTransform="Array(value).fill(emoji).join('')"`
- Switches: {r:switch}`rValue="x > 1", rChange="{x: (value ? 3: 1 ), emoji: '⭐️' }"`
- Sliders:{r:range}`rValue="x", rChange="{x: value}", max="10"`
- Introduced an “equation” not just inline $m^at_h$. Currently you can’t create or edit it outside of Jupyter though! 🤷

These all have a right-click menu that helps you set some of the properties. Which are terribly poorly documented.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/rxzvBdC7XFBXpbnXeVx3.1"}

## Speed Improvements

- Our API is now caching quite a few things, which makes for speedier response times.
- We are also caching all edits to our real-time editor, which makes the merge much faster for drafts that have been open for a long time.
  - This is also safer in guarding against schema migrations - which we are now starting to do as we add new features!

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/i5Oj6UCRsxubCQnWkIuh.1"}

### Deprecated

```{margin}
We may bring something like this back in the future. 🔮
```

- We have removed the “Quote” block for now, it was confusing as to why it was different - and not what people expected it to be!
