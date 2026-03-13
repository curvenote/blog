---
title: Curvenote on the Data Engineering Podcast
description: Rowan Cockett joined the Data Engineering Podcast to talk about reproducibility, open science, and the future of scientific communication.
date: 2026-03-13
authors:
  - rowan
tags:
  - article
  - open-science
  - podcast
  - draft
thumbnail: thumbnails/data-engineering-podcast.png
---

I recently joined the Data Engineering Podcast to talk about Curvenote, open science, and why the way we share research needs to change. The conversation covered a lot of ground — from my background in geoscience visualization to the socio-technical challenges of making science more reproducible and reusable.

```{note} Listen to the full episode
:class: dropdown
🎙️ [Listen to the full episode on the Data Engineering Podcast →](#)
```

## From Geoscience to Scientific Publishing

My path to Curvenote started in geoscience. As an undergrad studying geology, I built 3D visualization tools for my peers that ended up going viral in the community. That led to a startup, an acquisition by a data science company working in mining and civil engineering, and eventually a PhD where I experienced firsthand the mismatch between how research is _done_ and how it's _shared_. I was building interactive widgets, reproducible workflows, and rich data explorations — and then flattening it all into screenshots for a PDF.

## The Core Problem

Science has outgrown the paper. Twenty years ago, data could fit in a table on a page. Today we're dealing with terabytes of data and complex processing pipelines, but the communication layer hasn't kept up. Researchers still throw zip files on Zenodo without context, disconnect their data from their narrative, and take screenshots of interactive visualizations to paste into static documents.

What's needed is an integration layer that brings data, code, and narrative together — the kind of literate, computational storytelling that tools like Jupyter notebooks enable, but carried all the way through to publication.

## Solving Both the Social and Technical Problems

One of the things I talked about on the podcast is that this isn't purely a technical challenge. There are deeply entrenched social norms around how science is shared, how credit is assigned, and how careers are built. That's one of the reasons I helped start the [Continuous Science Foundation](https://continuous.science) — to convene working groups tackling incentive structures, licensing, and attribution.

For example, the Journal of Open Source Software (JOSS) was created because researchers were spending years on critical scientific software but couldn't get academic credit for it. We need similar social experiments for computational narratives, visualization widgets, and modular research outputs.

## Graceful Degradation and Long-Term Access

A question that came up in the conversation was about maintainability — environments degrade, APIs break, links rot. Our approach is _graceful degradation_: design research outputs so they can fall back from an interactive widget, to a video, to a static image. At the moment of publication, you get the richest experience. Over time, the content can degrade to simpler forms while remaining accessible. If the work is important, like a global climate model, it is worth the time and attention to keep those reproducible and interactive components from degrading.

## The Open Exchange Architecture

The biggest initiative I'm working on right now is the [Open Exchange Architecture (OXA)](https://oxa.ink), a collaboration with Tracy Teal, CEO of Open Archive (home of bioRxiv and medRxiv), Nokome Bentley (Stencila), and many other contributors including eLife, PLOS, and Posit. The goal is a new standard for sharing science that is computationally enabled, modular, and composable — something that could be as widely adopted as the PDF, but designed for the way research actually works today.

The key idea is _composability_: just like software developers can install packages and build on each other's work, scientists should be able to bring a piece of someone else's research into their own in a structured, citable way. There's nothing like that for science today, and unlocking it would have multiplicative effects on the pace of discovery.

## What Keeps Me Going

The most rewarding part of this work is watching researchers' creativity get unlocked. When a scientist realizes they can create an interactive widget connected to real data — not just a static advertisement of their work — there's this moment of genuine excitement. I've been on calls where researchers lean back in their chairs and laugh, thrilled to finally share their work in a way that feels _authentic_.

That's the future we're building toward at Curvenote: standing on the shoulders of giants, for real this time.
