---
title: 'Deprecating the Curvenote Chrome Extension: Embracing Better Paths to Scientific Publishing'
description: Announcing the deprecation of the Curvenote Chrome Extension and outlining updated publishing workflows using the Curvenote Editor and CLI tools.
date: 2025-05-26
authors:
  - rowan
  - steve
tags:
  - update
  - chrome-extension
  - cli
  - jupyter
  - hidden
thumbnail: thumbnails/deprecating-chrome-extension.png
---

At Curvenote, our mission has always been to make scientific content easier to share, integrate, and publish—moving research beyond static PDFs and into interactive, accessible formats. Over the past few years, our Chrome Extension has played a role in this journey, allowing users to seamlessly upload content from Jupyter Notebooks to the Curvenote platform and reuse interactive elements throughout their work.

Today, we’re announcing the deprecation of the Curvenote Chrome Extension.

:::{figure} ./images/copy-paste-jupyter.mp4
The Curvenote Chrome extension allowed users to embed outputs from Juptyer Notebooks into their Curvenote articles from directly within JupyterLab. Although now deprecated, outputs from Jupyter Notebooks can still be used in Curvenote articles by first them.
:::

## Why We’re Deprecating the Chrome Extension

While we recognize that this tool has been valuable to many users, the decision to sunset it stems from two key factors:

- Changes in the Chrome Extension Ecosystem: Google has significantly evolved the APIs for Chrome Extensions, making it increasingly complex to maintain compatibility and security for our users.

- Advances in JupyterLab Extensions: The landscape for integrating with JupyterLab has improved dramatically. JupyterLab’s extension architecture is now more flexible and user-friendly, reducing the need for intermediary solutions like a Chrome Extension.

## How You Can Still Seamlessly Publish with Curvenote

Even though the Chrome Extension is being retired, we’re continuing to invest in making it easy for researchers and lab groups to share and publish their work through Curvenote. Here’s how you can continue to do this today:

Direct Upload via the Curvenote Editor
: You can drag and drop Jupyter Notebook outputs and reuse interactive elements (such as charts and figures) directly within the Curvenote editor. This makes it easy to integrate and publish your content—just like before.

:::{figure} ./images/upload-notebook.mp4
Jupyter notebooks can be uploaded to the Curvenote Editor directly and once available there, outputs can be used to create figures in within articles by simply copying and pasting them into place.
:::

Use the [Curvenote CLI](./curvenote-on-the-command-line.md) and MyST Markdown
: For more advanced workflows, our [command-line interface (CLI)](https://curvenote.com/docs/publish/cli-overview) and MyST Markdown support provide a seamless path to publishing. You can write and preview your content locally (including interactive elements) and deploy it with a simple command. This approach also integrates with automated systems like GitHub Actions, which we use for projects like the SciPy Proceedings and Elemental Microscopy.

## Looking Ahead

While we’re saying goodbye to the Chrome Extension for now, this isn’t the end of our commitment to integrating Curvenote with popular computational environments. With the recent improvements in JupyterLab’s extension mechanisms, we see opportunities for future, deeper integrations that could make sharing and publishing from JupyterLab even more streamlined and powerful.

In the meantime, the best way to publish to Curvenote—whether for a personal website, journal, or lab group site—is through our web editor and CLI tools. These workflows are not only more robust but also align with our broader mission to advance interactive scientific publishing.

Thank you to everyone who used the Curvenote Chrome Extension—we’re excited for what’s ahead!

_If you have any questions or need help transitioning to these new workflows, please don’t hesitate to reach out to our team._
