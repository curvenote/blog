---
title: How to use LaTeX with MyST Markdown
description: The MyST command-line tools can now parse and render LaTeX documents, we explore some of the process behind creating this feature.
date: 2023-01-07
authors:
  - rowan
thumbnail: thumbnails/how-to-use-latex-with-myst-markdown.png
tags:
  - LaTeX
  - tutorial
  - MyST
  - editor
keywords:
  - LaTeX Parser
  - MyST Markdown
  - Structured Data
# exports:
#   - format: pdf
#     template: arxiv_two_column
#     output: exports/how-to-use-latex-with-myst-markdown.pdf
---

+++ {"part": "abstract"}

Curvenote is currently working with multiple journals who are submitting their manuscripts in $\LaTeX$, and Jupyter Notebooks and we have needed a way to convert and render the articles online as well as capture the structured data in JATS XML. Our philosophy is that the author should remain in control of the writing experience all the way through the publication process so that any changes are made in the original format(s). This means we need robust ways to parse $\LaTeX$ documents, and over the past few months we have developed this process using MyST Markdown.

The MyST Tools project, <https://mystmd.org>, includes a command line interface for creating websites, scientific articles, and parsing markdown, notebooks, JATS, and now also can parse and render $\LaTeX$ directly! 🎉

+++

## Working with $\LaTeX$ in MyST

