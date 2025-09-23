---
title: Better scientific articles — and beyond
subtitle: Why I joined Curvenote
description: 'Mike Morrison, the designer of the #betterposter movement, is joining Curvenote on a mission to improve scientific articles.'
date: 2023-04-12
tags:
  - update
  - '#betterscience'
authors:
  - name: Mike Morrison
    email: mike@curvenote.com
    orcid: 0000-0002-1324-8801
    affiliation: Curvenote
thumbnail: thumbnails/mike-morrison-joins-curvenote.png
---

```{note} Press Release
Read the press release on [Curvenote Hires Mike Morrison to Redesign Science Communication](https://curvenote.com/news/curvenote-hires-morrison-creator-of-betterposter).
```

When [my redesign of the scientific poster went viral](http://npr.org/sections/health-shots/2019/06/11/729314248/to-save-the-science-poster-researchers-want-to-kill-it-and-start-over) ([\#betterposter](https://twitter.com/search?q=%23betterposter&src=typed_query&f=top)), people asked me how we could apply the same design principles to improve scientific articles. The answer is easy to explain, but hard to implement: make articles more machine-readable than HTML _first_, and then you can wrap whatever interfaces you want on them — create a _universe_ of designs for different purposes 🎨.

Now, [joining Curvenote](/news/curvenote-hires-morrison-creator-of-betterposter) as full-time {abbr}`UX (User Experience)` lead 💼, I’m super excited that I get to help actually implement this vision, and help improve the user experience of scientific articles, peer review, and scientific publishing.

```{figure} images/s0vIbUCEymZc7EKf23vc-JRPV7djL61HMdJzAUDQw-v1.png
:name: QU9myP0P6Q
:align: center
:width: 100%
```

## Part 1: The dream

### A scientific article should adapt to your current information need

```{figure} images/s0vIbUCEymZc7EKf23vc-jFe3Vz7RBiyxWf7yW1by-v1.png
:name: C0UVlDZ3OI
:align: center
:width: 100%

And this assumes you’re stuck in a single paper.
```

New to the topic? The article should give you a deeper introduction. Working in a company? You should be able to find the ‘practical implications’ section faster. Doing a replication study? The article’s methods should be presented as a step-by-step.

### 💎 It’s not about articles — it’s about that piece of insight within an article that you actually want

Scientists don’t always {strike}`skim` read articles start-to-finish 👁️. They are often interested in a particular tiny piece of the study 💎. How did they measure X? What does the effect of X on Y look like over time?

```{figure} images/s0vIbUCEymZc7EKf23vc-trFO1GMFXSKeJY76v7Ls-v1.png
:name: nhMoTlloZt
:align: center
:width: 100%

A single article is a bundle of individual insights. Readers may just want one particular insight in the bundle.
```

The goal of scientific publishing is to get the scientist to the particular piece of information 💎 they’re looking for _in less than 400ms_ ⏱️ (called the [Doherty Threshold](https://lawsofux.com/doherty-threshold/)). Scrolling through a bunch of 40 page PDF files 📄 to find the two sentences that answer your question is usually slower than 400ms.

### 🧱 You want to extract chunks of information across articles

Science is published in a single article, but scientific insight is discovered by looking _across_ articles. If you’re trying to understand how to measure a concept, you’re real question isn’t “How did they measure X in _this_ study?” Your real question is “How did they measure X in _all_ studies?” To extract and display that information easily, applications need those individual chunks 🧱 of info marked up in a way that’s easy for machines to read.

### ♾️ A million creative ways to explore science

```{figure} images/s0vIbUCEymZc7EKf23vc-frxOO5FuEQV3bxWJSpS0-v1.png
:name: QHvz0jus6K
:align: center
:width: 100%

A network visualization of Asthma’s symptoms and risk factors
```

If you can get scientific articles published in a format where every important piece of the article is a machine-readable chunk, you can do _anything_ design-wise. Every cool way you’ve seen science displayed becomes possible to apply to _every_ article. A few examples:

- 🪄 Switch an article’s entire layout in seconds
- 🕳️🐇 Click [rabbit-hole](https://mystmd.org/guide/quickstart-myst-markdown#links-cross-references) links where you can dive into cited studies without leaving the page
- _Generate_ population-specific effect summaries
- And of course everything HTML can do: Videos, [executable code](https://mystmd.org/guide/interactive-notebooks), [interactive charts](https://twitter.com/curvenote/status/1641405182800982016), Google-ability.

> …any summary layout that would help you do your science, you can build.

_If_ we can get scientific articles into a chunked, machine-readable format.

## Part 2: Making this happen is hard, for two reasons

```{figure} images/s0vIbUCEymZc7EKf23vc-PucLJKHhUHiF5TFKECOT-v1.png
:name: g1csDDRkUG
:align: center
:width: 100%

Word and PDF files are less machine readable than HTML; we need a format for science that is MORE machine-readable.
```

Right now, with next-generation science tools like [Elicit.org](http://Elicit.org), [Iris.ai](https://iris.ai/), and [Scholarcy](https://www.scholarcy.com/), you’re seeing the best that 🤖 AI algorithms like GPT can do to extract scientific information from PDF files that aren’t designed for machines. These tools would become at least ten-zillion times more helpful if the format of scientific articles wasn’t actively fighting their efforts.

### 🤖 We need a common markup language for scientific articles

```{figure} images/s0vIbUCEymZc7EKf23vc-IkeR5Y6g2w7Nnd95Yq4b-v1.png
:name: qXahsMlZQ5
:align: center
:width: 100%

Clearly marking up the abstract paragraph in a machine-readable way makes Google Scholar Bot puke rainbows.
```

To get scientific articles converted into machine-readable chunks, we need a common markup language (more specific to science than HTML) for the robots to read. [JATS4R](https://jats4r.org/) is close to this, right now converting your Word doc to JATS4R costs them thousands of 💵, which they have to pass along in subscription fees and {abbr}`APC (Article Processing Charges)` charges.

We want you — the paper author 👨🔬 — to be able to write your articles in a machine-readable format first, because then everything after your draft (review, publishing) gets way, way more efficient and cheaper.

### 📝 We need a WYSIWYG text editor so you can write papers in machine-readable markup

```{figure} images/s0vIbUCEymZc7EKf23vc-nfLZXHz6y7ZlJQddwO3i-v1.png
:name: PTcQJUwahC
:align: center
:width: 100%

A typical WYSIWYG text editor that actually produces HTML.
```

When you use Webflow or Wordpress, you’re composing a document in HTML without code. Having the perfect markup language for scientific articles isn’t enough if nobody can use it besides publishers. We need a scientific authoring tool that feels like that Word but writes the scientific markup. And that lets you, the author, mark up things like your author affiliation so you don’t have to type them over and over again.

## Part 3: Good news — it’s done

### 🤖 Meet MyST, the open-source markup language for scientific articles

```{figure} images/s0vIbUCEymZc7EKf23vc-JodmjDa8JSYtESWq0AGe-v1.svg
:name: tLovdVwJZJ
:align: center
:width: 50%

MyST - An open-source markup language for scientific articles that’s enabling a new wave of scientific publishing innovations. See the [MyST Documentation](https://mystmd.org/guide).
```

The open-source MyST Markdown language ([see #WhatIsMyST on Twitter](https://twitter.com/search?q=%23WhatIsMyST&src=typed_query&f=top)), which Curvenote donates a lot of development time to, is easier to author in, designed for scientific articles, and (crucially) converts instantly between all the other scientific document formats (JATS4R, HTML, Word). And it has incredible features for scientists, like you can [copy-paste a DOI URL](https://twitter.com/mystmarkdown/status/1639235796145426432) and auto-import a reference.

### 📝 Meet Curvenote, the WYSIWYG text editor you can use to write machine-readable scientific articles

```{figure} images/s0vIbUCEymZc7EKf23vc-moyZuPSwrtj6ADYRLOnX-v1.png
:name: r3TVWZKjBv
:align: center
:width: 100%

Curvenote: Feels like word, exports machine-readable MyST Markdown for better scientific articles.
```

The Curvenote WYSIWYG editor lets you write in an MS-Word like interface with features just for scientists, that can be exported as open-source MyST Markdown, JATS, $\LaTeX$, PDF, Word — whatever you want. It even lets you compose scientific articles in reusable chunks.

With these two tools alone as the core, we can start creating all-new interfaces for scientific publishing.

### 👨💻 Curvenote has the team to pull this off

When I first met [the Curvenote team](https://curvenote.com/mission), my first impression was that each of them was a visionary in their own right, and exactly team I always pictured science needing to solve this problem. I’m so excited I get to join this team and take a shot at solving the hardest design problems in science.

## 🔮 Better articles are only the beginning

Since Curvenote has already built the core (a markup language and editor), we’re now focused on the million amazing innovations you can make when articles start life as machine-readable (vs PDFs). We’re already working on concepts for formless article submission systems (no more filling-out 24 author names), crazy-streamlined peer review, and links between scientific articles that are more useful even than standard web links.

But we’ll need all of your help to get the designs right, so please [{abbr}`HMU (Hit Me Up!)` on Bluesky](https://bsky.app/profile/mikemorrison.bsky.social) and let me know about all your hopes, dreams, and frustrations for scientific publishing and distribution. **My job is to make your job easier.** 😊
