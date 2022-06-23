---
title: 2022-Q2
description: Notebook improvements, command-line interface, and curve.space!
authors: []
date: 2022-04-10T16:52:04.001Z
name: 2022-2
oxa: oxa:9Kv3iYv0uCgaG0zl4WDZ/DA6m9Q2tMjWW2SJeAtOL
---

# 2022-Q2

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/lZlSSr1yzUWqbVlnjxnR.1"}

## Jun 20, 2022 - Quality of Life 🐛

We deployed various fixes and improvements to the rendering of article frontmatter and the respective article and project settings forms.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/4Wo6oV8UVSHdxRwVDw7S.1"}

## Jun 14, 2022 - Document Outline

You can now see the document outline, which shows all of the headers on the page. This can be accessed from the navigation and can toggle between all project documents and the list of headers on the document you are currently viewing. As a part of these changes you can also open/close the project thumbnail to give yourself more room to see the outline of long documents.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-f8vqHmZGfBTol0Pm66kA-v1.gif
:name: A1U3WFvO8p
:align: center
:width: 30%
```

### Bug fixes 🐛

- A bug that lost undo history when pasting into text input fields has been fixed.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/1U92qyD9lelbbMy36jPA.2"}

## Jun 7, 2022 - Minor changes & bug fixes

### UI Features 🎨

- Tables are more compact
- Code blocks has a more distinguished look
- MyBinder and Notebook icons are now coloured when not hovered

### Bug fixes 🐛

- fixed a bug causing tooltips fail to stick to anchor when scrolling

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/71RrShrPnWLSPJYKQDMb.2"}

## Jun 3, 2022 - Updates for Front matter

We have made the updates for inputting front matter easier to do this directly from the block settings, based on feedback from early user testing in the past two days. We also added additional descriptions and links to all of the fields.

🐛 We have fixed a bug for section number that caused the number to be hidden while editing.

### Curvenote CLI - Validation Errors

We have improved the client library to have more descriptive validation error messages and warnings. These will help notify you as you are building your `curvenote.yml`.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-OfLloVKiMKYDQmBA8yCp-v1.png
:name: KpBGsgbtTe
:align: center
:width: 70%
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/NFM8a1J0kFv0csYrS42m.1"}

## Jun 1, 2022 - All the front matter

Following through on recent DOI and article/notebook header section changes, we have added a number of different front matter fields.

You can now set the following metadata on your Articles, Notebooks and use project-wide settings to apply default metadata across the contents of your project in one go.

The available metadata now aligns with that on [curve.space](https://curve.space) and is documented in detail in our documentation here: <https://docs.curvenote.com/web/frontmatter>

Most metadata is displayed in the new header section on articles and notebooks:

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-mL7uyQJGI31Qz95fxoqN-v1.png
:name: zXfhorVvmn
:align: center
:width: 70%
```

And can be set both in the Article / Notebook settings (available from the `…` menu)

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-qs7iKDVitcOAEnwfcZWp-v1.png
:name: jT0P8muQuV
:align: center
:width: 70%
```

and from the Project settings, Frontmatter section.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-iI2u2IZxXzUHfLIqKWki-v1.png
:name: Ts7swpNyhD
:align: center
:width: 70%
```

### 🐛 Quality of Life

Other fixes and improvements include:

- Authors and affiliations can now be set or modified without having the edit & save the article. They are accessible from the Article/Notebook Settings dialog on a new tab.
- Drag and drop functionality on the author’s list has been improved.
- Move up/down arrows have been added to items in the Author list, to allow reordering without drag and drop.
- Most popular licenses for `content` and `code` have been moved to the top of the license list.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/uZlb8RFpJ2bqtihdzwfr.2"}

## May 31, 2022 - Site Analytics

We have added the ability to add analytics (google & plausible) to your curve.space site. See more in the docs:

- <https://docs.curvenote.com/web/analytics>

This is completed by adding a config option to your `curvenote.yml` of `site.analytics` for either `google:` or `plausible:`. In the `google:` case, this is your **Tracking ID** for `plausible:` this is your domain property.

