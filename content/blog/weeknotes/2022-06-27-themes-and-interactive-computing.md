---
title: Themes & Interactive Computing
description: >-
  We integrated the open-source thebe-core with the JupyterLite project allowing
  Python based notebooks to be executed in-browser.
short_title: ''
subtitle: Week of June 27, 2022
date: 2022-06-27
name: 2022-06-27-themes-and-interactive-computing
oxa: oxa:GTGiJ4YqK38DEbx5hX9m/yxuBODMK3JiIsAAQkhym
tags:
  - interactive
  - marketing
  - weeknote
thumbnail: thumbnails/2022-06-27-themes-and-interactive-computing.png
---

+++ {"oxa":"oxa:GTGiJ4YqK38DEbx5hX9m/jko1iMxDkCz5UTUob2lw.1","tags":[]}

There was a lot happening behind the scenes at Curvenote this week, we have started gearing up for publishing directly from the Curvenote app to a website, which should make it really easy for scientists to create, manage and update academic sites. We have also been working on bringing our documentation and blogs directly into [curvenote.com](https://curvenote.com), which has meant a concerted effort to improve templates for our website as well as aggregating content from multiple Curvenote sites into a single browsing experience for a user. We see a lot of parallels to the work we are doing here to creating custom journals or internal company portals for sharing technical informations (e.g. knowledge bases).

```{figure} images/GTGiJ4YqK38DEbx5hX9m-jGALgdIr4UySHDdi8cB1-v1.png
:name: VoE6G9Wgpt
:align: center
:width: 70%

Our new docs site that will be deployed soon! This is rendered directly inside [curvenote.com](http://curvenote.com), and improves templating and theming for Curvenote! All of the interactive features, citations and cross-references still work as expected!
```

### Computing with `thebe-core`

In a lot of our conversations with people who would love to deploy their notebooks, we are always hearing about how to make it easy for readers to execute them. When you deploy a site with Curvenote you can of course build include a link to launch on [mybinder.org](http://mybinder.org), but the full Jupyter interface can often be intimidating for people not used to working in Jupyter. What we want is the reading experience we have in curvenote, backed by compute.

We took a big step there this week, by integrating the open-source `thebe-core` project (on [github](https://github.com/executablebooks/thebe-core)) with the [JupyterLite](https://jupyterlite.readthedocs.io/en/latest/) project allowing Python based notebooks to be executed in-browser, without a connection to a Jupyter server. This is leveraging some of the cutting edge changes from the Project Juptyer community and we’re excited to be able to build that into Curvenote sites soon.

```{figure} images/GTGiJ4YqK38DEbx5hX9m-maGNaoHE046JhvVT8T1H-v1.gif
:name: eT9LFddpGw
:align: center
:width: 100%

`thebe-core` demo showing an `ipywidgets` plot executing python and receiving updated plots from `ipympl` all running in the browser.
```
