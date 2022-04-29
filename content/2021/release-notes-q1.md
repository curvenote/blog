---
title: 2021-Q1
description: Comments, teams, and launch it all 🚀
date: 2021-01-05T05:33:31.380Z
name: 2021-1
subject: Release Notes
oxa: oxa:9Kv3iYv0uCgaG0zl4WDZ/XWeeV0tpDulyRqFeGVem
---

# 2021-Q1

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/pJoVC7MtnDKcjoWDY2zi.1"}

### April 04

#### Bug fixes! 🥾 🐛

- Removed a bug that prevented page load in editing if there was an unlisted child. This is possible if the saving is interrupted.
- Improved the asides, these can now be selected more easily if they are the only component in a block. The block selection now covers the entire height of the block. ↕️
- Removed unnecessary errors in the console regarding images.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/YSLYbO7Ijanx12d6Swsa.2"}

### March 22

#### Bug fixes! 🥾 🐛

- In our Chrome extension, we have sped up our form rendering the extension popup to try and help with [this mac and external display bug in Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=971701) (v1.1.6).
- You can now sign out of your account, from the `Verify Email` page.
- The popup windows telling you that a draft has been discarded or locked should no longer appear when you save an article or notebook.
- The pop-out notifications you get when creating new articles no longer cover the lowest items in the Navigation panel. This was a problem when you have a project with a lot of articles and notebooks in it.
- The default drag zone on the Navigation bar now fills the space, looks better and has usage hints.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/SPnA4ncQPsBYF3P18nBM.1"}

### March 18

We have added a new account signup option. You can now signup with a plain email and password if you prefer not to use a Google account.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-jK4Wix94JqpHVnDH58OW-v1.png
:name: 156e7dc5
```

When signing up via email there is an extra verification step to complete, and of course you can also reset your password if you need to.

We’ve updated the Chrome Extension to accept login with your email/password too. Those changes are in v1.1.5.

Additional changes:

- ORCID ID ending in X are now accepted
- We now redirect after you sign out of your account

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/w8plDKjvXSpfOY1hUaJI.3"}

### March 12

This release contains some bug fixes and some important changes to clear up some confusing UX.

Curvenote web:

- You can no longer delete individual blocks from notebooks or articles but you can still delete, notebooks, articles and projects themselves. We are making this change until we are able to put more UX in place to help make it clear where blocks are used and by who before they are deleted.
- You can now discard a draft on an article or notebook allowing you to get rid of unwanted drafts.
- Unwanted drafts can come from two places at the moment
  - 1 - navigating between articles and notebooks when in edit mode
  - 2 - if you are making changes to a notebook in the web app, while someone saves a new version
- In 2 - discarding a draft allows you to get out of situations where you are stuck on an older version of the notebook in edit mode in the web app. This is a short term workaround as we will be putting proper diff / merge functionality in place here.
- When discarding drafts, remember that you aren your collaborators all share the next draft of your document, and potentially it’s not just your changes being discarded. You can find the discard functionality in the gif below, which also shows the experience for your collaborator.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-Ok4eeqF7gYEcW3867aoQ-v1.gif
:name: 0083f5bd
```

- We have updated the (new draft exists) message in the article/notebook header to alert you when a stale draft exists. A stale draft is case 2 above when your current draft is no longer based on the latest version of your notebook.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-3j1XFoPF5aocjAVQLpUA-v1.png
:name: e07756ca
```

Changes to the extension (v1.1.4):

- Previously after a cell was removed from a notebook in the app, and a copy of he notebook updated to the latest locally in Jupyter, the notebook appeared as though it was modified even when it was up to date. This has been fixed.
- the save button in the toolbar is now disabled during the save process, stopping multiple saves being made unintentionally.
- The ‘Unlink Cells Only’ command now works. The confirmation dialog that this showed previously was hidden.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/A3UhT1ID11mY8FExYKPW.2"}

### March 10, 2021

Bug fixes in the web app:

- When a collaborator saves a new version of a draft the you are also working on, you will now receive a popup asking you to reload you page. Previously the notification for a locked draft was too subtle, so it was easy to keep on editing and then lose any changes after the save. That should no longer be possible.
- The \[Publish\] button is now hidden on public projects, clearing up some confusion

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/OepHVOREZBUy0d835wvb.1"}

### March 9, 2021

The Curvenote Python Client library and CLI is [published on pypi.](https://pypi.org/project/curvenote/) We’ve no self serve way to issue API keys yet 🔜 but if you want early access then we can get you set up.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-IssBqGPOnF0YV21ss39Z-v1.png
:name: b72894b3
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/qbUadctGtq38ILxJSNPb.1"}

### March 3, 2021

#### Link to mybinder.org

You can now add a **launch | binder** button to your notebooks!

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-JNKvGfrTZL24hZVKX2S7-v1.png
:name: 75765aae
```

