---
title: Curvenote Microsoft Word Export
description: 'Exporting to Microsoft Word is now a single click in Curvenote!'
date: 2021-10-21
authors:
  - steve
tags:
  - update
  - editor
thumbnail: thumbnails/exporting-to-docx.png
---

# Curvenote Microsoft Word Export

## Word or $\LaTeX$

Microsoft Word (`docx`) or LaTeX is a question that is debated daily in both academic circles and [#AcademicTwitter](https://twitter.com/search?q=%23AcademicTwitter). There are proponents of both schools with various arguments either way — from control and precision to ease of use and shallow learning curves.

Ongoing debate aside, both Word and LaTeX represent the vast majority of formats accepted (or required) for conferences, workshops, and journal or thesis submissions at universities and major academic and professional institutions.

But really your writing and work should be independent of these formats. You should be able to write in an editor made for technical and scientific content, that’s a pleasure to use, and be able to move your writing to any format you need to — when you need to — and that is what we are really interested in at [Curvenote](https://curvenote.com). In addition to our [editor](https://curvenote.dev/), we are building infrastructure to power that interchange, and the `docx` format is our latest export endpoint.

## Export to Word (docx)

Word’s `docx` format can support many of the features that we include in Curvenote articles - figures, tables, captions, citations, references, internal references, hyperlinks, and so on. Our objective is to give you a copy of your article with all these features enabled in the `docx` file you download.

We are almost there but there are still a couple of things to add (e.g. figure captions) and others to improve (e.g. citations). We’ve released the Word export feature today in `beta` while we make those improvements and gather feedback.

We’ve extended our export UI, smartening things up in the process, so export to `docx` is currently just a single click.

```{figure} images/DOHMeg040aVXqR51yjBy-Zn0tPMSDYdfNY4AryFaY-v3.png
:name: aa934216

Export your paper or report to MS Word’s docx format in a two clicks
```

Export as many times as you like, as you create updated versions of your manuscript. You can export to multiple formats at the same time and the process is fast and easy!

```{figure} images/DOHMeg040aVXqR51yjBy-JEVeFnWAxFYZcZshoHmb-v2.png
:name: ae9a675c

Any Curvenote article can be exported to multiple formats and once generated files are available for immediate download
```

## Open source at heart

In developing this feature, we put together a new library that translates between the `docx` format and our internal data representation via the Prosemirror editor. We’ve [released this library with an open-source license](https://github.com/curvenote/prosemirror-docx) as it has great capability to feed back into the Prosemirror community - a core technology that we of use a good deal of and want to help extend.

## Publishing or sharing online

Exporting from Curvenote means that you are generating a hard copy, which is often for submission elsewhere. However, Curvenote also allows you to publish projects, papers and reports online so others can access them via a link you share or via your profile.

In those cases, when your article is public or published, files you generate will also be available to your readers to download and consume.

Publishing online and/or sharing privately with collaborators can be a faster way to get feedback and comments on your report to paper. By commenting in Curvenote they’d be leaving feedback right alongside your writing, making it easier to integrate and iterate. And ok, if your collaborators _really_ want a Word file to read offline, or a PDF to print and read with their coffee, they can download it directly too.

```{figure} images/DOHMeg040aVXqR51yjBy-MJyOI9Q8OhkYyXMhyw53-v3.png
:name: a29403cf

Generated files are available to your readers on published or public articles
```

## Give it a try

If you would like to try out [Curvenote for writing](https://curvenote.com/for/writing), sign up for a free account. You can keep up with our feature releases and share your feedback in our [Community Slack](http://slack.curvenote.dev). We would love to hear about how you use Word in your writing projects and any templates that you need to work to or submit within!
