---
title: Hidden pages & Thebe Release
description: >-
  Publishing Curvenote sites became even easier last week when we launched our
  new publish button in the Curvenote editor.
subtitle: Week of Aug 1, 2022
date: 2022-08-01
tags:
  - thebe
  - publishing
  - weeknote
thumbnail: thumbnails/2022-08-01-hidden-pages-thebe.png
---

## Hidden Pages

Publishing Curvenote sites became even easier last week when we launched our new publish button in the Curvenote editor. Now we’ve added the ability to hide articles and notebooks within your project so that you can control which of these appear as pages on your published site. This allows you to keep drafts or working material within a project, without it being published to your website.

```{figure} images/GTGiJ4YqK38DEbx5hX9m-n71ExCfz8ODDzNhQDJs6-v1.png
:name: J8B8IcDHCY
:align: center
:width: 100%

Editing block settings to hide a document when publishing to a website.
```

The hide option is located in the Article Settings dialog, and hidden articles in a project are identified with a visibility icon, as shown below.

```{figure} images/GTGiJ4YqK38DEbx5hX9m-ea9gDR7T2lRukV77Fp40-v1.png
:name: pvVlreTTLG
:align: center
:width: 70%

Hidden notebooks in a project!
```

## Merged Repos together! 👩🔬

We have consolidated many of our open source repositories to simplify the experience for development and make our GitHub footprint a little bit more sensible!

- Command line tools and website utilities:
  - <https://github.com/curvenote/curvenote>
- All of the work for our scientific editor:
  - <https://github.com/curvenote/editor>

This has simplified the install and build experience, and will lead to speeding up things for end users as well!

```{figure} images/GTGiJ4YqK38DEbx5hX9m-AEQfweqHBFfXnMtqeVmv-v1.png
:name: hdOIEW8TtR
:align: center
:width: 30%

This did mean touching a lot of code to make everything work again!
```

## Thebe Release Candidate

This week we published `thebe` `v0.9.0-rc.0` as part of our ongoing work on the executable books codebase. While `thebe-core` is essentially a headless connector library for Jupyter that allows any Javascript app to connect to and compute on sessions on a Jupyter server (we talked about this in [Themes & Interactive Computing](oxa:GTGiJ4YqK38DEbx5hX9m/yxuBODMK3JiIsAAQkhym 'Themes & Interactive Computing') a few weeks ago), `thebe` providing that connectivity while also converting code snippets on a page into Codemirror cells for editing and execution.

We refactored `thebe-core` out of `thebe` to provide Jupyter connectivity in different application contexts, and now we’ve reintegrated that into `thebe` upgrading the latter to typescript in the process, as well as introducing a bunch of improvements including better messaging and JuptyerLite support.

Check in on the status of the release candidate to [integrate `thebe-core`](https://github.com/executablebooks/thebe/pull/554).
