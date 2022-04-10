---
title: 2020-Q4
description: Jupyter extension, interactive outputs, thumbnails, nicer profiles!
date: 2020-10-03T19:59:18.501Z
name: 2020-4
oxa: oxa:9Kv3iYv0uCgaG0zl4WDZ/gNZUCQqlapwbdzf2gel2
---

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/IoKAsCBetHoD9Lo9bz04.1"}

## Dec 16, 2020

### 📓 Edit Notebooks in your browser!

- You can now edit **notebooks** in the browser - you won’t be able to execute the cells, but if you want to quickly collaborate around text those can get sent back and forth as versions.
  - Code cells are still not collaborative. 🙁

### 🐛 Bug Fixes

- Style improvements on asides, links and the sidebars (which now don’t overlap visually)
- Improvements of styles on the navigation (e.g. published notification)
- `Import a Block` now respects the side (top or bottom) of the block that you want to import it on!
- Navigation will properly show up in published mode (even if it isn’t the most recent version/draft)

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/SQ7FDIhFhSWPNQJVHVdg.1"}

## Dec 14, 2020

### 🤩 Navigation Style Improvements

Seriously improved style update for the navigation, including a docked version in mobile!! 🚀

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-qVW0TSPF4O4ZQUjnzjks-v1.png
:name: bdf763ee
```

### 📬 Emails

We are now sending emails when you sign up. Baby steps towards notifications. 🙂

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/pXyRSHRanCUbKcxdO4x4.3"}

## Dec 09, 2020

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-5AcbgYqKkls35HnhpoNv-v1.png
:name: f990fa51

There is now a help button in the top right!
```

Onboarding improvements!!

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-e3jrWfyg2oMsELagL6nI-v1.png
:name: 96010680
```

### Onboarding and Help

We are starting to add to our onboarding and help documentation. The biggest change is a product tour that is now visible on your profile and welcomes you when you sign up!

### Navigation improvements

- You are now persistently in edit mode when switching between articles in a project.
- Navigation now updates the title of the page as you are editing.
- Can open navigation items in new tab using middle click or Ctrl/CMD click.

### Bug Fixes

- Intermittent crashing of the drag-n-drop contents area is fixed (due to multiple providers on the page)
- The current nav could show unrelated information when navigating between projects.
- Better not found handling on some edge cases.
- Can now close the `New Article` pop up from inside of the app.
- Right clicking on a dynamic element (e.g. {r:dynamic}`rValue="x", rChange="{x: value}"`) in edit mode now shows the edit menu.
- Scrolling to all your unorganized articles is now possible!

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/EkQGUv97H41C5E9IeRGc.1"}

## Dec 04, 2020

### Navigation 🤘

```{important}
You can finally organize your articles in a project! There is a new sidebar that you can drag-and-drop your project documents into!
```

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-irSjaHEws46XGeGG31oB-v1.png
:name: 3e2624c8
```

#### Features

- Drag your articles and nest up to three levels deep
- See at a glance what is published in your project 🟢
- Easily and quickly jump between articles/documents
- Leave your unorganized notes in that section if they don’t quite fit yet!

#### Note

- A version of your navigation block is saved when you save an article, and is also published when you publish an article.
- The articles that are not publicly visible will still not be seen externally.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/ckkW7BUHxym9zYrTAGor.3"}

### Editor Improvements⚡ 👟

