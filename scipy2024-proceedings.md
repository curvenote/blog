---
title: Curvenote at SciPy2024
subtitle: Pushing on the boundaries of science communication with the SciPy Proceedings and community-driven, open-source tools like MyST Markdown
date: 2024-07-16
thumbnail: thumbnails/scipy2024-proceedings.png
description: Curvenote attended and sponsored SciPy2024, hosting the proceedings, presenting on MyST Markdown and sprinting towards new integrations in the wider scientific Python community.
authors:
  - rowan
    - Project Jupyter
tags:
  - conference
  - proceedings
---

Last week, Curvenote had the incredible opportunity to participate in SciPy2024, not just as attendees but as key contributors to the event. Curvenote proudly sponsored the [Scientific Python Proceedings](https://proceedings.scipy.org), which encourages any presenter at the SciPy conference to write an article on their contribution, for example, a new scientific python package, community standard, case-study or algorithmic approach. Curvenote is hosting the proceedings and sharing our expertise in scientific publishing and computational articles to elevate the proceedings. At the event we showcased Curvenote, met with authors, and further developed MyST Markdown during the week as well as at the conference sprints on the weekend.

:::{figure} images/scipy2024-proceedings-sponsor.png
:label: scipy2024-proceedings-sponsor
Curvenote sponsored SciPy2024 and worked throughout the week to showcase the SciPy Proceedings, which uses the next-generation writing and publishing tools that Curvenote develops.
:::

## Elevating the SciPy Proceedings

The highlight of our involvement was our role in supporting the [SciPy Proceedings](https://proceedings.scipy.org). This year, we implemented significant enhancements to the entire process. From automated submission systems with GitHub integrations to a new, user-friendly journal website, we worked hard to make this year's proceedings seamless and interactive. You can read more about these improvements in our announcement of [Curvenote's partnership with NumFocus](./news/curvenote-sponsors-scipy-proceedings-2024.md).

:::{figure} images/scipy2024-proceedings-talk-rowan.png
:label: scipy2024-proceedings-team-rowan
Rowan Cockett ([Curvenote](https://curvenote.com)), giving an overview of the SciPy Proceedings and Curvenote's sponsorship before the keynote.
:::

:::{card} 📖 Read Scipy Proceedings from 2023
:link: https://proceedings.scipy.org/articles/gerudo-f2bc6f59-039
The 2023 proceedings features 19 diverse articles on topics such as neuroimaging, Bayesian statistics, array standards, molecular simulation analysis, advancements in GPU acceleration, improved matrix multiplication algorithms, and new tools for biomolecular crystallography and animal acoustic communication research.
:::

:::{card} 📖 Read Scipy Proceedings from 2022
:link: https://proceedings.scipy.org/articles/majora-212e5952-046
The 2022 proceedings covered a wide range of topics, including updates on the Advanced Scientific Data Format, advancements in semantic labeling with the Semi-Supervised Semantic Annotator, visualization solutions with Galyleo, GPU-accelerated searches for extraterrestrial intelligence, and the development of robust APIs for materials manipulation and robotics simulations.
:::

In addition to supporting the 2024 proceedings, Curvenote was involved in back-porting articles from the previous years, ensuring they are available in a web-native reading environment. This effort not only preserves past research but also elevates the accessibility and usability of the proceedings.

:::{figure} images/scipy-overview.mp4
:label: scipy-overview
:class: framed

The Scientific Python Proceedings, hosted by Curvenote. There are two years of full-text, web-first articles that have been translated as well as abstracts going back to 2010. The proceedings are at <https://proceedings.scipy.org>.
:::

## Improved UX Design

As a part of the SciPy Proceedings redesign, we wanted to explore a user-friendly approach for skimming and learning about new research presented at scientific conferences. Our user-experience researcher, Mike Morrison, put together a video that shows off the design of the SciPy Proceedings and how it sets a new standard in learning experience for attendees compared to the traditional 'PDF book of abstracts' and 'pay-walled online abstracts' approaches that conferences used until now.

:::{iframe} https://www.youtube-nocookie.com/embed/CtqjD1X_5QQ?si=tIldxSvwF3PQLt-K
:width: 100%
:label: scipy2024-design
The open-access SciPy proceedings offer interactive, mobile-friendly features to enhance the scientific reading experience.
:::

## Supporting the Editorial Team

Over the last six months Curvenote has collaborated closely with the SciPy 2024 Proceedings Committee, who become the Editorial Team each year, to design the submission experience and review process, as well as ensure that the entire proceedings migration went smoothly.

:::{figure} images/scipy2024-proceedings-team.png
:label: scipy2024-proceedings-team
The SciPy 2024 proceedings team. From left to right, Chris Calloway, Meghann Agarwal, Amey Ambade, Hongsup Shin, Rowan Cockett, Sanhita Joshi; Charles Lindsey was remote.
:::

The process uses Curvenote's GitHub-based submission workflow ([open source on GitHub](https://github.com/curvenote/actions)) and includes structural checks to improve metadata and enforce submission standards ([read more](https://curvenote.com/news/curvenote-sponsors-scipy-proceedings-2024#submission-system-supporting-the-editorial-team)). We also provided an administration portal that offers a comprehensive overview of all submissions, making the process efficient and manageable ([read more](https://curvenote.com/news/curvenote-sponsors-scipy-proceedings-2024#fig-scipy-dashboard)).

:::{figure} images/scipy2024-proceedings-talk.png
:label: scipy2024-proceedings-talk
The SciPy 2024 proceedings team giving a presentation on the new Curvenote integrations, with structural checks and instant previews.
:::

## MyST Markdown is Now Part of Jupyter

At the core of Curvenote's approach is our investment in MyST Markdown, a community-driven open-source project to support technical communication. MyST Markdown became an official Jupyter initiative on June 27, 2024. The new sub-project also includes Jupyter Book, which in the coming months will be transitioned to be built on top of the `mystmd` engine (<https://mystmd.org>). There have been over 13,000 public books created using these tools and the project is already used in approximately 13% of active Python documentation projects.

> MyST Markdown is now officially part of Project Jupyter
>
> -- See Jupyter Governance [#123](https://github.com/jupyter/enhancement-proposals/pull/123)

Curvenote has been a long term contributor to the project, including originally developing the command line interface as Curvenote's CLI before upstreaming these tools to be governed by the community. Curvenote continues to actively support the development and adoption of MyST Markdown, which was chosen as the submission format for the SciPy Proceedings. At SciPy we gave a poster presentation and lightning talk about MyST Markdown and Curvenote.

:::{figure} images/scipy2024-myst-poster.png
:label: scipy2024-myst-poster
Steve Purves ([Curvenote](https://curvenote.com)), giving a poster presentation on MyST Markdown: "Superpower your Scientific Articles". Throughout the week we helped many people showcase their content with MyST Markdown and Curvenote
:::

Jupyter has long been an advocate of reproducible open science practices, and recently [won an Open Science award](https://www.whitehouse.gov/ostp/news-updates/2024/03/21/white-house-office-of-science-technology-policy-announces-year-of-open-science-recognition-challenge-winners/) from the White House Office of Science & Technology Policy. As MyST Markdown joins project Jupyter, we expect the impact, longevity and ambition of the project to increase. MyST is designed to meet the intricate needs of scientific publishing and enhance the possibilities of communicating computational narratives. Ensuring that the project has deep roots and adoption in computational communities will be key to the continued success of the project.

:::{figure} images/scipy2024-myst-lightning.png
:label: scipy2024-myst-poster-lightning
Franklin Koch ([Curvenote](https://curvenote.com)), giving a talk on MyST Markdown and publishing interactive widgets with Curvenote.
:::

## Community Innovation

At Curvenote, we are passionate about open-source, community-driven projects in part because this way of working allows for a thriving, diverse ecosystem of ideas. The Sprints at SciPy showcase this every year: the sprints are at the end of the conference and provide an opportunity for package maintainers to meet with community members, encourage new participation, as well as experiment with cross-overs and integrations between packages in the scientific python ecosystem. As core contributors and leaders of MyST Markdown the Curvenote team was in high demand during the weekend sprints helping teams get up and running, prototyping new interfaces and markup extensions, as well as interactive integrations.

:::{figure} images/scipy2024-sprints-anywidget.png
:label: scipy2024-sprints-anywidget
Steve Purves ([Curvenote](https://curvenote.com)) and Trevor Manz ([Anywidget](https://anywidget.dev)) prototyping a new integration between MyST Markdown and Anywidget, which enables arbitrary widgets to be integrated into MyST websites in a standardized, scalable way.
:::

There were a lot of new prototypes and integrations throughout the week, including to [Anywidget](https://anywidget.dev), [PyVista](https://pyvista.org), [Sphinx Auto-Documentation](https://www.sphinx-doc.org/), and more. We supported multiple teams working towards MyST integration including [Project Pythia](https://projectpythia.org), [NumPy Tutorials](https://numpy.org/numpy-tutorials), [Resampling Stats](https://resampling-stats.github.io), and more translations of the [SciPy Proceedings](https://proceedings.scipy.org).

:::{figure} images/scipy2024-pyvista.mp4
:label: scipy2024-sprints-pyvista
Franklin Koch ([Curvenote](https://curvenote.com)) and Bane Sullivan ([PyVista](https://docs.pyvista.org)) prototyped a new integration between MyST Markdown and PyVista to allow for embedded 3D visualizations and interactive hover cross-references.
:::

Stay tuned for more updates on our ongoing efforts to enhance scientific communication and support the SciPy community, we will be writing more on the outcome of the SciPy sprints in the coming days.
