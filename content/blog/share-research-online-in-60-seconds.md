---
title: Share research online in 60 seconds
description: >-
  Easily share scientific content and Jupyter Notebooks online, all you need to
  start is GitHub or GitLab repository and you can be up and running in 60
  seconds.
authors: []
date: 2022-07-25
name: share-research-online-in-60-seconds
oxa: oxa:AVQ2dzLNloEd25Io8NbA/iy1YcaKLY2gAeLj1iYdX
short_title: ''
tags:
  - jupyter
  - git
  - demo
thumbnail: thumbnails/share-research-online-in-60-seconds.png
license:
  content: CC-BY-4.0
  code: MIT
---

# Share research online in 60 seconds

+++ {"oxa":"oxa:AVQ2dzLNloEd25Io8NbA/zuWLnoGmnZx7Sy7oG0hh.5"}

Today we are launching a new way to easily share scientific content online — we are calling it the [Curvenote Launchpad](https://curvenote.com/demos/publish-from-github) and it is free and [open-source](https://github.com/curvenote/curvenote). All you need to start is GitHub or GitLab repository.

+++ {"oxa":"oxa:AVQ2dzLNloEd25Io8NbA/WD9u8dQN4GkOV3CdG3WM.5"}

## Curvenote Launchpad

The launchpad service is available at [https://try.curvenote.com](https://curvenote.com/demos/publish-from-github) and can turn any repository with Markdown `.md` and `.ipynb` files into a rich interactive website in under 60 seconds.

```{figure} images/AVQ2dzLNloEd25Io8NbA-oitnKdqykoo6QDUMWBWP-v1.png
:name: nZUO6adPzC
:align: center
:width: 90%

The Curvenote Launchpad service to turn an existing GitHub repository with
```

We’ve been working to ingest and support a wide variety of repository layouts, so the tool will automatically descend into subfolders to find markdown and Jupyter Notebooks and present a default Table of Contents.

The service will give you a unique URL, something like `https://launchpad-3j8c8sj2.curve.space` that you can share and will remain active for 5 days.

:::{important} Want to publish a longer lived website?

It’s easy to configure your repository and publish your content, with no expiry, on our hosting service for free.\
Read more [in our documentation](https://curvenote.com/docs/web/launchpad).

:::

+++ {"oxa":"oxa:AVQ2dzLNloEd25Io8NbA/0Lk9o9w7LdmWOgKMzFGd.6"}

## Awesome by default

We are working on making content your content as awesome by default as we can, and here are a few of the features you can expect to see so far:

### Jupyter Outputs

Curvenote sites support the rendering of Jupyter output cells. As well as the fast server-side rendering of rich text outputs and static images like those produced by `matplotlib` or `seaborn`, the sites can host interactive plots from `bokeh`, `holoviews`, `altiar` and `plotly` provided the notebooks are saved with their outputs when the site is generated.

```{figure} images/AVQ2dzLNloEd25Io8NbA-TBtZfe20VjEYTaVJ4lmI-v1.png
:name: DwhpmPvMq6
:align: center
:width: 80%
```

### BibTeX support

If the repository contains BibTeX `.bib` files, the service will load the references and pick up on any citations you’ve made in your Markdown files or Markdown notebook cells, we currently support [MyST Markdown](https://mystmd.org) for these sorts of references.

### References from DOIs

If you have included any Markdown or HTML links to a DOI, these will automatically be made into hover citations as shown below, and the reference will be added to the reference section at the bottom of the document.

```{figure} images/AVQ2dzLNloEd25Io8NbA-PL1fwl8JPOlyP8daVjbK-v1.png
:name: tNBDwtq0kO
:align: center
:width: 70%

Example screenshot is taken from <https://jarmitage.curve.space/egu22/presentation>
```

### Titles

Launchpad will guess at the best titles to use in Table of Contents based on folder names, file names, and the markdown content itself. That means if a top-level heading (`#`) is at the top of your markdown `.md` file or in the first cell of your notebook, that is what will be picked up, and if not the filename will be parsed to produce a capitalized string. If you get repeated names in your Table of Contents, then this is something that you might want to tweak by inserting new headings or [frontmatter](https://curvenote.com/docs/web/frontmatter) in your files.

### Starter Frontmatter

Curvenote websites have a [whole collection of frontmatter settings](https://curvenote.com/docs/web/frontmatter) available. All are relevant for scientific publications, and the launchpad service will populate a few of these based on your GitHub profile or organization information. If you move on to [set up a permanent website](https://curvenote.com/docs/web/launchpad), you [can configure much more information](https://curvenote.com/docs/web/frontmatter).

```{figure} images/AVQ2dzLNloEd25Io8NbA-MVOQ7qqh0kdTiBCjn2YM-v1.png
:name: Vh6yoXvfS9
:align: center
:width: 100%

Setting up frontmatter to show on your articles, including organization information, GitHub links, authors and affiliations.
```

### Homepage

The first page of the website produced is taken in priority order from `index.md`, `readme.md`, `main.md`, `*.md`, `index.ipynb`, `readmd.ipynb`, `readme.ipynb`, or `*.ipynb` (not case sensitive) and usually, you will have a `README.md` at least. You can override that as the homepage by adding an `index.md` to your repo before launching.

+++ {"oxa":"oxa:AVQ2dzLNloEd25Io8NbA/ouqQeH2zesSbMwX9s2j2.4"}

## What’s next

Curvenote Launchpad is an easy way to [share Juptyer Notebooks, research notes and other markdown content](https://curvenote.com/demos/publish-from-github) with a quick, disposable link. If you like the service and the result, we’d love you to share it more widely, with a tweet ❤️.

```{figure} images/AVQ2dzLNloEd25Io8NbA-YiV3owCpWrvhRxpbPDEb-v1.png
:name: qr5cJ25wML
:align: center
:width: 100%
```

Launchpad is also a great way to quickly try out Curvenote’s site generation capabilities on your content before setting up a permanent website with your own URL. Curvenote’s publishing tools are open source, and our mission at Curvenote is to free science from the PDF. Let us help you do that by getting your [preprint, supporting materials or thesis online](https://curvenote.com/docs/web).
