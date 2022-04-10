---
title: 2021-Q4
description: ""
date: 2021-10-07T18:02:24.421Z
authors:
  - name: Rowan Cockett
    userId: vKndfPAZO7WeFxLH1GQcpnXPzfH3
    orcid: 0000-0002-7859-8394
    corresponding: null
    email: null
    roles: null
    affiliations: null
name: 2021-4
oxa: oxa:9Kv3iYv0uCgaG0zl4WDZ/dPPeRbnMco3YbcraaZY8
---

# 2021-Q4

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/D8HuodLleNmGaot9Rb2o.2"}

## Dec 22, 2021 🐛 Jupyter Output Captions

Captions on Jupyter Outputs now render correctly in exported PDFs or LaTeX files, fixing [this issue.](https://github.com/curvenote/support/issues/23)

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/9PXvqDyDaE97NkfNncjv.2"}

## Dec 22, 2021 - Chrome Extension Update (v1.5.0)

We have released a update with a umber of fixes and improvements to align with the Curvenote webapp

* @mentions - mention people in comments and they will be notified in Curvenote and by email. Mentions in existing comments now also show up properly.
* After commenting, all new comments should immediately show up, previously where was an intermittent bug where comments would not show until a refresh.
* Math now correctly renders in comments $y=f(x)$!
* Previously, when scrolling through cells of a Jupyter notebook using arrow keys, it was possible for the Output section of the panel to open and steal focus. This has been fixed.
* The `title` link in the panel now always points to the latest version of your notebook, while a new `version` link is pinned to the specific version you are working with

  ```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-Q81Nx1AVIyeUWuQJVERw-v1.png
  :name: pWdHNbnpSG

  ```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/HoSTAP68YjG9rSxMoFDV.2"}

## Dec 22, 2021 - Improved section numbering

We have improved the section numbering to work across different blocks. Previously the a section with a number `1.2`, for example, would not show up it if was in the next block. All fixed up now!

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/9ZXDTWLJYN8oMRVuY48z.2"}

## Dec 21, 2021 - Mention collaborators in comments with notifications

You can now mention collaborators in comments and they will receive a notification. This notification comes instantly as an “in-app” notification in Curvenote, and if you don’t see this within a few minutes, a notification will also be sent by email. Clicking on the link in a notification or a comment will scroll you to the right place in a document and highlight the comment.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-0sEX9o5yxMaAjEDe2UrV-v1.gif
:name: gYaTkKsLmW
```

### 🐛 Bug Fixes & Quality of Life

* Improvements to the comment placement when content loads as well as when Jupyter outputs are rendered (changing the height) ↕️
* Clicking on a notification no longer require a reload of the page. ⚡
* Header sizes have been visually improved to make them stand out a bit more. 🔍

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/nGQqoS87v2KscIj5eo48.2"}

## Dec 14, 2021 - Figures from Jupyter Outputs

Jupyter Outputs blocks can now be added to an article as a fully fledged Figure with the same caption, numbering and referencing controls available on normal images added to content blocks in an article.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-oyE9iWtC70VzZolsjjxy-v1.gif
:name: ouRipo0qZL
```

Once a Jupyter output is added to an article and selected, a menu will appear and you can start typing a caption immediately. The caption stays attached to the output as long as it remains in the article, and when the output itself can is updated from Jupyter, the caption text, settings and references will be preserved both in the Curvenote app and when exporting to LaTeX.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/uRFrLzQQOVdBkc8cXoTz.3"}

## Dec 1, 2021 - Local Backup 🤖

We’ve added a local backup feature that will keep a copy of the draft of each block in the browser's local storage until a user saves that draft as a version. This backup is cleared once a successful save is confirmed by the server responding with an exact copy of the content saved.

Users can see local backups and use them to download or restore content as shown below. In normal operation, this will be empty except for a backup of the current draft.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-PCBmyZMoHXsAuAlF2zrz-v1.png
:name: kHQVcaf9QB

Local backups are in the tray on the right hand side.
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/dLCbx0MycgftfxQarT7r.1"}

## Nov 30, 2021 - Rich text comments

You can now add rich-text comment to any block. 🎉 This includes being able to add references, citations, and links as well as standard formatting like `code`, bold, italics, etc. You can even have inline math and equations!

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-LA057lb9ejOYa9X9WnSR-v1.gif
:name: YkEfIewoPt
```

### Quality of Life improvements 🚀

* There were a number of small improvements around syncing comments in the editor, around speed and performance. ⚡
* There was a bug that resolved comments wouldn’t always resolve on other clients, that has been fixed! 🐛

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/GVGuZ5dvBYURPXRfLBzW.1"}

## Nov 25, 2021 - Synchronization Warnings 🐛

We have added improved warnings to inform users when the Curvenote client fails to sync to the server. The syncing issue is something that we are actively working on ([tracking this here](https://github.com/curvenote/support/issues/14)) and this notification is a step to ensure that users know when something has gone wrong, whilst we make further fixes.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-7K6MS2gNqxwCbaVuvdnq-v1.png
:name: MtIxvlIdGo
```

Other changes:

* 📃Improved server-side logging around the synchronization api

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/0XnAE1eTaTB3UmKgVWVs.1"}

## Nov 24, 2021 - Codemark & Comment Speedups

* The comment selection/placement algorithm has been sped up as we get ready for some other improvements around commenting workflows.
* We have released a new version of `codemark` that works with collaborative input! Before your cursor would jump inside of the code mark.
* There was a bug around tables where they didn’t resize/work properly. 🐛

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/9epOzeWfkAD4lI4jWGv7.2"}

## Nov 19, 2021 - Quality of life 🐛

* The export form checkboxes are now initialized to their defaults and work as expected
* Form options remembered properly ([#8](https://github.com/curvenote/support/issues/8))
* arXiv templates have the correct character count advisory note
* Removed color coding for the summary count of optional options and tagged blocks

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/YiYfnNEukzrfdxdL5ZxE.1"}

## Nov 17, 2021 - Project & Team Add Notifications

Existing users will now get an in-app notification when they are added as a Collaborator on a project or a member on a Team. Click on the notification to visit the project or team.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-cje1wVldw5LdNjYKbI4s-v1.png
:name: pokwtVhtem
```

### Quality of Life 🐛

* Improvements to the emails sent when someone is added/invites to a project or team, which now also include links directly to the project or team they were added to.
* When a user is added to a Team, they will only receive one notification email with a link to the team instead of an email for each team project.
* In app notifications for exports have been re-enabled.
* The `Abstract` tag no longer shows up in the Article header, if it is added as a tag on the article block.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/jpHvIJcsmn2eO9bjlWcO.1"}

## Nov 16, 2021 - Project & Team Invite Improvements

We have added the ability to both search for an existing user and invite a new user via an email when you are adding them to a project or a team. The user suggestions will be a helpful feature as we start to bring this into our editor in the coming months!

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-pEdvdKGEuxMUM0Vc8j1b-v1.gif
:name: LqJROQt5bl
```

You can also specify an email directly, or copy and paste from Gmail or Outlook. Invited users who do not have an account will show up as pending in your access list, these will get resolved when the user signs up!

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-6jydBPcKeWiiQVgP3cbi-v1.gif
:name: dRAqNYfIZW
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/8y8888Slt7tRNbW7BBtW.1"}

## Nov 11, 2021 - Export 🚚

* Improvements and fixes to the AGU2019 and Plain Latex export templates.
* MPDI Energies renamed to MDPI and additional options added. All 350+ journals can now be access via the options available during export.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/h2pUDIzmQIr93eeMMOMx.2"}

## Nov 8, 2021 - Quality of Life 🐛

* Affiliation now has a max length of 160 characters (up from 50) and that is shown in the user interface, rather than error-ing without a very helpful message.
* We have improved the messaging around saving a draft, previously other collaborators saw this as the draft being “discarded” 👻, that is now changed to showing that it is saved.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/u4QKyMgghv7iHET7UTVR.3"}

## Nov 2, 2021 - Inline Code Editing

We have improved the handling of inline code to show you where you input cursor is and if the next character that you type will be “marked” as inline code. You can now also create inline code marks in two additional ways to typing forward `` `code `` as previously, (1) going back in the editor and filling in the mark `` code` ``, and (2) selecting text and hitting the `` ` ``. The changes also improve when you select on the editor, if there is an option, the cursor defaults to being outside of the code mark!

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-2DQ05e8qk2XY4uvKDGnq-v1.gif
:name: oGcxjNqJmN

Improvements to allow arrowing into/out of inline code.
```

Let us know what you think of the new experience! 🚀

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/tQxTjjUtfvKHyv3ejpeh.1"}

## Oct 27, 2021 Figure and Table Captions

We have added the ability to put figure, table and code captions on elements, and directly edit them in the editor. Previously you could add captions to figures, but they were only editable in the settings menu and were did not let you collaboratively edit.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-YOgELsaetlWTg9CuxxoR-v1.gif
:name: uYCK0qwGjI

A recording of adding a caption to a figure!
```

This works also works for tables and code blocks, for example:

~~~{list-table} This is a simple table of equations!
:header-rows: 1
:name: a2MwNogj6l

* - Name

  - Equation

  - Citation

* - Pythagoras’s Theorem

  - $$a^2 + b^2 = c^2$$

  - Pythagoras, 530 BC

* - Logarithms

  - $$\log(xy) = \log(x) + \log(y)$$

  - John Napier, 1610

* - Calculus

  - $$\frac{df}{dt} = \lim_{h \to 0}\frac{f(t+h) - f(t)}{h}$$

  - Newton, 1668

* - Law of Gravity

  - $$F=G\frac{m_1m_2}{r^2}$$

  - Newton, 1687

* - Imaginary numbers

  - $$i^2 = -1$$

  - Euler, 1750

~~~

```typescript
interface Point {
  x: number;
  y: number;
}
 
function logPoint(p: Point) {
  console.log(\`${p.x}, ${p.y}\`);
}
 
// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);
```

You can reference these {numref}`Figure %s <uYCK0qwGjI>`, {numref}`Table %s <a2MwNogj6l>`, {numref}`Program %s <pN97GIkSz8>`, using the `[[` command.

### 🚀 Improvements

* You can now reference tables! For example in, {numref}`Table %s <a2MwNogj6l>`! Use the `[[table:` command to bring up a list of all tables in the document.
* You can now center or align tables!

### 🐛 Bug Fixes

* The inline-actions for editor now no longer are shown when you open a modal (e.g. image settings). Previously this would leave a hanging image actions, for example, on top of the modal which was difficult to close.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/LG3PmGbztdwiDCHfQ7Of.1"}

## Oct 22, 2021

### ⚡ Quality of life improvements!

* Better fractions ½ when you type fractions in Curvenote, they are turned into the typographic equivalent that are supported — ½ ⅓ ⅔ ¼ ⅕ ⅖ ⅗ ⅘ ⅙ ⅚ ⅐ ⅛ ⅜ ⅝ ⅞ ⅑ ⅒! These were a little too ambitious when you started a `321/2` would turn into `32½`, this no longer happens! 🙂
* The copyright and registered trademark symbols © & ® are also inserted when you type, however, in a list when you talk about (a) something; (b) something else; and finally © … that would also turn into a copyright symbol. It doesn’t anymore!
* We have also improved the handling of wrapping math in `$` which already didn’t happen if you were talking about $1.00 and $2.00, but if you inserted in a bracket ($1.00) then it would match. That is no longer the case. 🎉
* Strikethrough is less sensitive! especially when you are writing \~5 and \~7, before that would {strike}`strike` it out before.
* We have removed the accelerator for dynamic text, which was previously <x>, this confused with writing `html` in many cases.

#### 🐛 Bug Fixes

* Keyboard shortcuts for block copy paste and selecting between blocks now work again, was not working since yesterday’s word-deployment. ⏭️

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/EzXZVl0qLO9bbvq7i78r.1"}

## Oct 21, 2021

#### 📘 Export to MS Word

We can now export Curvenote articles to MS Word (docx) format.

Our aim when exporting is to bring over your all of content to docx with all the styling and features (links, citations, images, captions) you have in the Curvenote article. This feature is still in `beta` as we’ve not quite added all of those yet! Give it a try, and we’d love to have your feedback.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-aesQDyVZq4wnmgU27djw-v1.png
:name: a051f3d8
```

#### ⚡ Quality of life improvements

* We have fixed heading numbering issues. Previously subheadings would not inherit their parent numbering so section `1.1.0` would show up as `0.1.0`

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/c3rGWKLnksiBc2KyidWO.2"}

## Oct 19, 2021

### 🖼️ Image Upload

You can now find the image upload in both the command menu (`/image`) and in the editor insert menu at the top. This command brings up a widget to upload images either through a click or a drag and drop. This is exposing functionality that we always had, but makes it much more discoverable. 🔍

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-TUglXkyvwrsOZBb4hwon-v1.png
:name: a1a2eedc
```

### ⚡ Quality of life improvements

* Code editor now can toggle on/off code numbers 🔢
* Code editor supports shell syntax highlighting 🎨
* You can now upload multiple images at the same time, both through drag-and-drop and through the new image upload placeholder 🚀

#### 🧙 Chrome Extension Fixes 🐛 v0.3.2

* Updated the Curvenote logos in the deployed version!

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/SQ1gozrs7z5YEcYfDjNd.1"}

## Oct 14, 2021

#### 🪐 Chrome Extension Fixes 🐛 v0.3.1

We’ve fixed a number of issues with the Chrome extension

* **Fixed** - In Jupyterlab 3.1+, the Panel and toolbar controls for the extension were not initializing or only appearing intermittently.
* Busy spinners we’re no longer visible on individual cells when they were saving, these have been reintroduced.
* Updated some internal calls that were resulting in console error messages

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/DKCLETkTCcsAKPkr5jkc.1"}

## Oct 12, 2021 - Footnotes(When you want to say something, but also kinda don’t?)

We have added the ability to add footnotes to your documents!

* Using the `/footnote` command, or insert from the top menu
* These will also show up in your $\LaTeX$ and PDF exports as well!

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-xsoD5YrV1tnmdAVptsdR-v2.gif
:name: acfe1691

You can now add footnotes in the editor directly!
```

### Quality of Life Improvements

* Bug fixed 🐛 with citation view in Firefox 🦊. There was a problem with the date-parsing of citations, leading to showing `????` instead of the actual year 📅.
* Occasionally some references would not load for projects that are partially public (advanced publishing mode), this should now be fixed.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/jD8lCS7Ry92KCfJnKS4S.2"}

## Oct 11, 2021

#### 📗Updates to $\LaTeX$ templates

We’ve made updates to three templates *(default, Arxiv\[nips\] and Arxiv\[two-column\])* to add various options including - corresponding author, backlink, show date, affiliation, location, keywords.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/fGBaWcW1zI6g0tZZ0bAR.3"}

## Oct 7, 2021

#### 📋 New Export Template Options

Our export process for $\LaTeX$ & PDFs has been extended to include screens for *Options* and *Tagged Content*. This allows you export your paper or report to a template while taking advantage of all their features and meeting their minimum requirements.

There are two additional screens, the first is a form that will list all of the configurable options for the template you chose.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-ShJNsdihjgio8FnORfiV-v2.png
:name: a4b349a8
```

The second is a listing of Tagged Content accepted by the selected template. Tagged Content is our way of marking blocks from in your article as the “special content” that the template expects and treats differently.

For example, a block tagged as *abstract* will be separated from the main content and used in the appropriate abstract section in the Journal template.

Each template has different required and optional blocks of content, so this is a uniform way to include those in your paper and then let the chosen template typeset accordingly.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-poh32QhYCSU8NKptKx7S-v1.png
:name: ab7eb3bd
```

Remember that all of our templates are [open source here](https://github.com/curvenote/templates) — we’re actively porting more and are more than happy to accept and help with contributions — if there is a template that you’d like to see, open an issue or PR.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/DNUQkcmThEzyAohHT5Wy.7"}

## Oct 6, 2021

### ⌨️ New code editor and highlight experience

You can now have a syntax-highlighted experience when you are creating code snippets in Curvenote. To create a code block:

* Type ```` ``` ```` to create a syntax highlighted editor
* Or use the command menu and type `/code`

To exit the code environment, either hit `Esc` or use `Cmd/Ctrl-Enter` depending on your platform. When you are in the code editor, it will allow you to choose the language. By default we have chosen Python.

For example, in `Python` 🐍

```python
from pooch import retrieve

\# Download the file and save it locally.
fname = retrieve(
  url="https://some-data-server.org/a-data-file.nc",
  known\_hash="md5:70e2afd3fd7e336ae478b1e740a5f08e",
)
```

Or in `Typescript` 🚀

```typescript
interface Point {
  x: number;
  y: number;
}
 
function logPoint(p: Point) {
  console.log(\`${p.x}, ${p.y}\`);
}
 
// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);
```

### ✨ Updates

* The thesis template has been updated with content, and the paper template has been improved to include the latest tables.

### 🐛 Bug fixes

* The issues with [backticks having zero-width](https://twitter.com/rowancockett/status/1445873519682674690) has been fixed.

