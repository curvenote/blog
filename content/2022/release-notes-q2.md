---
title: 2022-Q2
description: Notebook improvements, command-line interface, and curve.space!
date: 2022-04-10T16:52:04.001Z
authors: []
name: 2022-2
oxa: oxa:9Kv3iYv0uCgaG0zl4WDZ/DA6m9Q2tMjWW2SJeAtOL
---

# 2022-Q2

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/fbGDFVVoWOGA4OgDmhaz.1"}

## May 24, 2022 - Site Deployments & UI Improvements

We have released changes that allow you to deploy any curve.space site to a domain that your team owns or a domain with a `-` separated “subsite”, for example `username-subsite.curve.space`. This allows you to deploy multiple subdomains for projects, and in the near future stitch them together on a different site.

### API Tokens 🗃️

We have improved the New API Token user interface that is clearer that you have to copy your token before leaving the page.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-LNynluX0EaZfA2ayiYsv-v1.png
:name: OGuzthC9bu
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/wDu3F8DzOeinlW4DZuS8.1"}

## May 20, 2022 - DOIs 🔗

We are continuing to expand our front matter capabilities! and have just added DOIs to Articles and Notebooks with the same Project level overrides that we see on our other front matter fields. So now you can easily add your DOi to your article or notebook, and that will be visible to collaborators on Curvenote and (as with all front matter) will propagate to your [curve.space](https://curve.space) site when you deploy.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-o5L2F2EGeujs72N1t0KC-v1.png
:name: m4XJMjF27X
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/NKJTSscmxsqydUnUZeXr.2"}

## May 17, 2022 - Licenses 📜

You can now apply licenses to your articles, notebooks and projects by selecting a license from the lists of [Open Source Initiative approved licenses](https://opensource.org/licenses) available. These will be displayed as badges in the header section of your articles and notebooks.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-gmeGfxEhNtvhhz8wADF0-v1.gif
:name: Q3qquwFVsE
```

Licenses can be chosen for `content`, `code` or both, and by default, new articles and notebooks will inherit the licenses that are set in your project.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-o8155frruJ7IiIMnBtWp-v1.png
:name: E3lUINJIvA
```

but this can be overridden in the Article or Notebook settings

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-84tk2QGJ3iOP7wAcp6PN-v1.png
:name: GaEZYNOQwx
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/QsneWKKQvIihtdNiiZ53.3"}

## May 16, 2022 - Reference management

We’ve made a number of improvements to the reference management dialog, which should make keeping references in sync with other sources and dealing with lots of references easier.

* ⏹️ References can now be deleted and removed from the project, allowing duplicate and un-needed references to be cleaned up - currently only `project.owners` can delete references.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-BmxP51nYjTEUcDTGZszH-v1.png
:name: vmv76wnNbm
```

* ⚠️ citations that point to missing references are now marked as broken within articles and notebooks. This allows them to be easily identified and replaced.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-og1fDptQHQKbjjGcqbGK-v1.png
:name: HdFpOdFk9V
```

* 🐛 When the reference management window is first opened, it will fetch a complete list of references in the project from the server — however it will now first show any loaded references immediately, whilst fetching new ones in the background.
* 🐛 When switching between tabs in the reference manager, the full list of references will no longer be loaded each time — instead, updates from the server will be fetched in the background.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/U6X6lGH853iQ8ke04TKE.3"}

## May 12, 2022

We have released the first step in improvements to the “header section” on articles and notebooks, along with improvements to the author selection UI - more to come on this in the next few days!

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-cHRJ7zCoDQe5PHgEmOf6-v1.png
:name: R66yoejLhl
```

Projects now also contain author information, so you can define authors, affiliations etc on a project-wide basis, and set your articles and notebooks to use the project-wide information.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-jpuUDAAHvCT5bYjZud6I-v1.png
:name: YXGPxY7LPw
```

Project-wide settings can be found in the new “Front Matter” section in the project settings dialog. By default, new articles and notebooks will have the “Use Project Authors” checkbox checked.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-T7hJ0UtwZVp9fhxJ5tqw-v1.png
:name: NhAzOAjch3
```

Other changes 🐛 ✨ :

* We have added Plain Text, JSON and YAML modes to code blocks
* We have restored the border on inline code blocks
* The date of the first article in a new project is now set correctly

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/nDDcbuSp9WwYWsr0CaGv.1"}

## May 4, 2022 - Quality of Life 🐛

Fixes for:

* Some citations could appear with the wrong date (year-1) in GMT+N timezones. [\[issue\]](https://github.com/curvenote/support/issues/52)
* Leading newlines and empty paragraphs in table cells would cause problems on export [\[issue\]](https://github.com/curvenote/curvenotejs/issues/83)
* Some HTML tags (hr, br) were not handled properly on export [\[issue\]](https://github.com/curvenote/curvenotejs/issues/73)

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/3C3pYu2SrZ0u0Fi6REw8.1"}

## May 3, 2022 DOI Search fixes 🐛

Our DOI based search for adding references has been down, but is now fixed and DOI based search is again available via the reference management dialog.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-f4DUSP07n9x9bvP5PyT2-v1.png
:name: pMs8PK1Cd5
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/h8HntTWJMqkxRVcZfDFk.2"}

## Apr 27, 2022 Link Card Updates 🃏

Link cards can now include external links, and the thumbnail title and description are shown! Here is an example of a recent paper in eLife:

```{link-block} https://elifesciences.org/articles/70235
```

### Notebook Upload Bug fixes 🐛

We released an update to our API that fixes upload issues around `HTML` inside of the markdown cells.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/96h9MYw2Ypw8lZ1xyVLK.1"}

## Apr 26, 2022 Curvenote Blog

We have moved our Curvenote blog over to using our own publishing infrastructure, which means that it has moved to a subdomain: <https://blog.curvenote.com>

The site is super fast to load, and can handle all of the writing that we can throw at it, including references, figures, equations, and more. Our previous blogging seemed pretty constrained and really forced us to [copy-and-paste](https://curvenote.com/oxa:AVQ2dzLNloEd25Io8NbA/m2K31HsBqvCglJacduZU) content around the place, which didn’t feel right.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-PBHRWNMDNfuHNwiUIoep-v1.png
:name: WaQ90dEVtX
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
```

### Feature Improvements

* The MyST Markdown export is now compliant with the [MyST Spec](https://spec.myst.tools/). We will have a lot more to say about this soon! 🚀

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/9NYF6MM5kkMlAVxEZGke.2"}

## Apr 1, 2022 - Notebook Improvements 📒

* Syntax highlighting has been re-enabled
* Improvements to styling and layout
* Jupyter text & stream outputs are rendered as plain text

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-7nXDHcHhEJVqOPmR4twr-v1.png
:name: NiSReAHzSn
```