To get started with rendering a $\LaTeX$ document using MyST, [install the CLI](https://mystmd.org/guide/installing) and navigate to a folder with your `*.tex` documents and type `myst init` and then `myst start`[^writetoc]. This will bring up a dynamic web-server that will render your article, with near real-time parsing (~300ms for one of my scientific papers), and solid error-reporting for any unknown macros or parsing errors (like unknown cross-references or math rendering issues). The experience can be seen as in {numref}`Figure %s <myuvxgVY6u>`, with the MyST website having interactive hover-cross-references, and _almost_ live-updates as you type and save your document.

[^writetoc]: Note that if you have many `*.tex` documents in the folder, try a `myst init --write-toc` to edit the files that get parsed.

```{figure} images/AVQ2dzLNloEd25Io8NbA-cb2d1LYaCOuiFg1Y8n9V-v1.mp4
:name: myuvxgVY6u
:align: center
:width: 100%

Parsing and rendering $\LaTeX$ in MyST as an interactive website.
```

## Pulling out Frontmatter

Currently our parser adds some additional logic for pulling out author, title and affiliation information and providing that in a more standardized form (i.e. [myst-frontmatter](https://mystmd.org/guide/frontmatter)). This allows us to create professional and data-rich information for the journals that Curvenote works with. For example, an example of [Crystal Orientation Mapping](https://curve.space/examples/acom) automatically pulls out the information from the $\LaTeX$ document and captures that information in machine-readable formats (JSON and JATS!).

```{figure} images/AVQ2dzLNloEd25Io8NbA-VtHkWBPkUXpq1pXvoJuN-v1.png
:name: X4pNWvKFRM
:align: center
:width: 60%

An example of a journal-template that parses rich frontmatter out of a $\LaTeX$ document.
```

## Error Messages & Partial Renderings

One of the things that makes $\LaTeX$ very hard to use are the confusing error and warning messages. For example, phrases like "badness 10000" and the extreme verbosity of the logs means key information is lost.

> Sorry, but I'm not programmed to handle this case; I'll just pretend that you didn't ask for it.
>
> - Your friendly, conversational $\LaTeX$ Compiler

One of the things that I really like about MyST is that it gives specific and actionable error messages. For example, {numref}`Figure %s <Rn9RrPJs6g>` is a rendering of an article with warnings. Some of the warnings are about using math, the warnings are created to be actionable (i.e. that have enough information about what should be improved with links to other sources), and specific — there is a line number and column number of the exact location of the issue. If you are using a tool like VSCode, you can actually click on those error messages and the editor will open to the exact location of the warning.

```{figure} images/AVQ2dzLNloEd25Io8NbA-mNyPVqog8PEHIFIJEY1j-v1.png
:name: Rn9RrPJs6g
:align: center
:width: 90%

Error messages and warnings are specific and actionable using MyST.
```

When an error is encountered, the parser does its best to recover and show a partial rendering. For example, with incorrect math, missing images or citations, these are shown with the errors in your web-browser preview. In the future we will probably hook up the full loop here so that you can jump back and forth between you input text and rendered results — even now though, I find this extremely helpful when authoring in $\LaTeX$, especially because the feedback loop to rendering is about ⚡️ **16 times faster** ⚡️ than the current renderer I am using (`xelatex`).

```{figure} images/AVQ2dzLNloEd25Io8NbA-ViVDUoJvDd0DesZkuuzF-v2.png
:name: hDEif49Ome
:align: center
:width: 90%

Partial rendering of $\LaTeX$ errors in MyST.
```

We have also put a lot of work into making sure that the most important information is available when you are looking through the CLI messages, including dimming notes or follow up information and using color to differentiate errors and warnings. These are table-stakes features in CLIs that are built today, but the upgrade from $\LaTeX$’s log messages is _very_ noticeable, and I have started finding small bugs that I never would have discovered otherwise (e.g. repeated packages or macros).

## How it Works

MyST is a stand-alone $\LaTeX$ parser and renderer. We started this process to access the frontmatter (title, abstract, authors, affiliations, emails, ORCIDs, etc.) in a $\LaTeX$ document — but the [library that we used](https://github.com/siefkenj/unified-latex) for parsing $\LaTeX$ got us much further to a full solution than we expected.

The `@unified-latex` libraries are currently used for tokenizing the `*.tex` files, including rich information about source-code positions which are used in the error messages. This token stream has some information about basic commands, but is primarily focused on the structure of the markup — arguments, brackets, nesting, whitespace. The `parse` step uses `tex-to-myst` to convert this token stream into a myst-spec abstract syntax tree (AST). This is well documented (<https://mystmd.org/spec>), and is a common format that can be used to render out to many different types of documents (e.g. JATS, Word, $\LaTeX$, or HTML). The `myst-transforms` library is used to add rich information about cross-references, and all of the error messages about math, missing citations, etc. All of the transforms are common infrastructure across the entire MyST ecosystem, and can be used independently ([see docs](https://mystmd.org/docs/myst-transforms)). Finally the document is rendered using in this case `myst-to-react`, which allows rich interactivity for websites.

```{figure} images/AVQ2dzLNloEd25Io8NbA-MfrruSV5e6TQXY2TUg5D-v1.png
:name: V0yD9Cwz7F
:align: center
:width: 100%

The process of parsing and rendering $\LaTeX$ with MyST.
```

The rendering is done on a watch process, with efficient caching of partial resources and file-system access — and from a user perspective all you have to remember is `myst start`.

## ⚡️ Speed ⚡️

The entire rendering process can run in a few hundred milliseconds from start to finish rather than around 3-10 seconds for small documents using common $\LaTeX$ renderers. The paper I was testing on during this blog post is ⚡️ **16 times faster** ⚡️ - which is significant, and there is lots of room for improvement in MyST as well!

Similar to $\LaTeX$ many of the operations are cached so when running interactively, subsequent renders can be even faster (unlike $\LaTeX$ we keep your working directory clean, with no random `.bbl`, `.aux`, and `.fls` files hanging around). The speed of rendering means instant previews and fast feedback to what you are writing. There is a lot that we can still optimize, but at the current speed this isn’t the bottleneck!

## Written entirely in JavaScript

Importantly, it is also completely written in JavaScript[^ts], which means that this $\LaTeX$ parser and renderer can run completely client-side. I think this will open up many other possibilities in the future for editing applications.

[^ts]: well, typescript actually!

## The Long Tail of $\LaTeX$

There is a very, very, very long tail of things that can be done in $\LaTeX$, and many of those libraries and conventions may not even be appropriate for a web-first presentation (e.g. page-numbers, absolute positioning of figures, etc.). The current parser works really well for scientific articles, not currently presentations or posters, and is probably missing a favorite feature of yours (it is only 4 weeks old! 🐣). We will continue to add features and fix bugs — especially for the journal submissions that we are working with. There are also some features that need to get further developed in MyST (e.g. improved support for subfigures and sub-equations).

There are some features that we won’t ever implement in Javascript (e.g. `tikz`), however, we can still support these figures through pulling out the various sections and using a PDF renderer to create a figure that can then be used in-place. This could all be done transparently, or use a web-service if client-side.

### Alternatives

There are a lot of different ways to work with $\TeX$ out there. In keeping with the standards in the scientific Python ecosystem we are looking for MIT / BSD licensed libraries (or permissive equivalents), for example, see this post [from the early days](http://nipy.org/nipy/faq/johns_bsd_pitch.html) on advocating for BSD licensing across the ecosystem that many credit with the growth of Python. We also want programs that can run entirely in a browser, as these have the potential to be used and incorporated in many different communities and workflows. Without these requirements, there are a lot of other options to look at, for example, Pandoc[^pandoc] or Quarto[^quarto]. Pandoc may soon be able to be used in the browser, but is likely going to be slower[^lua]. Another option is to look closer at the [latexml](https://math.nist.gov/~BMiller/LaTeXML/) package ([](https://doi.org/10.1007/978-3-642-22673-1_25)), which is used in the ar5iv renderings of arXiv documents and has MUCH more comprehensive support. A path to using that library may be to focus on JATS as the intermediate exchange format, and then parse that with the `jats-to-myst` library.

[^pandoc]: Written in Lua and GPL licensed
[^quarto]: GPL with copyright assignment, Lua and Typescript
[^lua]: See [this example](https://github.com/jgm/djot/discussions/54#discussioncomment-4506866) of Lua compiled to WASM versus an equivalent implementation written in Node, the rough benchmark is 3-5 times faster in the native implementation with 3x smaller bundle sizes. The interoperability with the JavaScript ecosystem is also going to be more difficult in any compiled package.

There are probably also many other libraries or approaches, let us know on social[^errors]: \
[🐘](https://hachyderm.io/@curvenote) or [🦋](https://bsky.app/profile/curvenote.com).

[^errors]: Just don't put emojis into your $\LaTeX$ documents!! 😱🙀😈

    ```text
    ...
    Missing character: There is no 🐘 ("1F418) in font t1xr!
    Missing character: There is no 🐦 ("1F426) in font t1xr!
    ./how-to-use-latex-with-myst-markdown.tex:173: You can't use `\spacefactor' in
    math mode.
    \@->\spacefactor
                    \@m {}
    ...
    ```

## Getting started with web-native $\LaTeX$

If you are looking to create a website from your $\LaTeX$ documents, or just looking to keep up with the MyST development, give the [latest version](https://mystmd.org/guide/installing) (`v0.1.5`) a try, and raise some [issues](https://github.com/executablebooks/mystjs/issues) to help us expand support!
