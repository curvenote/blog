---
title: 2021-Q2
description: PDF export, performance improvements and editor upgrades. 🚀
date: 2021-04-13T20:46:45.431Z
authors:
  - name: Steve Purves
    userId: fI5cWFyZPEZCTpIHdqX5H8OU3Iv1
    orcid: 0000-0002-0760-5497
    corresponding: null
    email: null
    roles: null
    affiliations: null
  - name: Rowan Cockett
    userId: vKndfPAZO7WeFxLH1GQcpnXPzfH3
    orcid: 0000-0002-7859-8394
    corresponding: null
    email: null
    roles: null
    affiliations: null
  - name: Yuxi Wang
    userId: WeYvKUTFnSQOET5tyvW9TgLQLwb2
    orcid: null
    corresponding: null
    email: null
    roles: null
    affiliations: null
name: 2021-2
oxa: oxa:9Kv3iYv0uCgaG0zl4WDZ/3ZmzKQH0b2FoEOXeVxV9
---

# 2021-Q2

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/6jdMMQwS1OCXAptoPymu.3"}

## Jun 29, 2021

### 📝 Editor changes

There is now a prompt to use the command menu when you are selecting a blank paragraph. This should make the command menu more discoverable!

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-7b3XwFtCneTq1kPE6oYo-v1.png
:name: a241832b
```

The inline actions when editing text now come up faster, and do not flicker position when you change, for example, alignment of an image or add new lines to a callout. We have also simplified the styles on inline sliders/switches using browser defaults for these.

### ⚡ Lazy Images and References

Images and non-required references (e.g. text citations) are now loaded when they come onto the screen via a scroll event, rather than all at the beginning. This improves the page load time ⏱️ and responsiveness 🏃 for image-heavy pages 🖼️, without any noticeable degradation in experience. 🎉

### 🐛 Bug Fixes

* Fixed a bug between the interaction of the editor actions and creating a new block, which crashed the application.
* The new editor `/` prompt has been removed when in view mode.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/74B8fjHpKWnoh8CLSgWP.2"}

## Jun 25, 2021

Further changes to the $\LaTeX$ pdf export to support the new references brought in yesterday! Specifically for PDF export:

* We’re handling top-level image figures properly (ones that exist as blocks in your article, rather than inside of another block) so that numbering and references work for those too (in exported pdfs)
* Top-level images are set to 100% of text width
* Fixed bugs with citations for bibtex types that are not `article`
* Default $\LaTeX$ output now should compile without any critical errors locally or in Overleaf

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/LA0d1mVbOhu9nFZHSWxT.3"}

# Jun 24, 2021 Internal References

## 🔢 Numbering and Referencing internal content

* Equations and headings can now be numbered and can be referenced throughout your articles. You can use the `[[sec:` and `[[eq:` to search through section headings and equations, respectively. You can see the numbering on the headers about and on the equation and figures. 🚀 🔢

```{math}
:label: a46314cc

\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x)\ e^{-2\pi i x \xi}\,dx
```

You can now reference: {numref}`Section %s <a9729f97>` and {numref}`Section %s <af2ef163>` or {eq}`a46314cc` or traditional citations: {cite:t}`Cockett2018Efficient`.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-wJfz7n327hL6BPok8gPx-v2.gif
:name: ab9fd561

Internal references to sections and figure numbers.
```

You can also reference figures, for example, {numref}`Figure %s <wJfz7n327hL6BPok8gPx>` above! Try clicking it, and you can see what it refers to.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-4PpZUKxmFOR3XCya7UFE-v2.png
:name: ab315e36

Image previews for figures are inline when you start to reference the content.
```

### 📝 Editor changes

* The suggestions now trigger in more situations (after punctuation, emojis, or on an internal break).
* The suggestion panel is better placed when it is above the suggestion area
* Images, code-blocks, equations and headers now have IDs.
* Only show the header actions if the whole header is selected, it will also show up when you start typing the header as well.
  * We also removed a bug that happened when two different headers were selected, where the inline action prompt would show up for the first one - now nothing shows up in this situation. 🧙
  * Another bug was fixed where if you created a new block while a header was selected, the app would error.
* The link search is now only filtered when you type `:`, for example, `[[fig:` which searches figure references.
* The labels that were on headers and figures (🏷️) have been removed for now. This means output $\LaTeX$ will be through an ID system for now (which is a bit less readable).
* The figure caption is now no longer the same width as the image for small images.

### 💌 Quality of Life

* The circular progress on forms is now (again) contained to the line-height.
* Forms do not resize the height of the screen when there is a new form status or on successful completion.
* There was a problem publishing citations - the visibility of those was not included in what was published, meaning users couldn’t see the citation. This has been fixed.
* Clear preview was added in View mode, and the style issues of overlap were fixed!
* We have added a clear preview of a block when viewing the content, previously this was only available in edit mode.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/sPOmpnRQ5DhQu1m97yhY.5"}

## Jun 15, 2021 to Jun 18, 2021

Initial page load is **50% faster** ⚡⚡⚡

We have moved our `api` onto the same domain as the app, which avoids Preflight-Requests. These each took \~80ms, and without them each request is about 30% faster! We are also now pre-rendering information for the application that allows the initial load to speed up, this saves about a second per page-load. There were also some duplicated network requests that have been removed, as well as the bundle size of our packages are all much smaller now.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/ZxS4wSV25CgtBME7qv6v.3"}

## Jun 14, 2021

* Items on the Team | User menu are now anchor tags allowing you to open in a new tab like any other link.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-D2rrcLkk7ZxVo4ZmyBqM-v1.gif
:name: f4da92b6
```

* Fixed an issue where PDF and $\LaTeX$ export will not report their completion, leaving the busy spinner in place permanently.
* Progress spinners on popup dialogs are now properly sized.
* The unique-name checking service on the Curvenote API was working incorrectly for the past two days, causing the following issues:
  * When creating new articles or projects it will have been possible to use an existing name initially but creation would have failed.
  * Saving a new notebook from the Chrome extension would have failed with no visible error. It would look like the `Save Notebook` button just did nothing.
  * This has now been fixed 🎉

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/I9PErClVmH2nxtIcS7rn.3"}

## Jun 11, 2021

* Both the Project Settings and Add Collaborator screens have moved to a new settings dialog that is now accessible from the Project Navigation panel. This is much easier to find and paves the way for some other layout changes that are coming soon.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-qsIa3YaVZyPobXQZk3pc-v1.gif
:name: f51a051b
```

* We’ve also been busy making behind-the-scenes changes that made it into this release and we have added a new API service to provide access to $\LaTeX$ templates.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/cnjQub1cK6DqBKESyauf.3"}

## Jun 9, 2021

* Updated $\LaTeX$ output for content blocks such that ordered list items will `resume`.
* When uploading notebooks via the web app UI, `.ipynb` is no longer appended to the title.
* PDF Exports UI
  * The details option is now visible as soon as there is a failure or something completes, no matter if other artifacts are still processing
  * If there is a failure while building the $\LaTeX$ template for a PDF export both will now be marked as failed rather than the $\LaTeX$ continue to appear as though it is processing
  * Previously, PDF Export failed for users that didn’t have a profile picture set 🤯 — this is now fixed
* The `UNORGANIZED` part of the Navigation tree is now called `UNLISTED`

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/pxfF5d2X27WveauY03mm.1"}

## Jun 7, 2021

### Thumbnails when you share! 🖼️ ❤️

When you share a link on social media, Slack etc. the link will now “unfurl” with information about the article, notebook, project, or your profile. This will only happen when your project is publicly visible.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-UMe4HHYM2WoEsdmzsLQC-v1.png
:name: 4ff167ce
```

### 🐛 Bug Fixes

* The `oxa-link` now will go to the right place for links that are named
* We have fixed a padding issue with the project visibility icon in the main page

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/7WC1CGvOoGendcWhN42P.3"}

## Jun 4, 2021

Released v1.2.3 of the Chrome extension to address an intermittent issue being encountered by some Jupyterlab 3 users. This was in fact related to the `jupyterlab-git` plugin which was uses the same Material UI library as Curvenote and was causing a collision that removed the formatting on our UI elements and caused the Curvenote panel to not display.

This is now fixed 🎉

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-lA66BsL1xJ9ZHh667Oj4-v2.png
:name: 7cbcaf09

An example prior to this fix, of how the UI would present when loaded along with the `jupyterlab-git` extension and when a local git repository is initialized.
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/8Sj4lP8nr3C4Y0DZnaEv.2"}

## Jun 3, 2021

For PDF export, are now rendering any `text` outputs from Jupyter as `verbatim` so that whitespace-based text and things like simple tables will show up properly.

This will always be applied to any pretty text, or stream output but also is currently applied to `text/html` outputs that provide a secondary `text` output, until we are handling all `text/html` types and doing something special for tables. \
\
This means that pandas tables will now render as simple tables like so, instead of a lump of unformatted text:

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-Cg5JkX1oXB3Cks9CQ9A3-v1.png
:name: 9055c8b9
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/FHSr5QUEIShMQ3VXlCIQ.1"}

## Jun 2, 2021

Based on user-feedback we have gone with a full-length sidebar, this give you more space to work with your content and is closer to the action that closes the navigation.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-nPYP4SWeHQe47HaCDKtN-v2.png
:name: f8a5806c

Full length side navigation with more space to organize your articles.
```

We have added html `<meta>` tags to the site, these are currently ***very*** basic, but should improve over the coming week! When you share in Slack, Twitter, Facebook, etc. you will now have links with a bit more meta data! 🏷️

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-ZYxBREYmfuw0eBkRRZxz-v1.png
:name: 50710bce
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/jweIFXUlkL0GNDq6HDIr.3"}

## Jun 1, 2021

#### 🔗 See all the Links

You can now add links to internal projects very easily with a `[[` command that was previously only for citations. This will allow you to insert links directly to another article or notebook in your project. Additionally, pasting a `oxa:link` into your editor will be recognized and transformed into a specific link that opens in the same tab.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-P7JfzVUJ44ieW4R3BnVq-v1.gif
:name: dab1a4d3
```

We have added a few other commands like `/cite` and `/article` which get you filtered views on all of your content, for example `[[nb: search` will let you search through your notebooks!!

### 🎨 Editor Improvements

* Citations now have content by default, getting rid of the loading flicker and showing content even when you don’t have access to the underlying block.
* Image block menu is on the outside of the image block!
* Selecting a link to open in a new page now no longer *also* selects the parent node in the editor (which had a blue outline).

#### 🐛 Bug fixes

* Fixed an issue with the Project Visibility button position incorrectly in some cases.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/cZcMGUtxzCwWlzBC68If.1"}

## May 31, 2021

### 🐛 Bug fixes

Fixed a bug on the navigation for mobile screens to ensure you can toggle the “hamburger” menu for the navigation on and off. 🚀

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/jngG2GoTDTCubvfSg7vO.2"}

## May 28, 2021

### Layout Improvements 🚀

The layout of the app has been improved to be able to hide the navigation bar at all locations, it will now be easier to use Curvenote on smaller screens!

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-qTZPCOJMOP2vT6Fp1Wbp-v1.gif
:name: 9082b28a
```

### Jupyter Extension

We’ve made changes to how notebooks are saved via the chrome extension:

* New notebooks will now have a URL (block name) based on the filename rather than the random hash/id used previously
* Saving new versions of a notebook will no longer cause the title in Curvenote to be overwritten by the filename
* The notebook title, as shown in Curvenote is now visible on the UI and clicking on it will take you to the appropriate version of that notebook.
* You will also see a warning icon on the title if it doesn’t match your current title! 🧙

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-9VQadhNN9sLKvPyXqGaZ-v1.png
:name: e6b881c4
```

#### ⬆️ Other app improvements

* Project descriptions are now limited to 160 characters
* Removed an increasingly a rare `iooxa` from creeping into our tootltip for articles!
* The menu now no longer shows on the project landing page, where it didn’t do anything before! 🤷

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/h7dvhcPcjfO9yMmDf6ee.2"}

### May 26, 2021

We’ve added controls to the app and extension to make it easier to get to the latest version of a block. In the app, a \[Use Latest Version\] button is now available in the right-hand side info panel, as this is an action that makes a change to the article it’s only visible when editing.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-6R0iVvWS60AA8Txcog8X-v1.gif
:name: fa7e256d
```

You’ll notice some changes to the version status badges too, these now change when a block is not on the latest version in the same way as in our chrome extension, making it easier to spot where updates are.

If you select the header block of an article, you’ll also notice a disabled button. We’re not quite ready to give you the \[Use Latest Version\] of the whole article yet, because of implications of ongoing drafts that you might have open. We’re planning on introducing with but with more UI to help you figure out how best to update.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-VoXlw54YMKQz3XbE7fae-v1.png
:name: 24df6958
```

In the chrome extension (v1.2.1), we’ve also added a \[Use Latest Version\] button, but here it applies to the whole notebooks and not individual cells. Again this is something we could add at the cell level, but based on feedback so far it’s the Notebook level where this feature is really needed.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-AYUXYzryQp8NuhEjISBK-v1.png
:name: 2f4b9399
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/8NkT0xleTaZriCcOadSd.2"}

## May 25, 2021

* Detailed logs are now available for download for both the $\LaTeX$ and PDF export processes. This is useful to spot and understand rendering errors so that we can fix them! When people are having trouble with an export we may ask you to send us these.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-3ARt996hAgud9I0TRmHb-v1.png
:name: 836e7318
```

* Downloading a PDF or latex file will now trigger a direct download within opening a popup or separate tab. This gets around some of the popup blocking issues users might run into in different browsers.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/rBmDJkk7iB84fk6L5IbB.1"}

## May 21, 2021

### Further PDF Export Improvements:

The default template is closer to Curvenote’s online article look 🎉, including improvements in callouts, font, asides.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-azM3tR26n0NqnaBeFfQn-v1.png
:name: dc9b9bcd
```

### AMS Math

We have improved the interoperability between Jupyter Notebooks and Curvenote.

```null
\\begin{equation\*}
```

### Minor Changes to the Info Panel

We have moved the `Version` tab to be more prominent than the `Comments` in the info panel on the right. Comments are now all seen next to the article or notebook, and the `Comments` tab is only used for seeing archived comments.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-yofgS3yOfUleouU6bHuI-v1.png
:name: 42e5223f
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/3Xx16xZyE8U6J2206rrl.3"}

# May 18, 2021

Improvements and fixes to the PDF export:

* Article downloads marked as `beta` until we get to feature complete and have tested over a wider range of content and templates.
* Now supported:
  * Now supporting images that are inserted as blocks (top level) in article.
  * Code blocks from Jupyter notebooks now render with formatting.
  * Animated GIFs - the first frame will be rendered in the PDF as a static image.
* The default `Curvenote Paper` template:
  * includes links back to the article, anchored to the Curvenote logo in the default.
  * better rendering on Callouts

  ```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-7JRmpcUOwTdet69k3P3x-v1.png
  :name: 4cfe6aaa

  ```
  * (jupyter) code block rendering with syntax highlighting

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-93P2IFwCs4qi5nrOyYBq-v1.png
:name: c7d419e8
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/Bn7Tf2xKRbt32PnzOZZG.2"}

# May 16, 2021

The headers have got an overhaul, you can now edit the header level (`1`-`6`) directly from a menu when you select part of the header.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-XhQPtZzrixP0acTLu4N2-v2.gif
:name: ceccff6a

You can now adjust header type by selecting part of the header.
```

Headers are also now able to be labeled and can be numbered, although no visual changes at the moment.\
🔜 This will allow for referencing and numbering in the near future. 🚀

### 🎨 Editor Improvements

* You are now able to edit link URLs inline
* Math elements are easier to edit and click away from (before there was a delay)
* The header elements are now all different sizes - previously there was no difference between `H1` and `H2` 🤷♀
* Citations when added are no longer highlighted to start with, only when you click them! 🙂
* Improved spacing on the math blocks
* There is now a cursor on the inline math element when it does not have content 🐭

### ⚡ Performance improvements

* Continued improvements to when numbering is calculated while editing
* There is now only a single instance of the inline-action popups. They were occasionally getting lost on changes in actions, and this should no longer happen!

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/SyoqsJaEjGODUeGKN0pm.4"}

## May 14, 2021

* Added a default Curvenote $\LaTeX$ & PDF template, with narrower margins. 🎨

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-j6kpYDe2IAyBbBKi9IIN-v2.png
:name: 6325ce5c

Improved default $\LaTeX$ template for Curvenote articles.
```

* Anonymous visitors to public or published articles can download a PDF version, only if it has already been generated by a Project Owner or Collaborator.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-Uv796IQirBUs2RiabFfe-v1.gif
:name: de6d7820
```

* Modified the PDF generation service to be more tolerant of errors reported by `mklatex` now if the service manages to create a PDF file, it will return successfully even if `mklatex` reported a fatal error. This means we should be able to see so and fix issues in the PDF produced.
* Please keep [letting us know](mailto:support@curvenote.com) about any failures 🐛 or quirks ⁉️ in your rendered PDFs 📄 and we’ll fix it! 🚀

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/06AhudkLvdf3hTRGxsZ9.1"}

## May 13, 2021

### 📄PDF and $\LaTeX$ Export

> We have released the first version of our PDF and $\LaTeX$ export 🎉.

Once you save a version of your article, you can export it to a PDF! Right now there is minimal templating. Our base template will improve in next weeks! 🚀

Components that are currently **unsupported**:

* Images that are directly in the article (rather than inline images)
* Animated images (`*.gif`)
* Unknown output types from Jupyter Notebooks
* Code cells from Jupyter

### 🔔 Notifications

As part of this release we have added in-app notifications which at this stage tell you if your export has completed. We will expand this to things like, comments, new versions of articles, and in-page mentions over time.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-HlsBtX8YgS4aUjfnLOvd-v2.png
:name: 571a17ca

In-app notifications! 🔔 🎉
```

### 🐛 Bug Fixes

* $\LaTeX$ escape characters went into math equations, this has now been fixed 🚀
* The editor menu was acting strange after some of the performance updates, this has been sorted out too 💥

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/P3SJaXlUy4oH7am7wreS.3"}

## May 12, 2021

### 🎨 Editor Improvements

* Dates and citations can now be selected as normal (rather than looking like they were not selected)
* Dates now do not have a border when *not* in edit mode
* You can paste a link to an image block directly in the editor and it will transform it into an image! 🧙
* `Ctrl-Shift-V` now does not handle link parsing and other pieces (similar to other applications!)
* Improved the image editing experience, including the placement of the edit button to not interfere with caption layout.
* You can now download the caption as any supported format type (e.g. $\LaTeX$ or `markdown`)
* The dot-menu on the image is available in view-only mode when you hover over the image.

### ⚡ Performance Improvements

* Improved rendering of comments in the side notes, image wrappers and block actions and editor menu.
* This has improved the performance all around the app. Always more to do …! 🏃
* We have delayed and cached the calculation of figure numbering, which is not good to do in real time! The figure numbers now are recomputed about 2 seconds after you have completed editing something. 🧑🔬

### 🐛 Bug fixes

* Images are now allowed now in the import block menu
* The import block menu now auto focuses when it is opened
* You can no longer paste a block into an article (using `Ctrl-V`) when a modal dialog is open

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/xgz5adTxBld3V3OUAx4h.3"}

## May 10, 2021

### Figure Captions & Numbering

You can now add figure captions and numbers to your images! Each image is actually a unique block that has it’s own versions, you can now see and replace those versions in the side menu when you have the image selected. The preview will show in the space of the image.

* Added figure numbering for stand-alone image blocks
* You can change the ID that will be used to reference the figure. This is not useful outside of $\LaTeX$ quite yet.

If you paste or drag a new image on top of an existing image, that will now update the version rather than create a new block. This means you can keep your images up to date and versioned as you change a figure!

* Added `file_name`, which will be used in the future to help with local image locations/names.

### Date 📅

You can now include date elements in your writing! We created this feature on May 5, 2021. The shortcut for this is `//` or `/date` as usual using the command menu. By default it creates a date from today’s date. To edit the date element, simply select it.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-A2r5aO87COu74X36vGqW-v2.gif
:name: 4f3177f9

Use `//` to select add a date to your text!
```

### Editor Improvements

* Hanging spaces are now rendered correctly

### 🐛 Bug Fixes

````{margin}
```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-ycB0WVXZ6jh2fSaaiLoG-v2.png
:name: 01e87edc

The bio and team description now shows you the character count!
```

````

* The bio and team descriptions now show a character count
* The bio and team descriptions will now properly wrap in the blue sidebar
* Title and description now save properly from block settings
* The `launch-binder` button on notebooks now does not disappear when saving the notebook from the Jupyter extension

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/vI6ff5wZsr4mjQDaEE2x.1"}

## May 1

### Image Improvements

Images can now be addressed uniquely as a page, block-link or through the API. This is the start of being able to version images similar to other blocks as well as add commenting directly on the images. You can comment on images already if they are included directly in the article (i.e. not in a content block). You can use the menu on the image to copy the link to the image directly. You can now add these to articles directly, this is also a step towards figure captions and numbering.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-5ook59DKyyHdHvqicqi5-v1.gif
:name: 997dcc92
```

Images if they are from external URLs are now shown as `Image Not Found` as a security precaution. We will improve in the future to upload these to Curvenote and keep a link back to the original.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-y7Ql9Gol6I97cN1HwZ2N-v1.png
:name: c53a7692
```

### Placement of Suggestion Panel

* The suggestion panel has been improved to be on screen at all times
* The keyboard shortcuts are now valid for PC and Mac, and show on hover with expanded descriptions
* The styling of the panel has also been improved! 💄

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-FwLFTwAjGLkBY2WRnTSK-v1.png
:name: a0d0f9be
```

### Editor Improvements

* Callouts now have a command pallet, including the ability to “eject” the content of the callout into the main document

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-dOqHxHSFzc1T4gT2aw1X-v1.png
:name: 1b07ab12
```

* Images now show a loading placeholder
* Math can select all (`Cmd/Ctrl-A`) inside of the math editor
* Clicking on math when it is in view mode will now edit the math
* Citations now show a loading when they are loading, rather than “not found”
* The citation panel now will stay on screen, previously it could bleed off the edges. ↔️
* The image editor panel now hovers over content, rather than pushing content down. It can also be placed above the image
* The article date editor now allows you to pick the year much easier, scrolling back in time by clicking each month was quite tedious. 🙂

  ```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-dcEQvat6Xk1IOi5iCvHd-v1.png
  :name: bf799267

  ```

### Improved Smart Inputs

````{margin}
```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-mibdxM5AfYQHhVwdHDvm-v1.gif
:name: a229a420
```

````

* Math conversion now does not trigger on currency-like inputs
* Horizontal rule’s can be input with `~~~` without triggering a strikethrough
* There were times when the smart-inputs could match text inside of a math-block, this was unexpected and has been fixed

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/45rQEQktNP3qC6ltQPzx.3"}

## April 30

As part of the (so far behind the scenes) work to enable LaTeX downloads and LaTeX driven (with beautiful typesetting) PDF export, we changed a few things in our schema including for superscript and subscript, escaping characters like `_` and `\` in $\LaTeX$.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/hmrOhJQk1PA0PuhBzVPm.1"}

## April 27

````{important}
You can now add equation blocks to callouts! 🎉 Previously you could only have inline $\LaTeX$.

$$V^2_{rms}(t_j)=\frac{1}{t_j}\int^{t_{max}}_0 v^2_{int}(t)H(t-t_j)dt$$

````

* Previously, if switching between articles while in edit more, and if those article has not been saves at least once, it was possible for new content to disappear from the view, requiring page refresh to fix. This was a side effect of recent performance changes but is now fixed!
* We’ve made small changes to the document loading animation (simpler)
* When creating citations, if the call to the DOI metadata service fails we no longer create an empty (broken) reference. Instead an error will be shown.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/9WDTjSCvMoVcVbcdWM21.2"}

## April 20

**Performance Improvements & Better loading flow**

We’ve made further performance improvements, mainly aimed at a better loading experience for larger articles and notebooks. After this release, when you load **an article or notebooks with more than 25 blocks, the app will start loading progressively.**

This will show you content earlier while later blocks are still loading and for very large notebooks (e.g. >100 cells) will keep the app responsive while things load. The progressive loader could be smarter than this first release and **we’d love feedback** on what the new loading experience is like on your projects.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-4EJqumVk5TVCcZchpis8-v1.gif
:name: 5ae692d0
```

Other Changes:

* Yesterday’s change to add a toggle allowing you to show/hide the resolved comments in the Info Panel toggled between showing resolved comments or non resolved comments

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/x53igNMyJ6TBTUsYisvC.2"}

## April 19

**Improved Equation Editing**

We have moved away from the tooltip into being able to **edit an equation directly**. When you click on an equation or arrow into it, the editor shows up directly inline, you can also now have multi-line block equations!

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-axawwOzer5NjBNfAKYTd-v1.gif
:name: e0772659
```

#### Improvements

* Improved rendering of math (updates to $\KaTeX$).
* You can drag the equation around by the “dollar signs” when editing, or when the equation is rendered in blue.
* When you hit `$$` it opens into the editor (and no longer into the text above)
* Stand alone equation blocks are now visibly distinct (two dollar signs)
* For a **new line** in the equation block editor use `Shift-Enter`. Pressing `Enter` alone will exit you from editing gets you out of the equation.

### Performance Improvements ⚡

* Further performance improvements, especially when rendering large notebooks and articles in public projects.
* A toggle to show/hide resolved comments in Comments list in both the web app and chrome extension

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/BEil7lGtOkmNE6l8bZsM.1"}

### April 16

First set of performance improvements to the web application. Rendering optimisations and faster cleanup when leaving a page and browsing to another.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/diYYHAtZMSVyfEOVXtL2.3"}

### April 15

Chrome Extension v1.1.8

An additional fixes to the output cell change status! yesterday’s change introduced a problem on a different edge case. Everything should now be fixed!

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/pYEwwhwVBQ3Phj1plHZr.1"}

### April 14

Chrome Extension v1.1.7

A bug fix to the output cell change detection feature. Previously, if you had initially saved a notebook with outputs cleared. Once cells were run and outputs generated, these were not being detected as modified, and so you could not save an updated version. This has now been fixed.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/Dvpv9Y6Y2EfFR67efOYR.2"}

### April 13

Various bug fixes issues relating to how the articles and notebooks keep track of their blocks. These issues affected load load and save times, problems with larger and longer lived articles and some rare cases where adding or removing blocks ended up being added in or removed from the wrong place. These should now be addressed 😄.

We’ve also added compression to our API payloads to improve loading performance.

