---
title: Embracing Reuse in Scientific Communication
subtitle: Introducing MyST based tools for easily reusing scientific content
date: 2024-05-11
thumbnail: thumbnails/open-science-reuse.png
description: The ability to build upon existing knowledge is fundamental to the process of science. Yet, despite the rapid advancement of science, the methods for citing and referencing content have remained surprisingly static. Curvenote is introducing new tools in MyST Markdown to create rich references and embed open-access content.
authors:
  - name: Rowan Cockett
    orcid: 0000-0002-7859-8394
    corresponding: true
    email: rowan@curvenote.com
    affiliation:
      - Curvenote Inc.
      - Executable Books
tags:
  - article
  - MyST
  - open-source
keywords:
  - MyST Markdown
  - Structured Data
  - Reuse
  - FAIR data principles
abstract: |
  The ability to build upon existing knowledge is fundamental to the process of science. Yet, despite the rapid advancement of science, the methods for citing and referencing content have remained surprisingly static. Today, we're on the brink of transforming how we interact with scientific literature and educational content. The Curvenote team has been working in the <xref:docs#term-myst-markdown> ecosystem to simplify the ways to reference and embed figures directly into publications. We are starting this process by integrating a [simple markdown syntax for hover-references](xref:mystmd#tbl:syntax-xref), which aims to not only streamline referencing academic citations but also enhance the readability and interactive capacity of scholarly articles. This blog post explores the importance of scientific reuse, as the driving FAIR principle, and introduces new tools to reshape how knowledge is reused, shared, and improved in the scientific community.
---

Scientific publishing today uses outdated technology for communicating and sharing knowledge, relying on PDFs, static figures, and text-only references that are a poor representation of the complexity of the science and data. This gap slows the speed of research dissemination, reuse, and uptake and completely impedes “networked knowledge” and importing/reusing work in a structured way. For example, “importing” visualizations, equations or any other deeply-linked content – including provenance information – into new research articles, documentation or educational sites is completely impossible in today’s research ecosystem. As a metaphor, compare open-access science to open-source programming: it would be a world without package managers to share, version, reuse and rapidly build upon other peoples work in a structured way. The open-source ecosystem would not exist without this infrastructure.

> Effective and practical reuse of content that maintains attribution, provenance, and links to software and data is fundamental infrastructure that does not exist at scale in science.

Open infrastructure for communicating science also has to be easy to integrate into existing tools, support computational, interactive components, be archivable for the long term, and be adopted by our existing sociotechnical system of societies, journals, and institutions. There are two interconnected problems that need to be solved: (1) upgrade existing scientific authoring tools, ensuring these are integrated into both scientific and data-science ecosystems; and (2) develop radically better ways to share content as individuals, small groups, preprints, and formalized, traditional journals with existing societies and institutions. The two problems are connected, in that the authoring tools should be able to deeply integrate with new publishing mediums (e.g. referencing a figure from a publication should be able to show you that figure directly as you are authoring, including all interactivity and computation).

## Interactive References

**Think how you interact with scientific references today**: when referencing a figure in a paper or book chapter, the text might say "see Figure 56 on Page 100 in Paperston & Print", to actually see what the authors were talking about you have to scroll to the bottom of the PDF, copy the reference, paste it into Google, get stuck at a paywall, log into your university VPN, download the PDF, open it in Zotero, scroll to page 100, find figure 56, and do that while you try to remember if it was worth the effort to look it up in the first place. The user experience here is terrible, and is wasting valuable time for millions of scientists.

