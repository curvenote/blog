---
title: Curvenote on the Command Line
description: >-
  You can now interface with Curvenote through the command line using our new
  CLI. Eaily export your content, work locally with MyST Markdown, or export to
  any PDF, Word or LaTeX template.
authors:
  - userId: fI5cWFyZPEZCTpIHdqX5H8OU3Iv1
    name: Steve Purves
    orcid: 0000-0002-0760-5497
    corresponding: false
    roles: []
    affiliations:
      - Curvenote
  - userId: vKndfPAZO7WeFxLH1GQcpnXPzfH3
    name: Rowan Cockett
    orcid: 0000-0002-7859-8394
    corresponding: false
    roles: []
    affiliations:
      - Curvenote
date: '2022-07-21T18:11:00.000Z'
name: curvenote-on-the-command-line
oxa: oxa:AVQ2dzLNloEd25Io8NbA/mdBajFyoGAFAQGWjmpWf
short_title: ''
tags:
  - cli
thumbnail: thumbnails/curvenote-on-the-command-line.png
license:
  content: CC-BY-4.0
  code: MIT
---

# Curvenote on the Command Line

+++ {"oxa":"oxa:AVQ2dzLNloEd25Io8NbA/82oRYfpgGvE7G2qNPo4G.8"}

Over the past few months, we've been busy building a new [open source Command Line Interface](https://github.com/curvenote/curvenote) (CLI) that sits on top of our content translation schemas and talks to the Curvenote API. *Why a CLI?* Command line interfaces can pack a lot of punch, exposing a variety of functionality in one small space. They can be used interactively as well as invoked from scripts for all sorts of automation tasks.

CLIs can also be colorful and conversational (and have emojis 🚀), making them easy to interact with even if you are not used to working in a terminal. We've put a lot of time and care into the design of our CLI to make it easy to use and so you can get results quickly.

```{figure} images/AVQ2dzLNloEd25Io8NbA-ccfeL3kOZ4evwjxVsL2w-v1.png
:name: W3bCLowsvb
:align: center
:width: 80%

The Curvenote CLI after you run `curvenote init`
```

In this post, we'll dive into the main capabilities of the CLI and talk more about what is coming up on our roadmap.

## The Curvenote CLI

