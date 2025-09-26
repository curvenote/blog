---
title: How to export to PDF & LaTeX using Curvenote
description: 'Writing up research for submission to a particular conference, journal, or preprint service is a major task. Exporting to a PDF should be easy!'
date: 2021-10-12
authors:
  - steve
thumbnail: thumbnails/how-to-export-to-pdf-latex-using-curvenote.png
tags:
  - tutorial
  - latex
  - editor
---

# How to export to PDF & LaTeX using Curvenote

Writing up research for submission to a particular conference, journal, or preprint service is a major task. Researchers need to prepare their hypothesis, methods, data, results, and conclusions to best represent their research, its outcome, and impacts. On top of this, they need to deal with the formatting and layout requirements of the organization where they are publishing that work. The task of formatting and layout is not a core part of research work yet it can be a major effort and time sink because of factors like strict requirements, uncooperative tools, or additional learning curves — like having to learn $\LaTeX$ while _writing in the context of a specific template_.

Formatting and finalizing a publication should be easy and [Curvenote](https://curvenote.com/why) aims to be a writing environment where researchers can move from their day-to-day notes, notebooks, and reports into their manuscripts with a minimum of rework. Curvenote lets you [write a manuscript](https://curvenote.com/for/writing), share it and gather feedback and then export it to multiple different formats. From conference abstract to a preprint through to a journal article, Curvenote aims to let you export your work to the formats you need as your research evolves.

## Open source LaTeX templates

$\LaTeX$, PDF, and Microsoft Word documents represent the predominant formats for the submission of academic work. Curvenote allows you to export to $\LaTeX$ and PDF based on a specific $\LaTeX$ template (we are [working on Microsoft Word](https://twitter.com/stevejpurves/status/1442568085156728841) currently!). We started with $\LaTeX$ and PDF, as typically journal articles, preprint services, and universities provide templates to ensure that submissions are correctly laid out and meet their requirements.

Still, working with a template, especially larger templates with many features can be onerous. At Curvenote we’ve done two things:

1. Our export engine is based on [a templating system](https://github.com/curvenote/curvenote-template) that allows us to load various templates and provide a user interface to configure them. We’ll cover this a more detail in the rest of this post.
2. To be able to accept and integrate a large number of templates, we have created an [open template repository](https://github.com/curvenote/templates) where template specifics and our modifications can be easily read and where we can accept both requests and contributions from others.

```{figure} images/DOHMeg040aVXqR51yjBy-I2hAANCRy3zsvxrQ25xY-v1.png
:name: a1242e5a
```

If you are writing or planning to start a paper, report, or thesis and want to do your writing in Curvenote — you can [open an issue](https://github.com/curvenote/templates/issues) or [pull request](https://github.com/curvenote/templates/pulls) on this repo and we will make sure your template gets integrated.

## Export to PDF or $\LaTeX$

Once templates are tested and accepted in [the repository,](https://github.com/curvenote/templates) they are [available for export](https://curvenote.com/templates) and appear directly in the Curvenote when you click “Export As” on an article.

```{figure} images/DOHMeg040aVXqR51yjBy-yWfLepiDcUHnK8Lor18w-v4.png
:name: a08cc284

Export from Curvenote - the first step is to select the target LaTeX or PDF and choose the template to use for the layout
```

Both PDF and $\LaTeX$ options use the same template, but the latter will create a `.zip` file containing a $\LaTeX$ _“project”_ — a folder containing a `main.tex` and `main.bib` file as well as definition files and image assets. This enables you to customize and build locally, should you want to.

But that is not our goal!

We want to be able to export submission-ready PDF documents directly from Curvenote — to avoid building $\LaTeX$ locally at all. We’ve made this possible through _Template Options_ and _Tagged Blocks_. Setup on a per template basis, these allow you to provide additional information and any specific content required via the user interface during export.

## Template Options

Once you’ve selected a template, the next screen you are shown is a dynamic form showing the options for that template. When integrating the template we look at the author guidelines, nominating required and optional items appropriately — so you’ll need to meet the required options before you can export.

Here’s an example of options for the [AGU 2019 template](https://curvenote.com/templates/agu2019) with two required and one optional field.

```{figure} images/DOHMeg040aVXqR51yjBy-yt0BZL4jK2SjXDxV3Msz-v1.mp4
:name: a09c5dd6
```

We are able to proceed once we’ve entered the required information. This template has relatively few options — other templates have more and/or conditional options that only appear based on the value of certain fields, a typical case being additional options for different journals based on the _Journal Name_ you select.

## Tagged Blocks

Beyond template options, that are appropriate for setting metadata, additional author information, or switching on/off certain template features and styles. Templates also often require specific content from the user that is handled differently in the typesetting process — a well-known example would be the _Abstract_ for a paper.

```{margin}
Since Curvenote also gives you an easy to publish an interactive online version of your paper, that you can share and link back to as well as generating the PDF for submission, it makes total sense to keep content like the abstract within the document.

```

In an abstract, we are dealing with more than a line of text or a link. We usually have a paragraph or two of content that may contain maths and symbols but that is also fundamentally part of the document rather than metadata.

We’ve achieved this through the use of the _tags_ that are available on any block in Curvenote — let’s see how this works. After entering the template options, you move onto the following screen.

```{figure} images/DOHMeg040aVXqR51yjBy-OxV1wcJfFoid2rbjCNxn-v1.png
:name: a81a74a6
```

This is essentially a summary of the special content requirements of this template along with flags on whether they have been met or not. When integrating templates, we include as much information from the original author guidelines as possible, as show that information here.

In the [AGU 2019 template](https://curvenote.com/templates/agu2019) example, we can set content for an _Abstract_, _Plain Language Summary,_ and _Acknowledgments_. Furthermore, an _Abstract_ is required and in this case, we’ve not provided one.

To fix this we head back to our manuscript, select the block containing our abstract, and set the tag appropriately.

```{figure} images/DOHMeg040aVXqR51yjBy-YKoYsveI091oLgtjF7EO-v1.mp4
:name: a7b08768
```

Tags can be set to any string we like, in the UI we suggest some of the common tags you’ll find in templates, but any tag you need can be added. (Note that the word Abstract appears as a decoration on the block, that’s a special case as we are still deciding how to best show the block tags while keeping the page uncluttered).

Now when we head back to export, we can see we’ve provided our abstract and can proceed.

```{figure} images/DOHMeg040aVXqR51yjBy-HVG2axlvRwbEAfk4gAgl-v1.png
:name: ad010150
```

We can of course provide information in any of the optional fields too, and this will be added appropriately, by the template.

## Write once, export to any format

We’ve built our export process to take away the pain from the submission process. We want Curvenote to help its users focus on science and writing while taking care of the formatting and packaging concerns of your paper, report, or thesis.

This is something we’ll be perfecting over time, but by making our templates configurable like this, we are now able to get people to submission-ready PDFs without having to dive into a $\LaTeX$ build — which we think is a solid step forward.

The philosophy behind Curvenote is to support your day-to-day work in one place and make it easy to reuse your writing, notebooks, figures, and plots across documents, presentations, and papers. This saves you time and effort and keeps you focussed on your research.

When it comes to writing your paper, you can easily move one manuscript forward and export that one piece of content to multiple formats for your internal group review, preprint service submission, and ultimately conference or journal submission. At the same time, you can easily share supporting work online [securely with collaborators](https://curvenote.com/docs/overview/collaboration) or publicly and attach it to your [Curvenote profile](https://curvenote.com/docs/overview/profile).

### Want to change your writing experience?

[Try out Curvenote](https://curvenote.com/signup) and tell us about which conference or journal paper that you are aiming for — we’ll add the template for you. If you are writing your thesis we can also help, we can get you started now and we will commit to adding your university thesis template in time for your submission. [Book a demo with us to find out more.](https://curvenote.com/demo)