For the following to work, you’ll need to have a github repository with your `environment.yml` or `requirements.txt` file in it and at least one version of your notebooks in it, preferably already saved at least once to curvenote. Then to add the badge, first create an environment on [mybinder.org](http://www.mybinder.org) and copy the link to the binder

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-iGU3qJevTPGZwbnVCisH-v1.png
:name: d7fc7c67
```

In Curvenote, edit your notebook, go to the Block Settings, paste the link in the `Binder Url` field and press Update. You can test your link in Edit more before hitting save version, and if appropriate Publish.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-sXMBQAMj3Uwf0xvWmFDC-v1.png
:name: e2d0a9ac
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/LoFOFOTUXVIHQDU45gTR.1"}

### Feb 27, 2021

#### App UI Hints

We added a few hint to the UI:

- When you are looking at a version of an article you can now see if a new draft exists. This means that either you or one of your collaborators have started making changes to the current article and you may no be looking at the latest content. Pressing EDIT will drop you into this latest draft.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-NySCFMxxjm1DhkPaMhFB-v1.png
:name: 8a73a77b
```

- Added a “Stop Editing” button. This allows you to get out of edit mode without saving a new version of your article. Over time we want to make the editing experience more seamless so that you no longer need this, for now though its easy to get back out of edit mode.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-yJzv4xUgFjcJibv4ZYVG-v1.png
:name: dd7000c9
```

- You can now download a notebook via a button in the header section. This also means that your notebooks are easily downloadable when published or made public.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-hq72T64aTkvcay3fb9vZ-v1.png
:name: aff028af
```

- We’ve noticed that sometimes the Document Title fails to load quickly enough, or at all. This is an intermittent issue what happens more if the notebook/article has been renamed (even our titles are real time!). We’ve taken some steps to correct this here, but are still monitoring it. Let us know if you see it!

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/NNYfcAhmsq4mTTXs7VwT.1"}

## Feb 25, 2021

#### Chrome Extension UI Improvements

We are changing the UX in our extension to be more notebook focussed. This is the first iteration in that direction. Some of the changes are:

- Some new toolbar controls so you can both save a new version of your notebook and open to your notebook in Curvenote, without needing the have the Curvenote panel open.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-mx2xjg9oEbRlXAzg9Fnw-v1.png
:name: 21576e9a
```

- The notebook section of the panel is now always one top, making it clear where the main version history for your notebook it and making it easier to save new versions of your notebook as you work.
- As you move around your notebook and select cells, we no longer open the Selected Cell or Output sections of the panel. This is less distracting. Features like cell diffing are still all there, just either click on version badge or comment icon in you cell to open them (or open them directly)

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-1zLQE02Oo8KEqgGECD3j-v1.png
:name: 8eacca62
```

More UX changes and alignment with the Curvenote web app, coming soon.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/GwsX7DXs96Hfeg914frZ.1"}

## Feb 23, 2021

API changes to support LaTeX downloads. This is currently only consumed by our Python Client and CLI tool, which is still in Alpha (let us know if you’d like early access).

This approach allows users to pull and article down to a local project folder, complete with all linked assets, so you can then add your template, tweak and compile using your usual LaTeX workflow.

Note: this is a stepping stone, we’re working towards you getting your PDF straight out of Curvenote in a click, but this stepping stone allows us to offer an early option while we work out the kinks, from all the variation we see in LaTeX land..

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/mhayXiDTrXfOoM4MQ3yd.1"}

## Feb 17, 2021

We open sourced our editor and schema, check out our updated docs at <http://curvenote.dev>

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/NGR8XgJ9CmJ6mHH36to6.1"}

## Feb 8, 2021

### Citations

You can now add citations from directly within curvenote! To get started use the `/cite` command.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-f9ogRgvbqdbERxZhQa21-v1.png
:name: 65f5cf80
```

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-7TcDVQESX5o6CuMRxOot-v1.png
:name: 067c1d15
```

This will give you a citation, in this case to one of the papers I helped write in my PhD on [SimPEG](https://simpeg.xyz), an open-source framework for geophysical inversions {cite:p}`Cockett2015SimPEG`. You will also be able to click on the citation directly!

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-Q1AdCmZeTT4niWqQAzBP-v1.gif
:name: b1b8db2e
```

Once you have loaded up the citations, you can access them directly with the `[[` command. We will be expanding this in the future to give you access to other links.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-1gZHdydBCV7eg4h31d7X-v1.gif
:name: 41aae8fc
```

You can use the toolbar menu to toggle brackets around the citations, please use this instead of doing it manually - as that will help the $\LaTeX$ export!

### Multiple Citations

Use the `/cite` command to select multiple citations when they are in your library {cite:p}`Cockett2015SimPEG, Cockett2018Efficient`. You can use drag-n-drop to rearrange the citations within a block.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-XZ2zj2W2lc8Q0GKu6kF4-v1.png
:name: b9ab09e5
```

Let us know what you think!

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/DyR7dk4moOx7iAdNr1d4.1"}

## Feb 6, 2021

### Editable Author Lists

We can now update the Authorship on Articles and Notebooks to give proper attribution. When a new document is created or uploaded, by the creator becomes first author by default. Now you can modify this list, add other Curvenote users as authors or just add plain text if the Authors are not on the platform yet.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-4dmvArTjuDG0EGncXcQ0-v1.gif
:name: 2cbd445b
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/Jf4yUI0VWBkwz6uTivdB.3"}

## Feb 3, 2021

### Notebook uploads! 🆙 ☁️

You can now upload Jupyter notebooks directly into your projects, without having to go via the chrome extension. This meant for initial notebook uploads right now, as a new notebooks are created each time and any existing version info in the notebook will be not be used.

You’ll see new options to upload in your project pages

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-glOFBhesitWBnkvU6Mo2-v1.png
:name: f30b276c
```

In the navigation bar

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-U2PE8hjJJ5CutuQ2voB7-v1.png
:name: 097128d8
```

and in a menu or two. Click on the option to bring up a dialog and drag one or more notebooks in.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-HaCvP7DfcIihCrGMikEO-v1.gif
:name: 5e92871e
```

Other changes:

- A better \[new\] article button on the navigation unit
- When we process your uploaded notebook, we no longer version empty output cells
- There is a new chrome extension release 1.0.11:
  - The chrome extension no longer saves empty output cells
  - We made some improvements to the diffing of output cells, that should stop false change flags from showing. Some more work is needed on this, especially for complex outputs like plotly and bokeh, but some cases have been cleaned up.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/YWj6D4jfHWKxDLyD3xOr.1"}

## Feb 2, 2021

### Better onboarding! 🚢 🎉

We have done some work to better welcome new people to the community and Curvenote editing experience when they sign up! This also happens when you create a team.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-plZoJtXrkPslRGYBPakU-v1.png
:name: 5c76c690
```

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/uaqCTFbPD91rWayvFyVT.5"}

## Jan 30, 2021

### 🗑️ Deleting Articles and Notebooks

You can now delete both articles and notebooks, when you do you have the option to delete all associated children of that notebook or article at the same time. If you do, all places that those blocks are referenced will be deleted as well.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-lahdGNUBChhIZtwTacPV-v1.png
:name: e386f973
```

```{important}
Deleting blocks can only be completed by **project owners**.

```

### Print Mode

We have cleaned up what is shown when you print the webpage, so you can now export to PDF. In the future we will likely create the PDFs for you when you save a version, but this is great for now!

### Markdown Accelerators

We have added bold `**` or `__`, italics `*` or `_`, and strikethrough `~` accelerators and have improved the recognition of common links.

### 🐛 Bug Fixes

- The `Edit Profile` link on your profile navigation has been updated to point to the right place. 🔗
- Notebook cell add and remove should now remove the right blocks! You still cannot change an output blocks version.
- The Jupyter Chrome Extension has been updated with the new branding and API endpoints!
- Team onboarding language has been improved.
- A bug fix when saving a draft and not showing the right version right after has been fixed.
- We have fixed some overflow styling issues that caused horizontal scroll on smaller screens. ↔️
- Menu item links now take up the whole space, so no missing when you try to click on them. 👆

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/56Csv6hFQTMymUc6VACN.2"}

## January 27, 2021

Today we are rebranding iooxa to Curvenote! We are excited to launch with teams and more writing capabilities over the coming month!

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-B9ebkyEUDa001OdSlNG9-v1.png
:name: dd1fe9b6
```

More information about our rebrand coming in an email soon! 🙂

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/0AxPigGd0GwHbKIdQijR.1"}

## January 26, 2021

### 🗑️ Deleting Blocks

You can now delete blocks! There are two options when you are editing, `Remove` will just remove that block from the article, however if you choose to `Delete` it instead, that will delete the entire block, all comments, drafts and versions. This will also make all references to the block fail to resolve. A modal is shown before you actually can delete all the blocks.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-qVjzLcxmuA8Z66c4XTsi-v1.png
:name: 575b1eb3
```

If the block is not found, or you do note have access to it, you will see a “Block Not Found” warning, which gives you the option to dismiss and remove the non-accessible block when in edit mode.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-2Q2Gg19mqV6gVtEa80qC-v1.png
:name: b771e0fe
```

### 🗑️ Deleting Projects

You can now delete projects as well! We added a quick catch to ensure you are deleting the right project!

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-STEU8rO1V5lakBz7kB6C-v1.png
:name: 3a8f6b41
```

### ⚡ Performance

- Performance improvements in loading drafts and in switching between pre-loaded articles, this is now completely synchronous if you have loaded the data before.
- The drafts endpoint can now load children, both drafts, versions and blocks.
- The steps for a draft are now cleaned up as you publish, meaning better database performance! 🏃

### 🐛 Bug fixes

- The API endpoints for drafts have been improved to not error on creation or listing of drafts of blocks that cannot be drafted (images, code, and outputs at the moment). All draft links have been removed from the API.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/kRiWGVBwnc2YhUGHTrnc.2"}

## January 25, 2021

### Team Access

Now when you create projects within your team, your team members will have access to that project automatically. As users join and leave your team, their access to team projects will also be updated appropriately. When you create a project you are still project owner, as will your team admin(s) be (if that’s not you), so you’ll be able to invite external collaborators to your project. Team members show up with a special badge in the project collaborator table to.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-HkYlte9vJ1zpth1hY0vj-v1.png
:name: cd0dc586
```

### 💻 API Improvements

- You can request an upload URL from the API for images.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/txMLXBXnV0bmJj0DY4U4.2"}

## January 20, 2021

### Embedding Videos and Dashboards

You can now embed YouTube, Vimeo, Loom and Miro Boards as well as anything else that fits in an IFrame inside of a content block in iooxa! We will be using this for our getting started pages 🚀

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-bQEu8VjCOShxHGqrtVnZ-v1.png
:name: 48fbaeca
```

### Empty States

We have started adding “empty states” around the app that should help you with a bit more of an idea of projects, and nav, and articles on how to get started! The navigation block was quite confusing to folks, hopefully this helps!

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-07sme1JZtKAzttRcOyOk-v1.png
:name: 31c058fb
```

### Improved Byline

The author and the person who most recently modified the work is now shown. We will make this more configurable in the future! You can hover over the author and get a bit more information as well!

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-L6ipGqiwJfpIn4ffFTsZ-v1.png
:name: 7d06ab5a
```

### Quality of Life Improvements

- You can now paste a link into the editor, and it will change it into a link automatically. 🔗
- You can now double click to edit a block!

### 🐛 Bug Fixes

- Mobile improvements on the editor bar and the information panel 📱
- Add a comment button no longer show in public mode - we will bring this back when there are public comments 💬
- If an article was named `edit` - it would _always_ be in edit mode - that no longer happens 🙂
- We have improved the styling of the project listing page.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/SHx9ScaCBX8F6XCnhvEj.1"}

## Jan 14, 2021

### 💈 Status Bar

We have added a status bar at the bottom of the edit page that tells you how many changes are left to save. If the editing is ever not being saved, it will turn red 🔴.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-aN1bDJalcThuCSYekQgm-v1.gif
:name: df6c44d9
```

### 🐛 Bugs

- The editor should now save all your characters, occasionally the last character that you typed would not trigger a save.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/YWdGzczrGWFOXfICZuSa.1"}

## Jan 13, 2021

### Teams 🚀

We just introduced teams into iooxa - this allows you to have a specific URL that hosts all of the projects for that team. The iooxa team shows the membership and settings for the whole team.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-fL35pDaNCOYQ7HlGBFFx-v1.png
:name: b7eac758
```

We have also updated the project and team access pages to be much more clear, you can now see who is an admin and a member of a project.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-mWP1pVXmUJQzdzF7aYOi-v1.png
:name: 79bc8a21
```

At this time, you still have to add collaborators to the individual projects as well as the team, we will update that shortly.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/eLXL3APzuCUtO7gkedc0.2"}

## Jan 10, 2021

Ability to copy content as Markdown or $\LaTeX$. This is done at the block level, for programatic access you can use the `format=tex` in the version or download API endpoints.

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-OzznJeCvQJ11jQE7yAdZ-v1.png
:name: 98e61142
```

This allows you to collaboratively write online, and then copy it to your latex document.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/8zrOTBCyQ8ewtzLZQw46.1"}

## Jan 9, 2021

### 🔗 Added

- You can now create or remove a link with `CMD/Ctrl-K`

### 🐛 Bug Fixes

- The editor menu occasionally didn’t work, this has been fixed.
- Copy and paste of blocks has been improved to be less sensitive when you are trying to copy something else!
- Comments are no longer justified.

+++ {"oxa":"oxa:9Kv3iYv0uCgaG0zl4WDZ/58HpAOE8mIHII4rfMQ1k.1"}

## Jan 4, 2021

Welcome to the New Year - going to be a big one for iooxa! 🚀

### 💬 See all the Comments and Threads 🧵

Our first big feature of the year is to start improving collaboration and commenting for your articles and Jupyter Notebooks. We have been rather inspired by commenting in Google Docs - where you can see all of your comments at once, and when you click on them they focus into the correct area pushing all other comments out of the way! The threaded replies are simple to add and, as always, they show up anywhere you add the block including in Jupyter (threaded comments should land in the Jupyter Extension later this week!).

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-TlByj8vuFRLIHTP1ZA82-v1.gif
:name: a4393eb1
```

One of the nice features is that you can see all resolved or previous comments at the block level, no searching through all the comments if you know if should be attached to that block!

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-eCEzBgngNuPSMsGM4FCg-v1.png
:name: f2af8703
```

### Copy/Paste of Blocks 🍝

Click the block handle, or hit escape if you are editing, and use the standard copy (`Cmd/Ctrl-C`) then go to another article to paste it in using `Cmd/Ctrl-V`. The block will be inserted with all of it’s versions and comments coming along for the ride! It saves a lot of time in inserting figures from your notebooks into documents!

### Download Notebooks ⬇️

We will make this more apparent soon 🔍 , but it is in the top right menu now!

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-BuPwWNKSOA6m8B9VOZ5g-v1.png
:name: fb66a855
```

### Project Filter 🔍

On your profile page, you can now sort and quickly jump to a project that you own, or is shared with you. ⚡

```{figure} images/9Kv3iYv0uCgaG0zl4WDZ-uqcnWmUmXBSZJe1nUpHv-v1.gif
:name: 3ec40a90
```

### 🐛 Bugs

- Due to a [regular expression negative look behind](https://caniuse.com/js-regexp-lookbehind), we had a pretty hard crash on Safari and iOS. Note to self - more testing on iOS!