### 🐛 Curvenote Client Bug Fixes

- The `curvenote pull` now finishes reliably before a `curvenote start`

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/fbGDFVVoWOGA4OgDmhaz.2"}

## May 24, 2022 - Site Deployments & UI Improvements

We have released changes that allow you to deploy any curve.space site to a domain that your team owns or a domain with a `-` separated “subsite”, for example `username-subsite.curve.space`. This allows you to deploy multiple subdomains for projects, and in the near future stitch them together on a different site.

### API Tokens 🗃️

We have improved the New API Token user interface that is clearer that you have to copy your token before leaving the page.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-LNynluX0EaZfA2ayiYsv-v1.png
:name: OGuzthC9bu
:align: center
:width: 70%
```

### Bug Fixes 🐛

- Inline math no longer inherits bold, italic or superscript inside of a math node. Previously the export for $\LaTeX$ would be `$\textbf{A}$`, this is now no longer written inside of inline math.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/wDu3F8DzOeinlW4DZuS8.1"}

## May 20, 2022 - DOIs 🔗

We are continuing to expand our front matter capabilities! and have just added DOIs to Articles and Notebooks with the same Project level overrides that we see on our other front matter fields. So now you can easily add your DOi to your article or notebook, and that will be visible to collaborators on Curvenote and (as with all front matter) will propagate to your [curve.space](https://curve.space) site when you deploy.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-o5L2F2EGeujs72N1t0KC-v1.png
:name: m4XJMjF27X
:align: center
:width: 70%
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/NKJTSscmxsqydUnUZeXr.2"}

## May 17, 2022 - Licenses 📜

You can now apply licenses to your articles, notebooks and projects by selecting a license from the lists of [Open Source Initiative approved licenses](https://opensource.org/licenses) available. These will be displayed as badges in the header section of your articles and notebooks.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-gmeGfxEhNtvhhz8wADF0-v1.gif
:name: Q3qquwFVsE
:align: center
:width: 70%
```

Licenses can be chosen for `content`, `code` or both, and by default, new articles and notebooks will inherit the licenses that are set in your project.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-o8155frruJ7IiIMnBtWp-v1.png
:name: E3lUINJIvA
:align: center
:width: 70%
```

but this can be overridden in the Article or Notebook settings

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-84tk2QGJ3iOP7wAcp6PN-v1.png
:name: GaEZYNOQwx
:align: center
:width: 70%
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/QsneWKKQvIihtdNiiZ53.3"}

## May 16, 2022 - Reference management

We’ve made a number of improvements to the reference management dialog, which should make keeping references in sync with other sources and dealing with lots of references easier.

- ⏹️ References can now be deleted and removed from the project, allowing duplicate and un-needed references to be cleaned up - currently only `project.owners` can delete references.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-BmxP51nYjTEUcDTGZszH-v1.png
:name: vmv76wnNbm
:align: center
:width: 70%
```

- ⚠️ citations that point to missing references are now marked as broken within articles and notebooks. This allows them to be easily identified and replaced.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-og1fDptQHQKbjjGcqbGK-v1.png
:name: HdFpOdFk9V
:align: center
:width: 30%
```

- 🐛 When the reference management window is first opened, it will fetch a complete list of references in the project from the server — however it will now first show any loaded references immediately, whilst fetching new ones in the background.
- 🐛 When switching between tabs in the reference manager, the full list of references will no longer be loaded each time — instead, updates from the server will be fetched in the background.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/U6X6lGH853iQ8ke04TKE.3"}

## May 12, 2022

We have released the first step in improvements to the “header section” on articles and notebooks, along with improvements to the author selection UI - more to come on this in the next few days!

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-cHRJ7zCoDQe5PHgEmOf6-v1.png
:name: R66yoejLhl
:align: center
:width: 70%
```

