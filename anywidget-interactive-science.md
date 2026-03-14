---
title: Bringing Interactive Widgets to Scientific Publishing
description: The new anywidget directive in Curvenote and MyST Markdown is the culmination of seven years of work toward interactive, explorable scientific content — and it's just getting started.
date: 2026-03-13
authors:
  - rowan
  - steve
tags:
  - open-science
  - interactive
  - anywidget
thumbnail: thumbnails/anywidget-interactive-science.png
---

We just shipped something we've been working toward for a long time. Authors using Curvenote, [MyST Markdown](https://mystmd.org), and [Jupyter Book](https://jupyterbook.org) can now embed interactive JavaScript widgets directly in their content using the new `{anywidget}` directive. Point it at an ESM module, and the widget runs in the page — no server, no Jupyter kernel required.

It's a small directive. But for us, it represents about ten years and five major iterations of trying to answer the same question: _what if scientific content could be interactive, explorable, and alive?_

## A Long Road to a Simple Directive

Back in 2014, Rowan was writing about [explorable explanations](https://row1.ca/explorables) and experimenting with [reactive documents](https://row1.ca/ink-2019) — linking computation, visualization, and text together in the browser. The inspiration came from [Bret Victor's](https://worrydream.com/) work on dynamic media, from [Idyll](https://idyll-lang.org/docs), from [Observable's composable notebooks](https://observablehq.com/), and from the [explorable explanations](https://explorabl.es) community that has been pushing these ideas for years.

:::{figure} ./images/probability-of-a-spill.gif
Linked text and visualization Rowan created in 2014 to reason about [probability of oil spills](https://row1.ca/probability-of-a-spill) using government data.
:::

Scientists create incredible computational work — interactive visualizations, parameterized models, rich data explorations — and then flatten it all into screenshots for a PDF. As Rowan wrote [at the time](https://row1.ca/on-my-website-2018#do-you-really-care?): _ideas are rarely linear_, and a static rectangle on a page is an [inhumane representation of thought](https://dynamicland.org/2014/The_Humane_Representation_of_Thought). Readers should be able to expand, drill down, interact, and explore.

Curvenote's [earliest experiments with web components](https://old.curvenote.dev/components) tried to tackle this head on. We built reactive document primitives, tinkered with binding frameworks, built them into our WYSIWYG editor, and explored how to connect sliders and parameters to live visualizations. Some of that work made it back into [interactive probability explorations](https://row1.ca/probability-of-a-spill) using government data; some of it fed into the GeoSci educational resources where figures were generated dynamically in Python.

:::{figure} ./images/components.mp4
Early iterations of [component widgets](https://old.curvenote.dev/components), written in HTML, to build up reactive documents.
:::

Each iteration taught us something. The first attempts were too coupled to specific frameworks. The next wave leaned on Jupyter kernels, which was powerful but introduced infrastructure complexity. What we needed was something portable, simple, and standards-based — something that could work _anywhere_ content lives.

::::{tip .dropdown} Jupyter Backed Interactive Widgets in 2021!
:::{figure} ./images/demo-fourier.gif
Interactive widgets backed by a Jupyter kernel in 2021[^not-working].
:::
::::

[^not-working]: The Jupyter integration of that demo unfortunately [no longer works](https://curvenote.github.io/demo-fourier/), we turned the BinderHub off due to abuse.

## Enter AnyWidget

That's exactly what the [anywidget](https://anywidget.dev) standard provides. You can read about it on the Scipy Proceedings [@10.25080/NRPV2311] — which also happens to be published with Curvenote! Born alongside the Jupyter community, `anywidget` gives you a clean contract — `render({ model, el })` — using modern JavaScript (ESM modules). The interface is simpler than ipywidgets, and is more portable and integrated into more tools. Write a widget once, and it works across notebooks, articles, and books — and scientific articles.

From the MyST and Jupyter Book side, we've focused on supporting the `render()` interface so that authors can bring JavaScript interactivity into their publications without needing Jupyter infrastructure at all. The story of getting this upstream started at SciPy 2024, where Trevor Mantz and Steve Purves hacked through a proof of concept during the sprints. Curvenote then built working support as an [extension](https://github.com/curvenote/curvenote/blob/60dfc44f1496d3d63de165bef5ae5498b63f136e/packages/any-widget/README.md) while collaborating with researchers on domain-specific visualizations. Over the last month Curvenote has upstreamed the implementation with the help of the MyST community to create the directive that [just shipped](https://jupyterbook.org/blog/posts/2026/the-myst-anywidget) in `mystmd` and Jupyter Book.

For authors, the usage is straightforward — point the directive at an ESM module:

````text
```{anywidget} ./my-widget.mjs
```
````

The module can be a URL to a shared, hosted widget or a local file bundled with your project. You can optionally pass CSS and initial props. At build time, Curvenote packages everything with your site and you get awesomeness.

:::{figure} ./images/microscopy-zoom.mp4
:::

## What This Looks Like in Practice

The part that excites us most is what researchers are already building with this. A few examples from the past few weeks give a sense of the range.

**Microscopy data exploration.** Using a [vizarr widget](https://cn-testing.curve.space/articles/cn-testing-idr-images), researchers can pan and zoom through massive OME-Zarr microscopy datasets directly in an article — the same kind of GPU-accelerated, multiscale image viewing you'd normally need specialized desktop software for, now running client-side in the browser. No server, no downloads, just point at a cloud-hosted Zarr store and explore.

**DNA sequence visualization.** The [SeqViz widget](https://opensci.dev/articles/seqviz-plugin) embeds interactive circular and linear sequence maps with annotations, supporting GenBank, FASTA, and accession IDs. A genomics paper can now include a live, navigable view of the sequences it discusses rather than a static figure panel.

**Interactive scientific computing.** The [SciPy 2024 proceedings](https://proceedings.scipy.org/articles/TCFJ5130#results) include live, interactive results — a glimpse of what conference proceedings could look like when computation is a first-class part of the publication.

:::{figure} ./images/seqviz-plugin.mp4
:::

These aren't demos. They're real research outputs, shared in context, connected to the narrative they support. They are being published in new scientific journals like [Microscopy Society of America](https://www.elementalmicroscopy.org), the b.next [DevNotes community](https://devnotes.nucleus.engineering) on synthetic biology and in lab group websites like [Curious Beams](https://cbl.curve.space).

## Why This Matters for Education

This is where the impact compounds. One of the things we've seen consistently over the years is that the boundary between research communication and education is blurry — and it _should_ be. A well-explained research paper is a teaching tool. A good lecture draws on the latest findings. **The feedback loop between learning and discovery should be tight.**

Interactive widgets collapse the distance between _reading about_ something and _experiencing_ it. A student doesn't just see a plot of [how an electron beam focuses](https://cbl.curve.space/research#physical-computational-ideas) — they can adjust parameters and watch it change. A probability model isn't an equation on a page — it's something you can push and pull to build intuition. A microscopy dataset isn't a panel of cropped screenshots labeled _A_ through _F_ — it's something you can zoom into, just like Google Maps.

For educators building courses with Curvenote, `anywidget` means you can create these experiences without standing up server infrastructure. A lecturer in control of their own content stack can go from static textbook to interactive, computational learning environment — and share it with students as a URL.

This has been the promise of explorable explanations for over a decade now. What's different today is that the tools are finally simple enough, and the standards are portable enough, that it's practical to do this at the scale of real courses and real publications — especially with the tailwinds of an AI agent at your back.

## What's Next

Widget support in Curvenote is at our fifth iteration, and there's so much more to build. The `model` side of the anywidget interface — which enables communication _between_ widgets on a page — is next on our roadmap. That's what unlocks truly reactive documents: a slider in one widget updating a chart in another, parameters flowing through a page the way they flow through a notebook.

There's deep thinking in the widget and binding frameworks that Idyll, Observable, and the anywidget community have developed over the years, and we're drawing on all of it as we design the model linking and event passing. We think we have the pieces now — inline components, parameters, blocks, and anywidgets — to start **scaling** the kind of reactive scientific documents we've been building since 2014.

If you want to try it, the [example-widgets repo](https://github.com/jupyter-book/example-js-anywidget) has small demos to get started, and the [opensci.dev blog](https://opensci.dev) has live examples using scientific datasets. Come show us what you build on the [Curvenote Discord](https://discord.curvenote.dev) — we can't wait to see it.

## Acknowledgements

Special thanks to Trevor Manz for the AnyWidget framework and conversations over the years on interactivity and composability. Thanks also to the MyST Team for accepting the upstream contribution from Curvenote into the MyST community and improving it along the way — especially adding documentation and generalizing the local experience.
