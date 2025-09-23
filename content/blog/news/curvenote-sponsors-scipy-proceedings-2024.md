---
title: Curvenote Sponsors SciPy 2024 and supports the SciPy Proceedings
description: Curvenote is hosting the SciPy proceedings and is a Gold-level sponsor of the SciPy 2024 conference. The new proceedings, hosted by Curvenote, are web-first and interactive. Curvenote is supporting the 2024 proceedings from automated submission, through to hosting and metadata preparation including submission to scholarly infrastructure providers like CrossRef and ORCID.
date: 2024-04-09
thumbnail: ./images/scipy-2024.png
tags: ['press', 'sponsorship', 'journal']
---

Curvenote is excited to announce its role as both the host for the SciPy proceedings and a Gold-level sponsor of the SciPy 2024 conference. Curvenote's partnership with NumFocus to support the SciPy Proceedings underscores Curvenote's commitment to fostering innovation and sharing knowledge within the scientific community. Rowan Cockett, CEO & Co-founder of Curvenote, expressed excitement about the collaboration: "We are thrilled to bring our interactive features, scientific publishing platform and web-first design to the forefront of scientific communication, facilitating deeper engagement with the research presented at SciPy." Jim Weiss, Director of Events and Resources at NumFocus, expressed his enthusiasm for Curvenote's contributions: "Curvenote's commitment to enhancing the accessibility and interactivity of the SciPy Proceedings aligns perfectly with our mission to foster open scientific communication. We are excited to see how these advancements will enrich the SciPy 2024 Proceedings experience for both authors and reviewers."

Curvenote is supporting the 2024 proceedings from automated submission (building and checking via github integrations), through to hosting and metadata preparation including submission to scholarly infrastructure providers like CrossRef and ORCID. Curvenote is also back-porting previous year’s articles and making them available in a web-native reading environment. Chris Calloway, Proceedings Co-Chair for SciPy, also highlighted the significance of this partnership: "The adoption of Curvenote submission system and MyST Markdown represents a major step forward in our efforts to facilitate a more efficient, collaborative, and engaging publication process. This collaboration not only elevates the quality of our proceedings but also opens up new possibilities for interactive, computational and web-first scientific communication. We're grateful for Curvenote's support and expertise as we work together to showcase the groundbreaking research presented at SciPy."

You can explore the 2023 SciPy Proceedings at:

https://proceedings.scipy.org

Previous years will be ported over to the new reading experience in the coming months.

:::{figure} ./images/scipy-2023-tile.png
:label: fig:scipy-2023-examples
Conference papers from SciPy 2023 that have been converted and hosted by Curvenote. All articles have been translated to MyST and presented as HTML documents in addition to the original PDFs.
:::

## Adopting MyST Markdown