Today Curvenote is launching a comprehensive workflow for referencing and embedding of scientific content, which we have helped to build directly into the community-based MyST Markdown tools (https://mystmd.org). This works out of the box with [Curvenote's publishing platform](xref:docs#term-curvenote-platform). In the <xref:docs#term-myst-markdown> or Curvenote's <xref:docs#term-command-line-tools> you can now include cross-references content in external projects, and when you hover over the reference you see targeted content instantly using our <xref:docs#term-deep-dive-links>. This is enabled by new the [new `xref:` syntax](xref:mystmd#tbl:syntax-xref) that many of the ExecutableBooks team has contributed to.

```{list-table} Examples of hover references to instantly access open-science content.
:header-rows: 1
:label: example-references
* - Reference
  - Why this is so cool
* - <xref:3dem7#fig-e-fields-fdem>
  - External figure from Heagy & Oldenburg, 2024. This is on Lindsey's lab group website that is hosted by Curvenote.
* - <xref:3dem7#eq-permeability-ampere-no-source>
  - External equation from that same resource, think about how you might build up an equation bank?!
* - <xref:docs#term-curvenote-platform>
  - A link to the Curvenote documentation that has a list of product terminology, an excellent way to share and curate technical information for your community, product or discipline.
* - <xref:mystmd#fig-altair-horsepower>
  - <xref:docs#term-interactive-figures> from the <xref:docs#term-myst-markdown> documentation. This cross-reference remains interactive when you cite it over in this blog, which is mind blowing 🤯.
```

> ☝️ Try hovering over one of the cross references above. If will bring you to the source of the content and show it directly in context.

:::{figure} images/xrefs.mp4
:class: framed
:label: fig:xrefs
Interact with @example-references above and you can see how cross-references to external sites work for images, equations, sections, terms, and <xref:docs#term-interactive-figures>.
:::

## Use Cases in Education

Lindsey Heagy, a scientific advisor of Curvenote, gave a practical talk on how to organize content at Scipy 2016; it is a video I re-watch every few months. Lindsey describes a metaphor of comparing open-science to open-source programming and the sorts of infrastructures and practices that are in place to enable reuse at scale. These analogies are illustrative for science to radically improve reuse of content in education and research communication; reuse is something that drives all of the FAIR data principles. The ability to reuse content is directly tied to the effort that is put into improving a resource; for example, if a resource is a one off that isn't reused the value of improving, structuring and organizing content is often limited. With reuse at a core design goal, we can enable _iteration in place_, which promotes investing in structure, rigour, metadata, and reproducibility.

:::{iframe} https://www.youtube-nocookie.com/embed/IW2LDsevvDk
:label: heagy-scipy-2016
:width: 100%

Lindsey and I have been exploring and working on these ideas on how to refactor and explore knowledge. Lindsey Heagy gave a fantastic SciPy talk in 2016 that laid out general ideas on how to improve the reuse of knowledge by making an analogy to open-source software. It is exciting that this year [Curvenote is sponsoring the SciPy Proceedings](./news/curvenote-sponsors-scipy-proceedings-2024.md) and bringing those ideas to the whole scientific python community.
:::

## Embedding Open Content

Our goal at Curvenote, and why we are investing heavily in the <xref:docs#term-myst-markdown> ecosystem, is to make referencing and reusing content **as easy as possible**, while maintaining links to licensing, attribution and other important metadata to support an open-science commons of information. The _legal possibility_ of reuse from open-access licensing will start to challenge social norms and concepts of plagiarism, authorship, and contribution; this is especially true when you can start to **embed** external content from other authors in your documents. This is already a common pattern in the web (e.g embed a video or a tweet), but is less acceptable to reuse someones introductory paragraph to a discipline (even with attribution!). Embedding content is a new feature in [MyST Markdown](https://mystmd.org/guide/embed#embed-from-external-myst-projects), and as of this week it works across any MyST Markdown project. Embedding enables **remixing** at a much lower cost, and in some contexts, especially in educational tutorials lowering the barrier to entry for a new community to get started in teaching a concept is a massive win.

We see a lot of potential in educational content, where you can embed glossary terms, equations and content across community resources. Here is an example of embedding from Curvenote's product glossary, all of the hover-references and links continue to work!

:::{prf:example} Curvenote's Product Glossary

Example of pulling a term out of Curvenote's product glossary, note that all of the cross-references are still actively linked to the original resource. This is enabled by the syntax `![](xref:docs#term-curvenote-platform)` in MyST.

![](xref:docs#term-curvenote-platform)
:::

There is still a lot of work to understand the best patterns around the user experience, and ensuring that the embedded content is distinct and shows the licensing and attribution if that is the goal of the author. These are exciting questions that these features enable us to ask and unlock the potential of working with and reusing structured data.

To learn more about MyST Markdown, see the documentation on [references](https://mystmd.org/guide/external-references#myst-xref) and [embedding](https://mystmd.org/guide/embed#embed-from-external-myst-projects). To start a journal, preprint server, or lab-group website [contact Curvenote for a demo](https://curvenote.com/demo).
