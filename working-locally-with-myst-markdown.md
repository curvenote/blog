---
title: Working Locally With MyST Markdown
description: >-
  Export your Curvenote articles to MyST Markdown to locally edit the content.
  MyST Markdown is a new specification of Markdown that allows you to write
  professional documents, books and websites.
date: 2022-07-21
tags:
  - myst
  - cli
  - editor
thumbnail: thumbnails/working-locally-with-myst-markdown.png
---

We recently [released the first version of the Curvenote command-line tools](oxa:AVQ2dzLNloEd25Io8NbA/mdBajFyoGAFAQGWjmpWf 'Curvenote on the Command Line') to work locally with content from Curvenote. You can read the documentation here: <https://curvenote.com/docs/cli>. With the CLI, you can easily export an article to MyST Markdown, a new Markup language designed by [Executable Books](https://executablebooks.org/en/latest/) (we are on the [team](https://executablebooks.org/en/latest/team.html)!) to create publication-quality, computational documents written entirely in Markdown.

Stay tuned for new ways to share and manage publication quality content on Curvenote. 🚀

## Markedly Structured Text (MyST)

MyST (Markedly Structured Text) is designed to create publication-quality, computational documents written entirely in Markdown. The main community driving the development and design of MyST is [JupyterBook](https://jupyterbook.org/), which helps you create educational online textbooks and tutorials with Jupyter Notebooks and narrative content written in MyST. The MyST format has also been picked up in the [Sphinx](https://www.sphinx-doc.org/en/master/usage/markdown.html) and [ReadTheDocs](https://blog.readthedocs.com/sphinx-markdown-2021/) communities as well, which are used primarily for Python software documentation (which previously would have used [reStructuredText](https://en.wikipedia.org/wiki/ReStructuredText)). The fantastic thing about these communities is that there are ways to create new extensions and use these extensions _directly from the RST language_; this extensibility and community can now be accessed through MyST Markdown!

MyST is a superset of [CommonMark](https://commonmark.org/) (the standard form of Markdown) and allows you to directly create “directives” and “roles” as extension points in the language. `directives` are block-level extension points, like callout panels, tabs, figures, or embedded charts; and `roles` are inline extension points, for components like references, citations, or inline math.

````text
```{directive} Argument
The *content* of a directive can have {role}`with content`
```
````

If you want to dive deeper into the MyST syntax and features available, [see here](https://executablebooks.github.io/mystjs)! If you want to work with your Curvenote content locally, you can use the [command-line tools](https://curvenote.com/docs/cli) to either export or sync your content locally.

```shell
# Export a curvenote article as MyST Markdown 📜
curvenote export md [link]
# Or export as a JupyterBook  📖
curvenote export jupyter-book [link]
# Or export as a PDF! 📄
curvenote export pdf [link] -t arxiv_two_column
# Or bring an entire Curvenote project local as MyST files! 🚀
curvenote clone [link]
```

The simplified authoring environment provided by MyST and workflow tools that [stitch together Notebooks into a published website](https://curvenote.com/blog/creating-an-open-research-website), from a few lines of configuration, have been key to the adoption and use by the community. Scientists and researchers are using MyST to create projects from heliophysics to music classification. Curvenote is excited to support the project as it continues to evolve!

## MyST and Curvenote

As the Curvenote community grows, we want to make sure Curvenote is directly interoperable with the foundational MyST tools and syntax. Supporting MyST means that you can directly export your content as a JupyterBook (see [docs on export](https://curvenote.com/docs/cli/jupyter-book)), or copy MyST markdown directly in Curvenote when you are writing! Together, MyST and Curvenote will continue to evolve and support more use cases across scientific and data-science communities.

```{figure} images/AVQ2dzLNloEd25Io8NbA-JNDkLyIg87ZRiGsx9ZRN-v1.png
:name: S0ieBk9ikK
:align: center
:width: 30%

Directly copy any block as MyST Markdown
```

## Next Steps

Curvenote is currently helping lead an effort on standardizing and documenting some of the efforts behind the MyST language (aptly called [myst-spec](https://github.com/executablebooks/myst-spec)) as well as a new library to bring these capabilities into Javascript (called [mystjs](https://executablebooks.github.io/mystjs/)). These open-source technologies are some of what is powering our new sites and this blog!

### MyST Playground

You can edit the content below to get a sense of how MyST works, we will be improving both MyST documentation and our own documentation on Curvenote over the coming weeks!

````rust
```{note}
This is a `note` "directive"
```

This is a {abbr}`MyST (Markedly Structured Text)` "role" that creates an abbreviation.
````

To get started with your Curvenote projects locally, you can use `curvenote clone [link]` after you install the [command line tools](https://curvenote.com/docs/cli/installing). Let us know how this works for you! 🚀