The editor is _much_ **_faster_** now to type in, these are general performance improvements in the entire app. We spent a lot of time in the last week to ensure that we can render at 60 FPS. 💥

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-23GL0WqygAlSdFH8zffH-v1.png
:name: a009a06e
New link hovers!!
```

#### Added ➕

- [**Links**](https://iooxa.com/oxa:9Kv3iYv0uCgaG0zl4WDZ/ckkW7BUHxym9zYrTAGor.2) now have a hover in edit mode to change the link
  - This also allows you to remove the whole link when you click the remove button.
- New `/` command for **code** blocks
- You can now command in a header to Paragraph mode. The shortcut `Ctrl/Cmd-Alt-0` still works as well! (and 1-6 for headers!).
- Commands and short cuts for **full-width equations**. So make use of the space!! 👩🔬 🚀

$$
\begin{aligned}\overbrace{ \left[ \frac{1}{\Delta t} \frac{\partial \boldsymbol{\theta}^{n+1}}{\partial\boldsymbol{\psi}^{n+1}} +\mathbf{D} \text{ diag}\left( \mathbf{D}^{\top} \boldsymbol{\psi}^{n+1} \right) \frac{\partial \mathbf{k}_{Av}}{\partial\boldsymbol{\psi}^{n+1}} +\mathbf{D} \text{ diag}\left( \mathbf{k}_{Av}(\boldsymbol{\psi}^{n+1},\mathbf{m}) \right) \mathbf{D}^{\top} + \mathbf{D}_{z} \frac{\partial \mathbf{k}_{Av}}{\partial\boldsymbol{\psi}^{n+1}} \right]}^{\mathbf{A}_0(\boldsymbol{\psi}^{n+1})}\frac{\partial \boldsymbol{\psi}^{n+1}}{\partial\mathbf{m}}\\+\underbrace{ \left[ -\frac{1}{\Delta t} \frac{\partial \boldsymbol{\theta}^n}{\partial\boldsymbol{\psi}^n} \right]}_{\mathbf{A}_{-1}(\boldsymbol{\psi}^n)}\frac{\partial \boldsymbol{\psi}^n}{\partial\mathbf{m}}=\underbrace{\left[ \mathbf{D} \text{ diag}\left( \mathbf{D}^{\top} \boldsymbol{\psi}^{n+1} \right) \frac{\partial \mathbf{k}_{Av}}{\partial\mathbf{m}} +\mathbf{D}^{\top}_{z} \frac{\partial \mathbf{k}_{Av}}{\partial\mathbf{m}}\right]}_{\mathbf{B}(\psi^{n+1})}&\end{aligned}
$$

- To create an equation, make a new paragraph, and type `$$`, if you do this inline you will create inline $m^\alpha\tau_h$.
- A dropdown menu to the editor toolbar with extra commands.
  - For inline math, you can now select your text and use this command to wrap it in math!

#### Improved ✅

- Full width editor — More space for all your ideas!! 🙂
- The `asides` now show you where they are in edit mode, and will never be underneath the next block, making them impossible to click on. 🐛
  - We have changed the look of `asides` to be floating to the left of the text, rather than margin notes. We will bring that back soon!
  - Asides also will not overlap with callouts now.
- Suggestion menu no longer tries to fight with your scroll bar
- Your page will scroll to where you are typing (before we were locking the scroll 🐛)
- Selections have been improved after you insert a new node or through a `/` command.
- Right clicking on a widget (e.g. a slider {r:range}`rValue="x", rChange="{x: value}"`) in edit mode now will **_always_** open the menu!
- Inline number displays have improved styles {r:display}`rValue="x"` so you can tell they are displays!
- Dynamic text (e.g. {r:dynamic}`rValue="x", rChange="{x: value}"`) has styling so that you know you can drag it around!
- The shortcut for list items will now remove the list if there is one.
- Images now “pulse” ever so gently when they are uploading. 🧑🚀 🎉

```{r:var}
:name: "x"
:value: "50"
:format: ".0f"
```

#### Removed 🗑️

- Removed the clicking on headers creates a `#link` - this will come back, when it is improved.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/922Cw8HzkkFSNcY9KyQV.3"}

## Nov 24, 2020

### Improved Menus

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-WFtgS4EUOJV43LaqqyA6-v1.png
:name: 768983dc
```

- Menu items in most places now have icons, which helps in scanning and quickly finding the action you need!
- Menu items on cards in both the profile and project page have been added to cards. These can accelerate you to the right place in the app.
- The in editor menu respond to the role of the user in some cases! This is helpful when you are importing a block across projects where you can view, but not edit.
- You can now import a block from the block menu on the left \*or\* the right side. 🙂

### Quality of Life Improvements

- Links in the editor are now created when the editor recognizes a URL as you are typing!
- Links now open in new page in view mode.
- Projects in your profile now have indicators if they are public or private.
- A menu item to add project collaborators is available from the editor settings menu.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-S4mVhD3sx1AffYZmMJ9W-v1.png
:name: f1b01ebb
```

#### 🐛 Bug Fixes

- Choosing `Edit` in the menu of a block, now _actually_ edits that block rather than the one selected.
- You can now remove a block name if you want to refer to it only by it’s ID

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/r2uC8cTFI0dxjv3LVemo.3"}

## Nov 15, 2020

### ⚙️ 🖼️ Block Settings & Thumbnail

Blocks can now have thumbnails! 🎉 You can access this through the new Settings ⚙️ icon when you are editing your article or individual block.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-BOP9ourjRQk1vl7EYYOW-v1.png
:name: 04acb432
```

This means that your project pages can start to look a lot nicer!! 🖼️ 🚀

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-Ncr3CmTUiddBcjXYHAyF-v1.png
:name: 53d168af
This is the release notes page, now with images!! 🧑 🎨
```

### Quality of Life Improvements

- All pages now have titles! This helps in some browsers as you can navigate to the page based on the title of the page -- plus it you have multiple pages of iooxa up, you can now tell them apart!
- Some new editor shortcuts: ↔, ⇔, →, ⇒, ←, ⇐, —
  - Use the appropriate combinations of `-=<>` as in: `--> `becomes `→`
  - Note that you have to put a space in after before it recognizes the shortcut!
- Images that are private now have an expiry of 12 hours ⏲️, meaning it is unlikely that the URL will expire on you while you are working (which showed a broken link 😥).
- All forms now have better validation, and give you feedback when they fail or succeed! ✅
- The article pages now have links to your account information, which now also includes your email address on hover.

### Bug Fixes

- Open in API now works on first drafts, and actually goes to the draft.
- Publishing a block with a new name will now update the URL.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/CmHZrfim5buLFHk5U1tc.1"}

