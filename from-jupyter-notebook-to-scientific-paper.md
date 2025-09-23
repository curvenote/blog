---
title: From Jupyter Notebook to Scientific Paper
description: 'In this tutorial we go over how to turn your Jupyter Notebooks into a scientific paper.'
date: 2022-02-01T22:50:00.000Z
authors:
  - name: Rowan Cockett
    userId: vKndfPAZO7WeFxLH1GQcpnXPzfH3
    orcid: 0000-0002-7859-8394
    corresponding: true
    email: rowan@curvenote.com
    roles: null
    affiliations:
      - Curvenote
  - name: Steve Purves
    userId: fI5cWFyZPEZCTpIHdqX5H8OU3Iv1
    orcid: 0000-0002-0760-5497
    corresponding: null
    email: null
    roles: null
    affiliations:
      - Curvenote
  - name: Liz Maag-Capriotti
    userId: QK7zZmHaCkh43qvqCMRmV8zUZRC2
    orcid: 0000-0002-0445-4531
    corresponding: null
    email: null
    roles: null
    affiliations:
      - Curvenote
thumbnail: thumbnails/from-jupyter-notebook-to-scientific-paper.png
tags:
  - tutorial
---

# From Jupyter Notebook to Scientific Paper

Jupyter Notebooks are a perfect tool for exploratory data analysis, data cleanup, and visualization. Jupyter is fantastic in creating rich, interactive visualizations, which are very different outputs than how most of science is communicated today — through PDFs, PPT Slides and WordDocs. This disconnect of how modern science is _completed_, using data analysis tools and high performance computing, and the way we _communicate_ that work means it can be very difficult to share and to collaborate with stakeholders, especially if those stakeholders aren’t familiar with Jupyter!

At Curvenote, our mission is to help transition science out of PDFs — bringing science communication into the web: where data can be dynamic, linked to computation, and kept up to date. That vision is still a ways off, with most of science being communicated in PDFs (and still even behind paywalls!), and this disconnect is what we will address in this article: **_How to create a scientific paper using Jupyter Notebooks?_**

## Copy-and-Paste stops Reproducibility

Today, most scientific manuscripts are written in Word or LaTeX, with results and figures included via copy-and-paste screenshots into the documents. This copy-and-paste style writing means all interactivity and reproducibility that Jupyter Notebooks provide is lost, and the disconnect between computation, results, and communication ends up costing researchers valuable time. Even for the most organized researcher, this disconnect can cause issues knowing which images are the correct version or to which data and parameters they correspond.

```{figure} images/AVQ2dzLNloEd25Io8NbA-NqtUmsTS79INLrm4dBt6-v1.png
:name: snmWmqgZzN

Today communicating research through static screenshots of figures from Jupyter to papers and presentations. This copy-and-paste style writing creating a disconnect between communication and research.
```

## Linking your Notebooks through Curvenote

Curvenote is a scientific writing tool built to maintain an active connection between data, computation, visualization, and communication. Curvenote provides the version control and persistent links/ids at the level of a single Jupyter cell, enabling key data and visuals to be inserted directly into documents such as papers, reports, and presentations. The Curvenote editor also serves as a writing platform with collaborative features such as simultaneous editing, rich-text comments, notifications, and version control.

```{figure} images/AVQ2dzLNloEd25Io8NbA-VntnbaEUtRMD3FOTwZTe-v1.png
:name: IwIM6Mye3C

Curvenote connects research, writing, collaboration, and communication across a data science workflow by maintaining active links between Jupyter notebooks and Curvenote writing projects.
```

