---
title: Improving speed of Curvenote
description: The initial page load of Curvenote is now 50% faster ⚡⚡⚡
subtitle: Week of June 14, 2021
date: 2021-06-14
tags:
  - performance
  - weeknote
thumbnail: thumbnails/2021-06-14-improving-speed-of-curvenote.png
---

Initial page load of Curvenote is **50% faster** ⚡⚡⚡

This week we improved the speed of Curvenote by moving our `api` onto the same domain as the app, which avoids `Preflight-Requests`. These each took \~80ms, and without them each **request is about 30% faster**!

We are also now pre-rendering information for the application that allows the initial load to speed up, this saves about a second per page-load. There were also some duplicated network requests that have been removed, as well as the bundle size of our packages are all much smaller now.

We also discussed the emerging of client-side computation powered by [Web Assembly (WASM)](https://webassembly.org/) for Jupyter started to look at [pyodide](https://github.com/pyodide/pyodide) and <https://github.com/jtpio/jupyterlite> projects that are breaking ground in this direction.