To support these new features, the SciPy Proceedings chairs have adopted MyST Markdown as a submission format, representing a significant step forward for supporting interactive web-first articles for the conference. MyST Markdown ([mystmd.org](https://mystmd.org)), or Markedly Structured Text, is a markdown flavor specifically designed to meet the complex needs of scientific publishing. It combines the simplicity of markdown with the comprehensive features required for detailed scientific documentation and publishing. The MyST format is at the heart of our initiative to prioritize web-first reading experiences as well as move to beautiful new PDF templates that showcase research in its best light. To read more about the publishing experience, see the [proceedings instructions for authors](https://github.com/scipy-conference/scipy_proceedings?tab=readme-ov-file#instructions-for-authors).

:::{important} Webinar for Authors
Curvenote will be hosting a recorded webinar on **May 03, 2024 at 12 PM (CDT)** on the new authoring experience and how to get started as a proceedings author.

[Sign up for the Webinar](https://www.youtube.com/watch?v=PNnaG-wyDd4)
:::

## Innovative Features for an Enhanced Reading Experience

Curvenote's platform brings a suite of features to the SciPy proceedings designed to enhance the accessibility and interactivity of research findings. Highlights of this reading experience include:

Interactive Pop-Overs and Deep-Dive Links
: Any figure, table, or equation can be referenced in MyST and in addition to automated numbering the cross-references have hover-references. This design feature is important for two reasons: (1) it improves reading comprehension [@doi:10.1145/3411764.3445648]; and (2) it focuses on structured data which can be accessible between papers, creating an open-ecosystem of machine-actionable, reusable content.

:::{figure} ./images/scipy-pyqt.gif
:label: fig:deep-dive
:class: framed
Dive deeper into sections, figures, individual paragraphs or even abbreviations. Example is from [PyQtGraph - High Performance Visualization for All Platforms](https://scipy.curve.space/articles/gerudo-f2bc6f59-00e). These practices help with reading comprehension by around 26% by providing information when the reader needs it [@doi:10.1145/3411764.3445648].
:::

Structured Data and Enhanced Links
: Enhanced-links are being used throughout the SciPy proceedings for links to Wikipedia, GitHub issues or code, and other scientific databases to augment writing. For example, Wikipedia links come with previews, for example, `<wiki:gravitational_waves>` becomes <wiki:gravitational_waves>. GitHub links to pull-requests also give hover information [@fig:interactive-pr].

:::{figure} ./images/scipy-pr.gif
:label: fig:interactive-pr
:class: framed
Interactive pull-requests from GitHub in [Pandera: Going Beyond Pandas Data Validation](https://proceedings.scipy.org/articles/gerudo-f2bc6f59-010#retrospective).
:::

Web-First Design
: The SciPy Proceedings are accessible on any device, enabling researchers to access information anytime, anywhere. Actions like copying code or dark-mode are directly baked into the platform.

:::{figure} ./images/scipy-dark-mode.png
:label: fig:scipy-dark-mode
:class: framed
Equations and code in dark-mode from [EEG-to-fMRI Neuroimaging Cross Modal Synthesis in Python](https://proceedings.scipy.org/articles/gerudo-f2bc6f59-007).
:::

Looking ahead, these features lay the groundwork for integrating Jupyter Notebooks directly into articles, promising an unprecedented level of interactivity in future publications. Curvenote will be helping to support NumFocus and the SciPy conference over the coming years to accept Computational Research Articles that can integrate interactive figures and live computation.

## Submission System & Supporting the Editorial Team

Curvenote has worked with the SciPy 2024 Proceedings Co-Chairs to integrate the Curvenote submission platform with GitHub to support a familiar workflow to reviewing code. The open-source integration is inspired by the Journal of Open Source Software (JOSS), and works on top of GitHub actions. By leveraging the HTML build process, authors get feedback on their paper in a few seconds and the feedback shows a build page and structural checks on the metadata of the paper. The upgraded workflows and infrastructure is designed to make the process seamless for authors and reviewers alike.

:::{figure} ./images/scipy-checks.gif
:label: fig:scipy-checks
:class: framed
Curvenote provides structural checks to improve metadata and enforce the submission standards for the journal. For example, checking links, DOIs, and metadata for authors and affiliations. These can be run on the command line or in the GitHub action.
:::

To support the editorial team and conference organizers, Curvenote offers an administration portal that provides a comprehensive overview of all submissions. This dashboard allows for efficient management of the proceedings, from initial submission to final publication. The portal also supports command-line tools and GitHub actions, offering flexibility for journal administration.

:::{figure} ./images/scipy-dashboard.png
:label: fig:scipy-dashboard
:class: framed
Curvenote provides an administration portal for the site to see all submissions and maintain the proceedings.
The journal administration can also be operated from the command-line tools or GitHub actions.
:::

## A Commitment to Open Source and Community-Driven Innovation

As a core contributor to MyST Markdown ([mystmd.org](https://mystmd.org)) and command-line tools, used throughout the writing and submission process, Curvenote demonstrates its dedication to open-source, community-driven projects. In preparation for SciPy, significant investments have been made to refine the GitHub-based submission workflow, inspired by the Journal of Open Source Software (JOSS), making it easier for SciPy to transition and embrace these next-generation practices.

Steve Purves, CTO & Co-founder, highlighted the technical advancements: "Our work with the MyST Markdown language and the GitHub-based submission workflow represents our commitment to enhancing the scientific publishing process in the open. By investing in these areas, we are not only supporting SciPy but also paving the way for more interactive and accessible research publications both in independent journals and mainstream peer-reviewed publications."

## About Curvenote

Curvenote is a leading platform designed to enhance the way scientific knowledge is shared and discovered. With a focus on interactivity, accessibility, and community-driven innovation, Curvenote is dedicated to advancing the frontiers of scientific communication.

For more information about Curvenote or to request a demo, please reach out to:
[info@curvenote.com](mailto:info@curvenote.com)
