---
title: Publishing Computational Notebooks at AGU23
description: Curvenote launches Notebooks Now! at the American Geophysical Union Annual Meeting in San Francisco, where 20,000+ scientists descended on Moscone Center for five days of wide open science.
subtitle: AGUs Journal, Earth and Space Science, is accepting computational notebooks starting in 2024
date: 2023-12-17
tags:
  - publishing
  - conference
  - presentation
thumbnail: thumbnails/publishing-computational-articles.png
license:
  content: CC-BY-4.0
  code: MIT
---

Last week the American Geophysical Union (AGU) held its 2023 Annual Meeting in San Francisco, where 20,000+ scientists descended on Moscone Center for five days of science communication. The theme of this year’s meeting was “Wide. Open. Science.” and in every conference session we attended there was a buzz, presentations on and discussion from scientists who are building open and FAIR principles into their research and communities.

```{figure} images/AVQ2dzLNloEd25Io8NbA-t1QKYeqPU2gF5oF2ZAQU-v1.jpeg
:align: center
:width: 100%

Wide. Open. Science at the AGU23 Meeting
```

Curvenote was there, both in orbit around the Open Science Pavilion and launching the _Notebooks Now!_ showcase where we and AGU Open Science team have been getting the word out about computational notebook based submissions in 2024. This is _HUGE_ and it’s _REAL_ — for the first time notebooks will be accepted as a submission format for articles in a peer reviewed AGU journal.

## Launching Notebooks Now

