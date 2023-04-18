---
title: >-
  Permissions, website updates, MDPI journal template and LaTeX diffs for
  submission
description: >-
  We show off an example of an archeology article, a sneak peek and the new
  website, and discuss creating LaTeX diffs for pdfs.
short_title: ''
subtitle: Week of August 16, 2021
date: '2021-08-16T21:35:00.000Z'
name: 2021-08-16-permissions-tables-figures-diffs
oxa: oxa:GTGiJ4YqK38DEbx5hX9m/OLvhBjwBxBNJY4RTDzxg
tags:
  - website
  - tables
  - figures
  - jupyter
  - weeknote
thumbnail: thumbnails/2021-08-16-permissions-tables-figures-diffs.png
---

+++ {"oxa":"oxa:GTGiJ4YqK38DEbx5hX9m/nwdsh3ULGOQm6yjiUpve.4","tags":[]}

This week we take a look at [Alastair McClymount's latest article](https://curvenote.com/@alastair/holocaust-archaeology/mila18-processing) on their Holocaust Archeology project which leads us to point on some of the subtleties of the current permissions model. Curvenote block-level permissions are fine-grained but need some more UX to help communicate the model.

## Website

Rowan takes us through the latest draft of the new website which is almost ready for launch, we are keen to get it out there and start getting wider feedback from people.

At Curvenote we've been working on website, infrastructure, and UX for a while now and we are looking forward to getting back to working on some new functionality in September.

```{figure} images/GTGiJ4YqK38DEbx5hX9m-gsB9EvsyeKWclKYf0TAM-v1.gif
:name: a9d815ff
:align: center
:width: 70%
```

The SimPEG community regularly use Curvenote for [their meeting notes](https://curvenote.com/@simpeg/meeting-notes), and have built up a long list of previous meetings. They’re missing some feature allowing them to group (or filter) these into sub-folders easily. Creating additional articles is a way to do it but…. it doesn’t really cut it. It’s on our radar to enable this grouping and other “views” on the navigation panel to let people add things that help present and organize the contents of the project.

#### MDPI Journal Template

We recently added the export template for the MDPI Journals, which is a huge template with a lot of features supporting 300+ journals. Right now it’s hardcoded for the Energies Journal but will open up when we add our template user options. Porting this template now is has helped identify a bunch of features that we’ll add as options, which will help to fully support other journals like SEG, AGU, etc….

[Read more about the MDPI template](https://curvenote.com/oxa:9Kv3iYv0uCgaG0zl4WDZ/wiXpYocjoMv8kaVijqu7.1)

+++ {"oxa":"oxa:GTGiJ4YqK38DEbx5hX9m/tutkQvt9cpim7kh6AlBo.1","tags":[]}

#### LaTeX Diffs

Finally, we talk about LaTeX diffing and PDF revisions ready to go to journals, some of Liz's past experiences doing that manually mean a lot of painstaking manual work and mopping up LaTeX errors. With Curvenote's versioned data model and the ability to consistently generate LaTeX from our schema, we should be able to do this more reliably as an additional export feature.