Curvenote presents a new streamlined approach to transition your Jupyter notebook into a paper, while maintaining the interactivity and direct connection between research and communication. Within this blog we will step through the creation of Steve Purves’ paper, [La Palma Seismicity 2021](https://curvenote.com/oxa:1Bk7uPlcMuaTyKEshESj/7lITJLg3LX0T0h3VVmAp.8) and explore the various technical writing and collaboration tools provided. The paper is based on recent analysis of [openly available earthquake data](https://www.ign.es/web/resources/volcanologia/tproximos/canarias.html) (provided by Instituto Geográphico Nacional) from the island of La Palma in the Canary Islands, Spain, which is currently experiencing an ongoing volcanic eruption.

# Getting Started

Curvenote is [based around projects](https://curvenote.com/docs/overview/projects). Each project contains articles, notebooks, blocks, references, that can be organized, shared, referenced, and published. From your personal or team profile, you can create a new project based on a starter template - such as the Paper template which provides some example content to guide you.

You can invite your collaborators on your project, via their existing Curvenote username or an invitation email. Your collaborators can view, create, edit, comment, and save new versions of articles and notebooks. As the project owner you retain access to project administration.

# Jupyter Notebooks & Curvenote

Curvenote provides collaboration and version control features directly within the Jupyter environment via the [Curvenote Jupyter browser extension](https://curvenote.com/docs/jupyter/install), which is available for Chrome, Microsoft Edge, and Brave.

> The Curvenote extension will recognize and connect to Jupyter, either your local machine or Jupyter Hubs, Amazon Sagemaker, Saturn Notebooks and any other environment that serves the Jupyter Notebook interface.

Once installed and logged in, the extension adds a toolbar and a new control panel to Jupyter, allowing you to save notebooks to the project you just created. Both your notebook and each individual cell is saved and given a persistent Curvenote identifier, called an [OXA Link](http://oxa.link/), along with a version number. OXA Links allow changes and new versions of a cell or notebook to be tracked and linked into other documents.

```{figure} images/AVQ2dzLNloEd25Io8NbA-Zp1baAoZQ12xjCSvxEE4-v1.mp4
:name: uDwWBkPhRV

Save, version, collaborate, and comment on your Jupyter notebooks with the Curvenote Jupyter extension. Learn more about [Curvenote for Jupyter](https://curvenote.com/docs/jupyter).
```

The Jupyter extension also embeds this persistent identifier into the metadata fields of the `.ipynb` file, meaning that version information travels with the file should it be shared independently, or committed to a git repository. Multiple collaborators can each have their own local copies of a notebook, while making and receiving changes and comments that flow through Curvenote’s API in real time.

When any collaborator saves a new version of their notebook using Curvenote, all other collaborators immediately have access to those changes. The extension also adds features to Jupyter that anyone can take advantage of, even when working alone, such as inline diffs for cells and sharing notebooks via Curvenote profiles.

## Results and Figures from Jupyter

With your Jupyter notebooks saved, versioned, and linked through Curvenote, you can now easily include your figures from Jupyter within your manuscript. Rather than a typical copy-paste of a figure, you will copy the OXA Link for that figure in Jupyter then paste it into the necessary location within your paper.

```{figure} images/AVQ2dzLNloEd25Io8NbA-QZ7l4CHbmW2nAwjzhsHS-v1.mp4
:name: bkrZWLM02s

[Import Jupyter outputs](https://curvenote.com/docs/write/interactive-outputs) into your Curvenote paper, any comments and changes are shown in both instances of the cell.
```

The OXA Link is active and any comments made to the figure on either Curvenote or Jupyter are visible and available in all locations, letting you have conversations with your collaborators, suggest changes, and explain updates. When you make updates to your figure in Jupyter and a new version of your notebooks is saved, you can automatically preview changes and update the figure within your manuscript. At any time you can also view and return to previous versions of the cell throughout the many drafts, reviews, and revisions your paper will go through.

# Writing Your Paper

When you are ready to start writing, the Paper template provides an outline of a standard research paper that you can rename, replace, and fill in with the necessary components for your project. The template also includes examples of the different writing features available within Curvenote and is a great way to get started.

Articles on Curvenote are made up of blocks - distinct sections of content which are versioned in the same way as Jupyter cells. They can also be individually saved, versioned and reused throughout your Curvenote project.

### Writing Features

Curvenote’s writing environment provides all of the features you would expect from a scientific text editor.

Most of these features can be accessed using an inline command menu (type `/` anywhere), then filtering through the drop down menu for the feature or component you want to add or reference. Some formatting like section headings can also be applied [using Markdown accelerators](https://curvenote.com/docs/write/markdown-accelerators), and selecting the subsequent formatted text provides a menu to edit the the heading size and numbering. Sections can be [numbered and referenced](https://curvenote.com/docs/write/internal-references) throughout the text.

```{figure} images/AVQ2dzLNloEd25Io8NbA-8HsRR1cIewUMvvPNBAEi-v1.mp4
:name: BDYMZVqqxk

Add numbered section headings to your Curvenote paper and [reference them throughout your text](https://curvenote.com/docs/write/internal-references).
```

In addition to outputs from Jupyter, static images, videos, and GIFs can be uploaded to your paper. You can toggle on the figure numbering and add a caption. Figures can be referenced throughout the text and a preview will appear when you hover over the reference.

```{figure} images/AVQ2dzLNloEd25Io8NbA-GSNmgJi9ytyy6Jlyd05e-v1.mp4
:name: N97qhlYrtZ

Upload, number, caption, and [reference figures](https://curvenote.com/docs/write/figures-and-images) in your Curvenote paper.
```

Similarly you can [create and format tables](https://curvenote.com/docs/write/tables) directly within Curvenote or copy in tables of data from other sources. You can toggle on the table numbering and add a caption. Use inline commands to add references to tables within you text.

```{figure} images/AVQ2dzLNloEd25Io8NbA-OZwvEAfeZjMsY6a0ulkw-v1.mp4
:name: VZtL91ZgGf

Include [tables with numbering](https://curvenote.com/docs/write/tables) and captions within your Curvenote paper.
```

Curvenote supports $\LaTeX$ math, both [inline and displayed as equation blocks](https://curvenote.com/docs/write/math-and-equations). Equations can be numbered and referenced throughout the text. When you hover over an equation reference, the equation will appear.

```{figure} images/AVQ2dzLNloEd25Io8NbA-SW2iySTBhz5oFNypgTw1-v1.mp4
:name: EQlqGODuGa

Include $\LaTeX$ math both [inline and as equations](https://curvenote.com/docs/write/math-and-equations) that can be numbered and referenced throughout the text.
```

Citations are added to a Curvenote project via either a DOI or uploading a `.bib` file. After your citations have been uploaded, you can use the [inline citation command](https://curvenote.com/docs/write/citations) to search through the available references. Citations can be formatted, combined, or separated by simply dragging the text.

```{figure} images/AVQ2dzLNloEd25Io8NbA-Fg9lHviHuma1B2FxArzB-v1.mp4
:name: jqsYbgyB0q

Upload references, then use inline commands to search and add and [format in-text citations](https://curvenote.com/docs/write/citations).
```

# Communication and Publication

After several iterations of data analysis, drafting, and editing with your collaborators, it is time to share your work with the wider community. If you intend to publish online, you can share your paper and Jupyter notebooks publicly on Curvenote by adjusting the visibility settings of your project.

If you are publishing in a preprint service or traditional journal you can use Curvenote’s export feature to can export your paper in as a `docx` file for Microsoft Word, a collection of files for $\LaTeX$ compilation or as a submission ready PDF file. Curvenote has a [large collection of journal and preprint templates](https://curvenote.com/templates) already available for services such as arXiv and journals, and are continually adding more. If you don’t see the template you need, request it via our [open source template repository](https://github.com/curvenote/templates).

Throughout the export process, Curvenote will both suggest and check against the specific requirements of the template you are using to help you get to a submission ready document.

```{figure} images/AVQ2dzLNloEd25Io8NbA-Sisea8Dsa7PFc3Vq3hpG-v1.mp4
:name: XTCKUKN4CO

Export your paper using a variety of format and professional template options for submission to a preprint or academic journal. Learn more about export to these formats: [Word](https://curvenote.com/docs/export/microsoft-word), [PDF](https://curvenote.com/docs/export/pdf), [LaTeX](https://curvenote.com/docs/export/latex).
```

Curvenote is designed to improve scientific communication, collaboration and reproducibility, and ultimately make it easier to publish interactive, reproducible scientific articles on the web.

Curvenote maintains an active link between your Jupyter Notebook outputs and written articles that can be worked on with stakeholders who are not familiar with Jupyter. These bi-directional links decrease the time and disconnect between researching and communicating your work.

[Sign up for Curvenote](https://curvenote.com/) for free and start versioning, collaborating, and writing in your project! We’re keen to hear your feedback, suggestions, and help you get the most out of Curvenote.

To learn more about writing a paper based on research from a Jupyter notebook, you can watch a [webinar that Curvenote recently hosted](./writing-a-scientific-paper-in-jupyter.md). Steve Purves steps through the creation of his [La Palma Seismicity 2021](https://curvenote.com/oxa:1Bk7uPlcMuaTyKEshESj/7lITJLg3LX0T0h3VVmAp.8) paper, starting with earthquake data collected from the volcanic eruptions, creates visualizations in Jupyter, then demonstrates a how a paper can be brought together and exported to arXiv ready PDF using Curvenote.
