---
title: Metadata, Analytics, and Docs
description: >-
  We added all sorts of scholarly metadata, including licenses, DOIs, arXiv
  links, open access statements, binder & GitHub links, and more.
subtitle: Week of May 30, 2022
date: 2022-05-30
tags:
  - cli
  - docs
  - weeknote
thumbnail: thumbnails/2022-05-30-metadata-analytics-docs.png
---

## Metadata, metadata, metadata

This week in Curvenote we were focused on scholarly metadata. We completely overhauled our forms in a Curvenote project to be able to collect this information and finished up the upgrade to the header section of articles, to accommodate it. This includes licenses, DOIs, arXiv links, open access statements, binder & GitHub links, and more.

```{figure} images/GTGiJ4YqK38DEbx5hX9m-epjQbBomAM9rynzGFg4k-v1.png
:name: fLxWIOIXlm
:align: center
:width: 70%

Frontmatter on an article that has links to DOIs, ArXiV, License information, and GitHub.
```

We wanted this collection of metadata to be as easy as possible and opted for a cascading model of being able to set it on a project and then override it for more specific use cases — like an image that has a more specific license or a document that has a specific DOI. This information is all accessible through our API, and command-line tools, and can be used to create beautiful scientific websites that keep all that metadata accessible!

## Privacy friendly analytics

We introduced [Plausible](https://plausible.io/) to the list of our analytics providers, allowing you with a single domain key to add cookie-free analytics to your website. This was introduced to us through the Software Underground community — which we helped to sponsor for their [Transform 2022](https://transform.softwareunderground.org/) annual conference. You can see some of our new website infrastructure in action supporting the tutorials and conference materials:

```{figure} images/GTGiJ4YqK38DEbx5hX9m-Cukv3LgBHM5Gmj4ZoYyv-v1.png
:name: bfKOJtcVlb
:align: center
:width: 70%

Curvenote sponsored the Transform 2022 conference last month, providing infrastructure for hosting the [conference website](https://transform.softwareunderground.org/)!
```

Another great aspect of Plausible’s solution is that you can be open with your site analytics, by setting them as ‘public’ you can share an analytics dashboard with the world, just like the [Software Underground society](https://plausible.io/softwareunderground.org) does.

## Docs & more!

We made a big push in the last week to get [our docs](https://curvenote.com/docs/web) for the new Curvenote Command Line Interface (CLI). This allows you to create a scientific website from your existing content in notebooks as well as export to PDF with any of our [templates](https://curvenote.com/templates). We will be continuing to push on this in the following weeks — if you are interested in getting started we would love to hear from you! Give us a shout at [founders@curvenote.com](mailto:founders@curvenote.com).

```{figure} images/GTGiJ4YqK38DEbx5hX9m-m06jfA39i8Igp5uZUn7x-v1.png
:name: eg48cDz7af
:align: center
:width: 70%

Documentation on frontmatter that you can add to your site.
```

For lot’s more details, check out the [release notes](https://curvenote.com/changelog/2022-2) for the past week.
