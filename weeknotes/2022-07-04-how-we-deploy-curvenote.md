---
title: How we Deploy Curvenote
description: >-
  We overhauled the curvenote.com site to make better use of the new publishing
  tools and CLI.
short_title: ''
subtitle: Week of July 4, 2022
date: 2022-07-04
name: 2022-07-04-how-we-deploy-curvenote
oxa: oxa:GTGiJ4YqK38DEbx5hX9m/C48QVhqEUepqwVmX6ANb
tags:
  - publishing
  - cli
  - weeknote
thumbnail: thumbnails/2022-07-04-how-we-deploy-curvenote.png
---

+++ {"oxa":"oxa:GTGiJ4YqK38DEbx5hX9m/qUSDhJRM9lEGjO2adk54.1","tags":[]}

This week we completely overhauled the [curvenote.com](http://curvenote.com) site to make better use of the new publishing tools that we are developing! The docs, blog, weeknotes, and changelog are all now directly accessible on [curvenote.com](http://curvenote.com) and we have more flexibility in improving and making this content interactive in the future! As part of this we are starting to consolidate all of our open-source repositories into a single monorepo (called [curvenote](https://github.com/curvenote/curvenote)!), which will better allow us to introduce themes and other changes to sites over time!

```{figure} images/GTGiJ4YqK38DEbx5hX9m-v2kffmUWdLXbZkIbuoK4-v1.png
:name: xvrFmyTv94
:align: center
:width: 70%

The new [curvenote.com](http://curvenote.com) that includes all of our documentation!
```

An overview of the components are in {numref}`Figure %s <mqSF3NYsst>`, our web application and API remain relatively unchanged, and we continue to use Webflow as an easy-to-use website builder for our marketing sites. However, we have moved our [blog](https://curvenote.com/blog), [docs](https://curvenote.com/docs) (including: Overview, Write, Web, Jupyter, CLI), [weeknotes](https://curvenote.com/weeknotes) and [changelog](https://curvenote.com/changelog) to be powered by Curvenote. Each of these is a different Curvenote project that we can collaborate on using our WYSIWYG editing tools, and then deploy to [curvenote.com](http://curvenote.com) when we are ready; each component in {numref}`Figure %s <mqSF3NYsst>`, can be released independently.

```{figure} images/GTGiJ4YqK38DEbx5hX9m-5mxSBvdNLninqFSpzahx-v1.png
:name: mqSF3NYsst
:align: center
:width: 90%

Architecture of [curvenote.com](http://curvenote.com), each box can be deployed independently including the Curvenote projects that host our blog, weeknotes (like this one!) and our hundreds of documentation pages.
```

When we want to release a new blog article or marketing site change, they can be done fast! For example, deploying a new “weeknotes” page takes about five seconds. We currently still have to use our command line tools, but that will hopefully change next week when we can do this directly from [curvenote.com](http://curvenote.com) after we are done writing a post!

```{figure} images/GTGiJ4YqK38DEbx5hX9m-lwzHgTp9RFpo9pwqV35h-v1.png
:name: RV0aOYYlEx
:align: center
:width: 70%

We are updating our site now with new content directly from Curvenote in 5 seconds! Next week we hope that it will be deployed directly from our app as well.
```

+++ {"oxa":"oxa:GTGiJ4YqK38DEbx5hX9m/ue4fMHZUijSwZpsevllr.1","tags":[]}

## Blogs, Conferences and Webinars

This week we’ve been doing a lot of writing and preparing material to go out and share more about what we are doing and the new open-science publishing tools we have been working on. We’ll be posting the blog articles over the next couple of weeks, now that we’ve integrated the [curve.space](http://curve.space) blog back into our main website. 🚀

We have two talks lined up so far and have been prepping materials this week. The first is at [RSECon 2022](https://rsecon2022.society-rse.org/) which is the Research Software Engineering Conference taking place in the UK in early September. We’re doing [a walkthrough session](https://virtual.oxfordabstracts.com/#/event/3101/submission/23) for attendees showing the open research publishing workflow with Curvenote. Research Software Engineering is increasingly getting recognition as an independent discipline with specific challenges of delivering software for research projects. Check out the conference, and if you are attending let us know!

The second is [a webinar with the EAGE Student Organization](https://eage.org/students/webinars/) that we’ll be giving in October (still to be announced). We’re excited to be able to take to an audience of students about open research and how our tools can help provide an easy route to publishing their research material. We’re happy to do the same for other student groups too and plan to set up more of these.

+++ {"oxa":"oxa:GTGiJ4YqK38DEbx5hX9m/XkfUdOuFkkt93IirhiJy.1","tags":[]}

## Canada 🇨🇦

Steve made his first trip over Canada this week! So that the team could meet up on the same timezone, being a distributed team this marks the be the first time we all be in the same room - more on that next week!
