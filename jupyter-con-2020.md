---
title: JupyterCon
description: 'At JupyterCon 2020 we introduce Curvenote, allowing you to sync content between Jupyter Notebooks and a web-based, collaborative document editor.'
date: 2020-10-08
authors:
  - name: Rowan Cockett
    userId: vKndfPAZO7WeFxLH1GQcpnXPzfH3
    orcid: 0000-0002-7859-8394
    corresponding: null
    email: null
    roles: null
    affiliations:
      - Curvenote
tags:
  - presentation
  - open-source
  - conference
thumbnail: thumbnails/jupyter-con-2020.png
---

```{important}
Below is our submission for JupyterCon 2020, augmented with some screenshots!

See [curvenote.com/for/jupyter](https://curvenote.com/for/jupyter/) for more information and to install the [Chrome Extension for Jupyter](https://chrome.google.com/webstore/detail/jupyter-versioning-commen/egkbkefajoeehbmjgelpmdnpgnleknka?hl=en)

```

+++

```{iframe} https://www.youtube-nocookie.com/embed/WAyiDTt9DnQ
:width: 100
```

## Abstract

Explanations or analysis that start in a Jupyter Notebook are often required in other contexts - such as reports, presentations, papers, or tutorials. To create these other documents, Notebook content is duplicated using screenshots or copy/paste of text and images. Unfortunately, this copy/paste style of creating documents does not create links to the original notebook, and provides limited avenues for contribution from where that content is used downstream (e.g. improving explanations, fixing typos, etc.). Similarly, if an analysis or explanation is updated (e.g. a new figure), the reports or presentations that make use of that content must manually be made aware of those updates.

To _link_ these downstream documents build-chains are required, which is often too onerous for presentations or reports, and requires context switching for any downstream contribution. For example, an “Edit on GitHub” button in documentation/books requires knowledge of Git, GitHub, and Markdown/RST, which remains a high bar for potential non-technical contributors.

In this presentation we introduce a tool, [Curvenote](https://curvenote.com), that allows you to sync content between Jupyter Notebooks and a web-based, collaborative document editor. This allows you to track cells and content between Jupyter Notebooks and edit that content directly in downstream documents - while maintaining attribution, version history, as well as making any updates available in the original notebook through a Jupyter Lab/Notebook extension.

Our goal with these tools is to encourage linking and reuse of content and the integration of interactive, [explorable explanations](https://curvenote.dev/) that live in contexts beyond the Jupyter Notebook. In this presentation we will share some of our experience of creating educational materials and software tutorials (e.g. in [SimPEG](http://simpeg.xyz/) and [GeoSci.xyz](http://geosci.xyz/)), where one of our goals is to encourage contribution from non-technical contributors and share the educational content between projects (e.g. through figure, equation and question banks, see a lightning [talk here](https://youtu.be/NtBDf7d7mwM?t=6103), and a previous [JupyterCon talk](https://youtu.be/XY3Tq9Wd1_A)). We will also describe how these developments interact with recent work in [JupyterBook](https://jupyterbook.org/intro.html) and [MyST](https://myst-parser.readthedocs.io/en/latest/).

The poster will present the parallels between programming and writing (building upon a [SciPy talk](https://youtu.be/IW2LDsevvDk?list=PLYx7XA2nY5Gf37zYZMw6OqGFRPjB1jCy6)), and how concepts like “package managers” for content and standards for “interactive writing” could impact the communication of scientific ideas.

## Jupyter Integration

Curvenote provides a plugin to Jupyter to allow syncing and versioning of notebooks and their individual cells (see Figure 1). These cells can be updated and synced between notebooks as well as evolve from a notebook into other linked forms of communication (e.g. reports, papers, presentations). The iooxa platform lets researchers create granular versions of their work and bring updates/comments back into their computational notebooks without disrupting other sharing practices (e.g. via GitHub, email, Dropbox). The current version allows integration of charts and dashboards into documents, while remaining interactive (e.g. see <https://curvenote.dev/introduction> for components). Currently interactive figures need to be created inside of Jupyter (e.g. using bokeh, plotly etc.). Notebooks and dynamic articles can be published and shared on [curvenote.com](https://curvenote.com/), where computational results remain linked to their original source (see Figure 2).

The content of the figures below is from a collection of [educational notebooks](https://courses.geosci.xyz/gwb2020) we helped develop for [locating groundwater in Myanmar](https://medium.com/gwb-myanmar) using geophysical methods, the project was in partnership with Geoscientists Without Borders.

```{figure} images/AVQ2dzLNloEd25Io8NbA-QJZarBDql2BzqZqTo89w-v1.png
:name: 40dec9aa

Chrome extension for Jupyter. Easily add version control and real-time commenting at both a cell and notebook level. Notebooks and cells can be reused, modified and extended in Curvenote.
```

```{figure} images/AVQ2dzLNloEd25Io8NbA-tJtQXVtDQkfJfcPnBoTW-v1.png
:name: 3d5fc836

Create dynamic documents using Curvenote and publish them to your profile. The outputs from a Jupyter Notebook can remain interactive as well as be linked to where they were produced. The Curvenote environment allows for rich, real-time document editing and collaboration all under version control.
```