To back up a bit - in late 2022 AGU started the [Notebooks Now! initiative](https://data.agu.org/notebooks-now/about), a community-led project to look at how to get computational notebooks into the scholarly record. Months later in spring 2023, a picture had formed of how to build an MVP of the process. In June, [Curvenote partnered with AGU](https://data.agu.org/notebooks-now/2023/07/25/pilot.html) to do the implementation work, building out tooling and infrastructure to get the project into a place where it could start accepting submissions.

And we did just that! Last week we launched the _Notebooks Now!_ showcase which features two computational articles from AGU authors as well as the submission template.

```{figure} images/AVQ2dzLNloEd25Io8NbA-p2MBVAX7x1sM7I1146N4-v1.png
:align: center
:width: 100%

The *Notebooks Now!* showcase (<https://agu.curve.space>) - this is how computational notebooks will appear once they’ve been through peer review and published. A high quality, interactive reading experience directly integrated with Jupyter allowing a reader to launch a Jupyter server and directly access the notebooks in a reproducible environment.
```

Check it out for yourself at <https://agu.curve.space> where you can read the articles, read all the supporting notebooks, as well as run the author’s code directly, online.

### Working with authors

On the lead up to the launch last week, we’ve been working with the primary authors on each of the publications, Kayla Iacovino and Lynne Elkins.

```{figure} images/AVQ2dzLNloEd25Io8NbA-AnTE4XxNZobR4Gcg3xdG-v1.png
:align: center
:width: 100%

One of the early articles on the AGU *Notebooks Now!* showcase, notebook based submissions to Earth and Space Science in 2024 will look just like this.
```

These authors are notebook advocates and had already published their notebooks in Earth and Space Science ([doi:10.1029/2020EA001619](https://doi.org/10.1029/2020EA001619), [doi:10.1029/2020EA001584](https://doi.org/10.1029/2020EA001584)) in 2021. Unfortunately, the original platform can’t do justice to the format or provide any interactivity. Ahead of re-publishing the notebooks in the showcase, we worked with the authors to improve the manuscripts with new capabilities, adding rich cross-references, citation support and numbered figures captions to take advantage of the underlying MyST Markdown features and their rendering (see <https://mystmd.org>).

:::{figure} images/agu23-reading-sections.mp4
Improved reading experience with Curvenote, including hover references, and linking to tables of data, cells and supporting information.
:::

We also worked with the authors to create interactive figures for each article in a new notebook, aimed at demonstrating how to use interactivity in a scientific research article, and having a computational environment attached to your publication, you can take the “What, Why and How” of how you communicate your research to a whole new level.

In Lynne’s article on `pyUserCalc`, we added [a comparison plot](https://agu.curve.space/articles/NN0002/explore#main) allowing readers to explore the relationship between key parameters that originally had been spread out across multiple figures in the manuscript. Now in addition to reading the commentary around those figures, readers could experiment with the parameters directly and build up an understanding of how they jointly vary the model results.

:::{figure} images/agu23-launch-jupyter.mp4
Exploring interactive models with the integrated launch Jupyter functionality.
:::

In Kayla’s article on VESIcal, we transformed a static figures in the manuscript into an interactive visualization. Where previously H{sub}`2`O-CO{sub}`2` isobars could only be plotted for minimum, average and maximum sample points, [by using an interactive plot user’s could explore any data sample, plot and compare isobar profiles](https://agu.curve.space/articles/NN0001/interaction1-plotting#main). In addition, this article contained 10 supporting notebooks that were previously buried in a `.zip` file at the bottom on the article — now these are readable as a first class part of the article, with links and cross-references to data files and supporting notebooks.

:::{figure} images/agu23-picking.mp4
Moving from static figures to interactive visualizations.
:::

In future submissions, authors will know that their notebooks will be available in full and that their publication will be hosted with compute attached, and so they can start rethinking the limits of how they communicate their work.

## Rowan on AGU TV 📺

Did you know AGU did TV? They do and they invited Rowan along for an interview. We’ve had many interesting and insightful conversations this week on the impact of publishing computational notebooks as a peer-reviewed journal articles: including them in the scientific record and having the infrastructure in place to support reproducible environments and the compute services needed to bring them to life.

:::{iframe} https://www.youtube-nocookie.com/embed/rOB6qjlXqAA?si=qb-qD-Z_wa8QR0MS&amp;start=1182
:width: 100%
Rowan talking about publishing computational articles with Curvenote
:::

## In orbit at the Open Science Pavilion

The AGU23 meeting was expansive and the exhibition hall was no exception. AGU’s Open Science Team hosted many talks in the Open Science Pavilion which served as a hub for all things open science within the exhibition space. It was a great place to come along to meet and chat open science, with its own theatre schedule and a list of interesting talks.

We gave talks on MyST Markdown, Computation Articles, and the publishing process that Curvenote enables, which all generated a lot of interest and discussion.

```{figure} images/AVQ2dzLNloEd25Io8NbA-EMXDkr5i6U3HfkgjT56a-v1.jpeg
:align: center
:width: 100%

Rowan talk’s on Publishing Computational Notebooks drew a crowd showing some of the new capabilities that Curvenote is bringing to life with *Notebooks Now!*
```

A big part of our activity in the exhibition hall was to get message out about the _Notebooks Now!_ and Earth and Space Science being open to notebook based submissions in 2024.

On Thursday morning, Rowan (Curvenote), Steve (Curvenote), and Shelley (AGU’s VP for Open Science Leadership) randomly stopped people walking by the pavilion and asking them two questions — Do you use Jupyter Notebooks? Would you like to submit a notebook and get a peer reviewed publication out of it?

```{figure} images/AVQ2dzLNloEd25Io8NbA-6LI2Q2OBuQnYoBUvvT31-v1.png
:align: center
:width: 90%

Shelley Stall & Steve Purves explaining notebook submissions in Earth & Space Science and asking people to register their interest. Want to publish using notebooks? You to can register your interest by subscribing for updates at <https://agu.curve.space>.
```

> Over 90% of people we stopped said yes they use Jupyter notebooks

Second most popular answer was “No, I just pick up rocks!”. Of the people who used Jupyter notebook’s every single one, that’s 100%, said they’d be interested in publishing using notebooks in a peer reviewed journal and most folks registered their interest straight away.

# Publish Notebooks in Earth and Space Science in 2024

> AGUs Earth and Space Science is accepting computational notebooks publications in 2024!

If you submit using notebooks, your work will go through the full peer review process, the reviewers, editors and readers will have access to your notebooks in a form they can easily access, run, and review. That’s right, they’ll be able to easily to read and run your notebooks, both your main manuscript and any other supporting notebooks you include without having to scratch around to get an environment set up. Reviewers will be able to access your code and run your notebooks directly using the environment that you specify.

```{figure} images/AVQ2dzLNloEd25Io8NbA-p2MBVAX7x1sM7I1146N4-v1.png
:align: center
:width: 100%

Visit <https://agu.curve.space> and register your interest.
```

[ESS has broad aims and scope](https://agupubs.onlinelibrary.wiley.com/hub/journal/23335084/aims-and-scope.html) and can accept work from many fields, and whilst your submission may now include more code than ever before we heard from Editor in Chief, Graziella Caprarelli at the _Notebooks Now!_ Town Hall session that the aim on review will still be to review your science, models, methods and conclusions not to review the quality or style of your code. This was a common question from people learning about the initiative, and thinking through the implications of what they would be sharing.

```{important}
If you are considering a publication with AGU, in ESS in 2024 — register your interest now and subscribe for updates at <https://agu.curve.space> to find out about how to submit in 2024.

```