The new Curvenote CLI is built in Typescript and runs on the [NodeJS Javascript runtime](https://curvenote.com/docs/cli/installing-prerequisites). Even if you are not familiar with NodeJS, it is probably already running behind the scenes on your machine powering something like Jupyter, Slack, Spotify, VS Code, or the Atom editor.

NodeJS (or `node`) comes with a package manager called `npm` which allows for direct and easy installation of a huge ecosystem of packages. If you work with python, then think of \`npm\` as \`pip\` for \`node\`. We chose a Javascript runtime for our CLI as it's easy to deliver the CLI on multiple platforms, leverage our open source content translation schemas, and include other web-based packages and technology.

The CLI can work completely locally on your content and files. It can also connect and synchronize with the Curvenote API, opening up a world of collaboration possibilities for working with others whether they are working online in the [Curvenote editor](https://curvenote.com), in the Curvenote Jupyter extension, or on the command line.

## Creating Websites

A huge function of the CLI is to provide a simple development experience building, writing content for and publishing a static website designed for open science publications — whether that's a [preprint or paper](https://www.stevejpurves.com/geoscience), [materials for a whole research project](https://www.stevejpurves.com/la-palma-earthquakes) or a [full Ph.D. thesis](https://phd.row1.ca). Other examples include:

- [Courses](https://geosci-inversion.curve.space) & [books](https://climasoma.curve.space/)
- [Seminar](https://seminars.simpeg.xyz/) & [conference](https://transform.softwareunderground.org/) websites
- [Blogs](https://curvenote.com/blog) & [technical websites](https://www.stevejpurves.com/blog)
- [Papers](https://www.stevejpurves.com/la-palma-earthquakes) & [reports](https://www.stevejpurves.com/computational-finance)
- [Documentation](http://curvenote.com/docs)
- [Sharing Jupyter Notebooks](https://jarmitage.curve.space/)

```{figure} images/AVQ2dzLNloEd25Io8NbA-21ju8KZBhTLvmQ6InPjK-v1.png
:name: aIPwALk0i0
:align: center
:width: 70%

A selection of websites that can be built using the Curvenote CLI.
```

### Getting Started

Key commands for building websites locally are:

- `curvenote init` - initialize your folder with a `curvenote.yml` file containing `project` and `site` configuration
- `curvenote start` - build your website, start a local web server, and open a preview in your web browser (this preview will update in real time as you update content!)
- `curvenote deploy` - deploy your website to Curvenote's free hosting services

Provided you already have content in Markdown files or Juptyer Notebooks, you can get a website started, previewed, and deployed to the web in just a few minutes.

Here is a demo where Rowan got a full live demo done in 2 minutes and 54 seconds. 🚀

```{iframe} https://www.youtube.com/embed/hGs2vysWOxc?start=2088
:label: dzKxVNeJmW
:align: center
:width: 100%
```

````{important}
**Tutorials**

Check out our tutorials on different routes to get started:

- [Start from a local folder](https://curvenote.com/docs/web/tutorial-deploy-local)
- [Start from a Curvenote project](https://curvenote.com/docs/web)

````

## Cloning Curvenote Projects

The CLI works with both local content and content online in Curvenote projects. The latter is made possible by Curvenote's API and underlying version control. You can pull in content from projects that you collaborate on with others, save new versions of your work, and update exiting projects with both content and website configuration information.

At the moment there are two commands that allow you to sync content. Those are `clone` and `pull`, which fetch new content to a local folder and fetch updates for an existing local folder respectively.

First, let’s take a look at `clone`

```python
curvenote clone <https://curvenote.com/username/my-project>
```

This command can behave in one of two ways:

1. Run this in an empty folder and this will fetch the project's existing `curvenote.yml`, `site` configuration and content enabling you to work on this locally and deploy manually.
2. Run this in an initialized local folder (i.e. one containing a `curvenote.yml` with your `site` configuration) and this will add the project as *an additional section in your existing website*, fetching the content and updating your website's navigation controls in the process.

The first allows update and manual deployment of any existing website either by another user or by an automated system (e.g. through the [Curvenote GitHub Action](https://curvenote.com/docs/web/github-action)), where the entire site configuration and latest versions of content is retrieved in full with a single command.

The second case enables powerful content aggregation workflows when publishing, allowing someone with the CLI to build documents or websites based on content from multiple collaborating users or groups, even when permission to access that content may be different on each project (of course, the CLI user must have access to all). An example of such a publication is the [SWUNG Transform Conference Website](https://transform.softwareunderground.org) which was built from the Curvenote projects and GitHub repositories of many different groups of authors.

Next, let’s take a look at `pull`, which can only be run from within an initialized folder:

```python
curvenote pull [optional/content/path]
```

This command allows you to pull the latest updates for content in all projects or a just specific project if the optional path is provided.

### Roadmap

We're extending the CLI to expose Curvenote's full version control capabilities (i.e. `merge`, `diff`, `push`). This will enable:

- a round trip of files and content with conflict resolution, allowing authors working locally to work with others concurrently no matter if they are working locally themselves or in the online editor
- the ability to add and push new files including images and other supported files to Curvenote projects, enabling workflows where visualizations and figures are generated outside of Jupyter notebooks.

Stay tuned for [updates on twitter](https://twitter.com/curvenote)!

## Exporting Content to Word, PDF, LaTeX, MyST and more

The last CLI service we'll talk about is `curvenote export`. This exposes functionality from Curvenote's open source [schema](https://github.com/curvenote/schema), [nbtx](https://github.com/curvenote/nbtx), and [prosemirror](https://prosemirror.net) extensions which constitute a powerful document translation engine. It is used to build Markdown (MyST), HTML, DOCX, ipynb, jupyter-books, LaTeX and PDF files locally from a Curvenote article.

See the list of commands below:

```{figure} images/AVQ2dzLNloEd25Io8NbA-YvCTcIsCmBEz7xiPQ2aV-v1.png
:name: LaQ5Hr4e3s
:align: center
:width: 90%

Export to PDF, LaTeX, Markdown, Microsoft Word, JupyterBook or Sphinx with Curvenote.
```

````{important}
**Note**

The commands in the export service will likely change over the coming months as we improve the functionality for local export/rendering.

````

When dealing with LaTeX and PDF exports you can also use [templates](https://curvenote.com/templates) from Curvenote's [Public Template Repository](https://github.com/curvenote/templates) and create documents ready for submission to a number of preprint services and scientific journals.

```{figure} images/AVQ2dzLNloEd25Io8NbA-NemB6E3iMVXw57nY9w6P-v1.png
:name: q92TVl2MoQ
:align: center
:width: 100%

A few of the [PDF templates](https://curvenote.com/templates) that you can export to using the CLI, allowing you to write your content once, then export to any template.
```

For more details on how to use the `export` service and dependencies that you may need to run some commands [see our documentation](https://curvenote.com/docs/export).

### Roadmap

Right now export commands only work with Curvenote projects, where content is pulled directly from the API into a temporary folder and built. We are currently changing this to support building from a local folder as well as support multi-article export (e.g. a PhD thesis or large report).

## Get Started

We've built out detailed documentation at <https://curvenote.com/docs>, covering everything that we talked about in this post.

To begin your scientific writing and publishing journey with Curvenote, just [Install the CLI](https://curvenote.com/docs/cli) and [start building scientific content for the web](https://curvenote.com/docs/web), syncing and [exporting to different document formats](https://curvenote.com/docs/export).

### See the Curvenote CLI in action

Watch our recent webinar on [Creating an Open Research Website](oxa:AVQ2dzLNloEd25Io8NbA/ygZdDzHQgXRX8HOndayQ "Creating an Open Research Website") where we go from a folder of Markdown files and Jupyter Notebooks to a published website in a few minutes, before exploring the customizations we can make to change navigation, add more content, add licenses, DOIs, binder links and more.

```{iframe} https://www.youtube-nocookie.com/embed/LviMD9zE3FM
:label: ICv58H0IfQ
:align: center
:width: 90%
```

````{important}
**Using Curvenote with GitHub**

Have your content on GitHub? quickly try building a site directly from your repository using [try.curvenote.com](https://try.curvenote.com).

````