## Nov 5, 2020

### More Interactive Outputs

Since integrating plotly we’ve take a small step back to look at the range and types of visualization renderers out there for Jupyter.

From that, we’ve updated our Plotly rendering to directly use the Jupyterlab interfaces provided by the Plotly extension, instead of side-loading the plugin ourselves. 👨 💻

This means that we’re able to rely more on the official Plotly extension distribution and that we can now use the same mechanism for other standard Jupyter outputs. 👏

So now, if you have _text streams_ or _errors_, and _images_, _math_, _html_ and _javascript_ embedded from IPython display commands, this will all be displayed by invoking JupyterLab renderers themselves 🤓. Some of the visible impacts of this are:

- Jupyter native tree browser for JSON data

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-mGx17GichccGfcEJbULa-v1.gif
:name: 54878204
```

- Secure execution of user javascript

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-E34TrVudyjSMRllW3btK-v1.gif
:name: fad572ff
```

### Bokeh

We have also added first class support for **Bokeh** plots too which we expect to work just as well as Plotly in iooxa notebook and articles.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-gKkijNPRh1KHoo4Xo687-v1.gif
:name: 865c392a
```

### Extension: Comments on output blocks

Outputs are now more of a first class object in the chrome extension 📊 meaning that you can see their status and comments independently from the code block that created them.

This enables much more effective collaboration 👏 around figures and outputs via iooxa.com.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-XPBd8mU8MA1gA7WPWBB2-v1.gif
:name: 208efe1d
```

### Quality of Life Improvements

We’ve also made some small UI changes to the iooxa.com:

- Version and comment status badges are now visible outside of edit mode.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-hKSyyZSMTyOJ8ikVUMnL-v1.png
:name: e0e1d089
```

- Breadcrumbs now have a tag for published versions. letting you see what the latest published version of your article is.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-uN1OzFPv5nM4mXRgIrBY-v1.gif
:name: 7bf84bb1
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/0RAcPawOFpfsIZ2FK4Xu.1"}

## Oct 16, 2020

### Interactive Plots with [Plotly](https://plotly.com/)

We have been making changes to the way we handle and render Jupyter outputs, setting the stage for supporting the huge variety of figures and visualizations that Jupyter can support.

- The first interactive output is [Plotly](https://plotly.com/) where we can render their full range of plots! 📊 📈
- We have put together some example notebooks with various Plotly plots to show whats possible:
  - plotly basics
  - plotly express
  - plotly financial
  - plotly maps
  - plotly webgl

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-oEzvB2xxmpGq6iOPRLLt-v1.gif
:name: c545252c
```

See some examples here: <https://iooxa.com/@rowanc1/example-notebooks>

### JupyterCon 2020

We attended JupyterCon and presented our new Jupyter Integration!

See the video here: <https://iooxa.com/for/jupyter/>

### Chrome Extension - 0.1.6

Improved the startup experience for the iooxa extension to it doesn’t crash between different JupyterLab builds.

There is now a details panel for showing the content-types for various outputs side-by-side.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/V6rbS468JHPIdBb41e06.1"}

## Oct 8, 2020

## Improved Project Overview

- We have done our first (of many!) updates to the project page to improve the user experience.
  - New layout for list view.
  - Added the ability to add thumbnails to your project.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-hL8OsROjE5aOSbcZ2ywk-v1.png
:name: fa443925
```

### Thumbnails

Our thumbnail creator allows you to quickly scale and position what will be shown on the rest of the site.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-k5sAAdv1DVOcG5d74VpS-v1.gif
:name: 8e0ac0f6
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/3JsAc6uQpmeDNdp2MBLa.1"}

## Oct 6, 2020

### Jupyter Extension 0.1.5

- Allow project refresh without reloading the Jupyter extension, this allows you to create your first project without reloading the page on Jupyter!

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-IzOmeHPGVBSupeXu0BRv-v1.gif
:name: 9f009109
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/PWqwJcRJveR8NgisTKia.1"}

## Oct 3, 2020

### Improved Profiles

- The profile got a major overhaul, with a better are to show yourself off.
- Added GitHub and Twitter links
- Ability to add a profile banner!

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-0wMq2SEt534AMuF9aU2P-v1.png
:name: 86b2a7af
```

### Shared with Me

- You now have a tab on your main page that allows you to see all projects that are shared with you.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/LsHDGILCfyiKyFPfHSRQ.2"}

## Oct 1, 2020

### Outputs Rendering

- We are now rendering more outputs from Jupyter in the iooxa preview
  - Including outputs for Pandas, LaTeX, Simple HTML (tables, SVG, IFrame)

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-QOOVtEbrcj9B7tetSmGh-v1.png
:name: c1cfb036
```

### Jupyter Extension - v0.1.4

- Better handling and rendering of Traceback errors
- Bug fix for intermittent brokenness on the `Save Cell Version` 🐛
- Bug fix for broken cell status and diff when switching between versions of cell with a traceback
