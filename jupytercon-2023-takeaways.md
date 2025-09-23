---
title: Top takeaways from JupyterCon 2023
subtitle: Science Communication and Jupyter
description: 'Curvenote and ExecutableBooks were at JuptyerCon 2023 in Paris, between all the amazing announcements & talks, here are our main takeaways.'
date: 2023-05-26
tags:
  - events
  - jupyter
authors:
  - mike
  - steve
thumbnail: thumbnails/jupytercon2023.png
---

A week ago the Curvenote team headed to Paris for JupyterCon 2023!

```{image}./images/jupytercon-2023-paris.jpeg
:alt: CITÉ DES SCIENCES ET DE L'INDUSTRIE, PARIS
```

The event itself felt great, generated a solid feeling of community, was friendly and jam packed with success stories on the use of Jupyter across different scientific fields and projects, alongside the latest news on technical developments in the ecosystem.

For Mike, who is a relative newbie to Jupyter notebooks, it was an eye opener and he came out realizing that Jupyter is able to back the future of interactive scientific publishing, and convinced that MyST Markdown can change the impact of open science initiatives right now. This is from the perspective of authoring (in Jupyter Lab), reading (in MyST websites) and interactive computation (backend by BinderHub and JupyterHub).

Steve and Franklin were also attending and speaking at the event, showing off the capabilities of MyST for publishing, the [`jupyterlab-myst`](https://github.com/executablebooks/jupyterlab-myst) extension and [`thebe`](https://github.com/executablebooks/thebe) for headless interactive computing with the MyST website themes.

It’s hard to capture all the high’s from the event but here are some of our own takeaways.

## Narrative & code should be together, not separate workflow steps.

```{figure} images/s0vIbUCEymZc7EKf23vc-nbjMmF7lFZkHmvJ1oSjT-v1.png
:name: qOAwlVuiw4
:align: center
:width: 70%
```

\[Mike\]: In my field, psychology, analysis and writing are completely separate. It's at least two different programs (eg R studio and Word), two different frames of mind, two separate steps in your science workflow. And maybe two different people.

When you start writing scientific papers in Jupyter though you can weave together narrative, code, and figures all together in whatever order helps tell the story of your science. Seeing how [`jupyterlab-myst`](https://pypi.org/project/jupyterlab-myst/) works and how it was received from both [Franklin’s MyST talk](#myst-talk) and [Steve’s lightning talk](#lightning-talk), this makes for much more engaging scientific articles, and a more seamless workflow for authors because you don’t have to context switch as much and you can do so much more from inside Jupyter Lab.

## It’s time for “lite”

\[Steve\]: [Jupyterlite](https://jupyterlite.readthedocs.io/en/latest/) generated a lot of excitement led by [a talk from Jeremy Tuloup](https://cfp.jupytercon.com/2023/talk/EU7HFP/) in the opening session. JupyterLite provides an in-browser Jupyter experience backed by a Web Assembly (WASM) kernel which completely changes the equation for deploying interactive computing to the web — one that can dramatically improve accessibility and reduce costs of delivering computational articles resources to people.

With big immediate use cases for the full JupyterLite experience in education and documentation, we also heard about the nascent [BinderLite project from Yuvi Panda](https://github.com/jupyterlite/repo2jupyterlite) and how [thebe](https://github.com/executablebooks/thebe) provides a headless JupyterLite server as a drop in library `thebe-lite`. [See thebe in action here](https://executablebooks.github.io/thebe) and catch [Steve's thebe talk here](#thebe-talk).

## Trust & know who you're getting your notebook from

\[Steve\]: The two keynotes at the event were from Alyssa Goodman on the [Glupyer framework](https://jdaviz.readthedocs.io/en/latest/dev/ui_description.html) and some of the astronomical discoveries made possible by computational collaboration 💫 -- and from [Paul Romer](https://paulromer.net/) on Trust.

Paul's talk really resonated with me, not just because of the unique mathematical narrative style he used to go though some of the most complex concepts in math and cryptography, but also because it was a pull back the curtain moment on our current digital lives, reminding the audience of the enormously powerful tools for communication and security we have available to us, if only we know how to think about them and use them.

Part of his talk covered digital signatures (including an in-depth review of elliptic-curve cryptography 🤯) and their use in establishing trust in digital assets. Thinking about the research publishing workflow -- signing content can validate sources of publication, revisions or reviews this potential in open and federated publishing is intriguing.

## When you write science for students, you do it better than when you write up the same study for journals

> Take a bad presenter, and have them present to a group of children, and suddenly they becoming marvelous, engaging communicators. Because they drop their assumptions about what the audience already knows.
>
> - Henry M. Boettinger, _Moving Mountains_

\[Mike\]: Science education was one of the major use cases for Jupyter notebooks. When people are trying to teach science to students, they write it completely differently from when they're just writing up a study to get published as a career goal.

Scientific documents written for students are _alive_. They explain each step in the finding clearly, and often have sections where students can learn by interacting with a figure or changing some bit of code to see how the results change. Often it's complex physics or science being communicated for graduate students; there's no reason why all scientific articles can be designed to teach more than posture.

## Jupyter at the heart of science collaboration

\[Steve\]: Jupyter, and JupyterHubs specifically, are a backbone for scientific collaboration in research groups. Hubs, deployed alongside data warehouses and data lakes enable researchers to collaborate and work in a shared environment with easy data access, and we heard from a number of important scientific project leveraging such setups.

We heard from lot’s of projects at the event such as [ITS_LIVE](https://its-live.jpl.nasa.gov/) glacier mapping, the [NASA Cryocloud](https://cfp.jupytercon.com/2023/talk/W7MYUZ/) from James Colliander of [2i2c](https://2i2c.org) and [Jupyter for Copernicus](https://cfp.jupytercon.com/2023/talk/PQQFUV/) to point out just a few.

## We're starting to catalog the challenges in actually publishing science in notebook form.

\[Mike\]: Mixed code-narrative articles are fantastic for communicating science _when the work_. But right now, a science notebook article often has to be installed locally. Like, you download the file(s) and run it on your own computer and need to have python already installed (a big barrier for sharing with students).

And there's an issue with longevity: a key concern for scientific publishing. PDFs are forever, code may break or be incompatible tomorrow. [Julia Wagemann’s fantastic talk](https://cfp.jupytercon.com/2023/talk/TEPZT9/) (which was both hopeful and sobering) found that less than 25% of Jupyter notebooks on GitHub can't be run as-is.

This is an issue that can be and wil be solved and [we're actively working on it](https://github.com/curvenote/notebooks-in-publishing).

## MyST will be life changing for everybody using Jupyter for science and science education right now.

\[Mike\]: Jupyter notebooks let us weave narrative and code together, but not necessarily perfectly. I saw demos where people used code comments and/or markdown to try to explain figures and such. [MyST Markdown](https://mystmd.org) — which is markdown plus extra features for writing science more easily — improves your ability to embed scientific narrative alongside executable code, even working with a package called Thebe to help notebooks execute from remote servers even if you don’t have python installed locally (a huge win for teachers & students… just send a link to the notebook and it works!). Talks on open-source MyST Markdown were really well received (see [Steve's lightning talk on MyST below](#lightning-talk)).

## Talks from the Curvenote team at JupyterCon

All the talks at the conference were recorded so watch out for all the great content on a youtube channel soon, but in the meantime here are some fly on the wall recordings of the talk from the Curvenote team at the event. As core contributors to the MyST tools stack and ExecutableBooks project these focussed on the open source tools we’ve been developing there.

(myst-talk)=

### MyST Markdown: Using notebooks in scientific publishing workflows

To originally be presented by Rowan, Franklin stepped in to give this overview of the new MyST markdown stack in the opening session of the conference ([talk outline](https://cfp.jupytercon.com/2023/talk/WWZMSG/)).

```{iframe} https://www.youtube-nocookie.com/embed/hL2daczfDMs
:label: hL2daczfDMs
:align: center
:width: 70%
```

(thebe-talk)=

### Thebe - add Jupyter-based interactive computing to modern websites

Thebe’s a headless connector library for Jupyter that is nearing major new milestone, Steve’s talk covered examples, use cases and capabilities of the updated library ([talk outline](https://cfp.jupytercon.com/2023/talk/TBD9PQ/)).

```{iframe} https://www.youtube-nocookie.com/embed/XtgUfbph8JM
:label: XtgUfbph8JM
:align: center
:width: 70%
```

(lightning-talk)=

### Lightning Talk on `jupyterlab-myst`

Finally, a 2 minute lightning talk on the `juptyerlab-myst` extension, as the closing lightning talk of the conference 🎉 got everyone excited about the authoring possibilities in Jupyter Lab.

```{iframe} https://www.youtube-nocookie.com/embed/5T7FaJme9tU
:label: 5T7FaJme9tU
:align: center
:width: 70%
```

We’re all looking forward to JupyterCon 2025 🚀
