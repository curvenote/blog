---
title: Version control for scientists & layout improvements
description: >-
  This week we're talking about version control via Curvenote - the current
  workflows and thoughts on future changes.
short_title: ''
subtitle: Week of May 24, 2021
authors:
  - userId: fI5cWFyZPEZCTpIHdqX5H8OU3Iv1
    name: Steve Purves
    orcid: 0000-0002-0760-5497
    corresponding: false
    roles: []
    affiliations: []
date: 2021-05-24
name: 2021-05-24-version-control-and-layout
oxa: oxa:GTGiJ4YqK38DEbx5hX9m/EiFSaHUP3vMRdJmqhY4m
tags:
  - version-control
  - weeknote
thumbnail: thumbnails/2021-05-24-version-control-and-layout.png
---

This week we’re thinking about [version control for scientists](https://curvenote.com/blog/version-control-for-scientists). Curvenote’s version control system is very different from that of Git, based around blocks there are subtleties around how changesets are handled, and when they are collapsed back to full copies of the content and how diffing is handled.

```{figure} images/GTGiJ4YqK38DEbx5hX9m-FxY2lj9Y6dfIrAtRvjxR-v1.png
:name: iMb1JxKVPr
:align: center
:width: 70%
```

Curvenote aims to support version control that is friendly to scientists and their collaborators, we need to introduce additional features around the base that we have but plan to do so in a scientist-friendly way without some of the complexity that working with the Git and GitHub models bring. This is challenging to even talk about, as we often finding ourselves describing those features in terms of the language established by git, but we are clear that there are ways to do this which are as much about the UI/UX we put in place around the core versioning tech as it grows.

Steve wrote a blog post outlining [version control for scientists](https://curvenote.com/blog/version-control-for-scientists), which is worth a read! We also improved the layout of the app and released a number of improvements for the Jupyter extension.

## May 28, 2021

### Layout Improvements 🚀

The layout of the app has been improved to be able to hide the navigation bar at all locations, it will now be easier to use Curvenote on smaller screens!

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-qTZPCOJMOP2vT6Fp1Wbp-v1.mp4
:name: 9082b28a
:align: center
:width: 70%
```

### Jupyter Extension

We’ve made changes to how notebooks are saved via the chrome extension:

- New notebooks will now have a URL (block name) based on the filename rather than the random hash/id used previously
- Saving new versions of a notebook will no longer cause the title in Curvenote to be overwritten by the filename
- The notebook title, as shown in Curvenote is now visible on the UI and clicking on it will take you to the appropriate version of that notebook.
- You will also see a warning icon on the title if it doesn’t match your current title! 🧙

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-9VQadhNN9sLKvPyXqGaZ-v1.png
:name: e6b881c4
:align: center
:width: 50%
```

#### ⬆️ Other app improvements

- Project descriptions are now limited to 160 characters
- Removed an increasingly a rare `iooxa` from creeping into our tootltip for articles!
- The menu now no longer shows on the project landing page, where it didn’t do anything before! 🤷
