---
title: Getting the word out about Curvenote & investigating Jupyterlite
description: >-
  This week we investigated Jupyterlite, and worked hared on getting the work
  out about Curvenote on twitter and medium!
short_title: ''
subtitle: Week of Sept 13, 2021
date: 2021-09-13
name: 2021-09-08-marketing-and-jupyterlite
oxa: oxa:GTGiJ4YqK38DEbx5hX9m/rw1kjc1r5PZSezVbkyoq
tags:
  - marketing
  - interactive
  - weeknote
thumbnail: thumbnails/2021-09-08-marketing-and-jupyterlite.png
---

+++ {"oxa":"oxa:GTGiJ4YqK38DEbx5hX9m/9mFvWUv9QUsSxXqCzo2T.2","tags":[]}

At Curvenote we’re learning to be a little louder — both in terms of putting our message out there and in terms of engaging and interacting with some like-minded researchers, scientists and engineers.

We’ve started doing some more writing ourselves, so watch out for new posts on the [Curvenote Blog](https://curvenote.com/blog) and if you are active on social media — we are present on [twitter](https://twitter.com/curvenote) and [LinkedIn](https://www.linkedin.com/in/stevejpurves/) — we’d love to chat and a hand in amplifying what we are doing with the platform.

+++ {"oxa":"oxa:GTGiJ4YqK38DEbx5hX9m/XmnIgV7fAd2ArA0eONF3.1","tags":[]}

### Medium

One small Twitter interaction piqued my \[Steve\] interest and that was to do with Medium — as in why would scientists prefer Medium as a blogging platform when it’s clearly not set up to serve them?

```{figure} images/GTGiJ4YqK38DEbx5hX9m-xTa3pPi0rDVP00HozqtV-v1.png
:name: a4772786
:align: center
:width: 70%
```

Obviously, reach and SEO is a bit part of this, but there is a lot to sacrifice for that along the way with little code and no maths support, never mind the other parts of writing a scientific article. Medium is maybe not likely to pick up on the needs of a set of niche (for them) users either.

So this just reminds us of one of the value propositions of Curvenote. If you are working in Curvenote to write — from day-to-day meeting notes through to publications and papers, doing outreach and building a professional profile becomes much easier.

We’re concentrating hard now on supporting the writing experience for the publication process, but being able to write blogs and populate a profile and timeline easily, with good SEO on your content is something we’ve not lost sight of.

+++ {"oxa":"oxa:GTGiJ4YqK38DEbx5hX9m/u8U2VxCpsLYBJEy9igv5.1","tags":[]}

### Jupyterlite

This week we took a look at the [Jupterlite project](https://jupyterlite.readthedocs.io/en/latest/). It’s a project that has used a very exciting web technology web assembly, to bring the entire Jupyter stack into the browser.

This means you can execute python-based notebooks (and other languages depending on kernel support) directly in the browser without connecting to an external Jupyter server.

```{figure} images/GTGiJ4YqK38DEbx5hX9m-EKiC60Besw63tT5BJQx2-v1.png
:name: a1baaf59
:align: center
:width: 70%
```

Now sometimes you need compute power beyond your local computer (as seen through your browser!), or you need access to datasets that mean you are dependent on an external computing environment for your work. However, there are a whole bunch of situations where you don’t need that level of computing power, or your data can be readily fetched or you don’t need it all of the time.

Use cases like — tutorials, course materials, textbooks, documentation, interactive plots, and exploratory dashboards / UIs for interactive data analysis or examination of results — and probably much more.

This makes this local, in-browser compute ability very interesting especially as it transparently uses the exact same Juptyer notebooks as an external service would, without any customization.

When you first start using Juptyerlite there are a couple of surprises though, it’s not quite built how I was first expecting, and turns out it’s more interesting because of that! We’ll repeat this demo (with a little more finesse) in next week’s meetup.