Projects now also contain author information, so you can define authors, affiliations etc on a project-wide basis, and set your articles and notebooks to use the project-wide information.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-jpuUDAAHvCT5bYjZud6I-v1.png
:name: YXGPxY7LPw
:align: center
:width: 70%
```

Project-wide settings can be found in the new “Front Matter” section in the project settings dialog. By default, new articles and notebooks will have the “Use Project Authors” checkbox checked.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-T7hJ0UtwZVp9fhxJ5tqw-v1.png
:name: NhAzOAjch3
:align: center
:width: 70%
```

Other changes 🐛 ✨ :

- We have added Plain Text, JSON and YAML modes to code blocks
- We have restored the border on inline code blocks
- The date of the first article in a new project is now set correctly

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/nDDcbuSp9WwYWsr0CaGv.1"}

## May 4, 2022 - Quality of Life 🐛

Fixes for:

- Some citations could appear with the wrong date (year-1) in GMT+N timezones. [\[issue\]](https://github.com/curvenote/support/issues/52)
- Leading newlines and empty paragraphs in table cells would cause problems on export [\[issue\]](https://github.com/curvenote/curvenotejs/issues/83)
- Some HTML tags (hr, br) were not handled properly on export [\[issue\]](https://github.com/curvenote/curvenotejs/issues/73)

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/3C3pYu2SrZ0u0Fi6REw8.1"}

## May 3, 2022 DOI Search fixes 🐛

Our DOI based search for adding references has been down, but is now fixed and DOI based search is again available via the reference management dialog.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-f4DUSP07n9x9bvP5PyT2-v1.png
:name: pMs8PK1Cd5
:align: center
:width: 70%
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/h8HntTWJMqkxRVcZfDFk.2"}

## Apr 27, 2022 Link Card Updates 🃏

Link cards can now include external links, and the thumbnail title and description are shown! Here is an example of a recent paper in eLife:

```{link-block} https://elifesciences.org/articles/70235
```

### Notebook Upload Bug fixes 🐛

We released an update to our API that fixes upload issues around `HTML` inside of the markdown cells.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/96h9MYw2Ypw8lZ1xyVLK.1"}

## Apr 25, 2022 Curvenote Blog

We have moved our Curvenote blog over to using our own publishing infrastructure, which means that it has moved to a subdomain: <https://blog.curvenote.com>

The site is super fast to load, and can handle all of the writing that we can throw at it, including references, figures, equations, and more. Our previous blogging seemed pretty constrained and really forced us to [copy-and-paste](https://curvenote.com/oxa:AVQ2dzLNloEd25Io8NbA/m2K31HsBqvCglJacduZU) content around the place, which didn’t feel right.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-PBHRWNMDNfuHNwiUIoep-v1.png
:name: WaQ90dEVtX
:align: center
:width: 70%
```

Stay tuned for more updates on our new publishing infrastructure over the coming month! 🚀

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/vzXz0yIA0wnPQIMqirql.2"}

## Apr 21, 2022 - Link Cards 🃏

We have added cards that you can now use to link to pages in your Curvenote project.

For example, you can now link to other pages in this project:

```{link-block} oxa:9Kv3iYv0uCgaG0zl4WDZ/LSP3vg3i6ez1uALQaTW4
```

```{link-block} oxa:9Kv3iYv0uCgaG0zl4WDZ/dPPeRbnMco3YbcraaZY8
```

To create a card, use the `[[` syntax to link to an article or notebook, and then use the dropdown to change from a `Link` view to a `Card` view. 🎉 .

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-OTy0ZwiNjlHnv0fdIY2l-v1.png
:name: iRhTQZiGlW
:align: center
:width: 20%
```

### Feature Improvements

- The MyST Markdown export is now compliant with the [MyST Spec](https://spec.myst.tools/). We will have a lot more to say about this soon! 🚀

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/9NYF6MM5kkMlAVxEZGke.2"}

## Apr 1, 2022 - Notebook Improvements 📒

- Syntax highlighting has been re-enabled
- Improvements to styling and layout
- Jupyter text & stream outputs are rendered as plain text

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-7nXDHcHhEJVqOPmR4twr-v1.png
:name: NiSReAHzSn
:align: center
:width: 70%
```

