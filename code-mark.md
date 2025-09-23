---
title: Creating Inline Code in a WYSIWYG Editor
description: One of the biggest frustrations in using what you see is what you
  get (WYSIWYG) editors when coming from knowing Markdown is how they deal with
  inline code.
date: 2022-01-02T18:25:00.000Z
authors:
  - name: Rowan Cockett
    userId: vKndfPAZO7WeFxLH1GQcpnXPzfH3
    orcid: 0000-0002-7859-8394
    corresponding: null
    email: null
    roles: null
    affiliations:
      - Curvenote
name: code-mark
oxa: oxa:AVQ2dzLNloEd25Io8NbA/Zbimp4EZAt9Q6d3E5eaU
tags:
  - open-source
thumbnail: thumbnails/code-mark.png
---

# Creating Inline Code in a WYSIWYG Editor

```{important}
Try a demo of this article here:

<https://curvenote.github.io/prosemirror-codemark/>
```

One of the biggest frustrations in using what you see is what you get (WYSIWYG) editors when coming from knowing Markdown is how they deal with inline code. This is something that I do very often in writing technical documents, and in Markdown this is super easy, you simply wrap a word in back-ticks (e.g. `` `code` ``). In many ways, the other “marks”, like **bold**, _italic_, {u}`underline` are all easier in applications like Word, Google Docs, Notion, Confluence, etc. because almost everyone knows the shortcut to make something **_stop_** being bold/italic/underlined. This is not the case for inline code, which are similar but no one knows the shortcut to stop something from looking like code. Additionally, every editor application does something subtly different.

This is frustrating to no end.

If you are using Slack or Notion, try creating a code block and then adding something to the start or end after it is created. The behaviour is **_completely_** **_unintuitive_**, you have no idea if the next character you type will be inside or outside of the code-mark, and in Notion, for example, this changes based on if you hit backspace.

```{figure} images/AVQ2dzLNloEd25Io8NbA-kyfA2zoorzdQ86lQcWXd-v1.mp4
:name: BAeIQecc7P

Will the next character you type be inside or outside the code-mark? Are you feeling lucky?!
```

In Slack, if you start a message with code, there is **_literally_** no way to exit the code at the start without using your mouse, deleting the code-mark completely, or knowing the keyboard shortcut. In Slack, the right arrow key also mysteriously turns into a spacebar at the end of the code-mark or feels like it skips one character ahead.

```{figure} images/AVQ2dzLNloEd25Io8NbA-o7qfguj5MicBmAYHpHV2-v1.mp4
:name: Vlrg3r60XE

Editing a code-mark in Slack will mean you have to get out your mouse.
```

The ambiguity of whether the next thing that you type will be “marked” is something that we tolerate for bold/italics/underline — because we all know the escape hatch and don’t have to leave our keyboards. But if you learn the keyboard shortcut for code in Slack, you might be surprised when you use it in Notion that the developer tools in Chrome pop up. Or say you learn the shortcut in Confluence, and jump over to Slack you will open your Mentions — in Notion, it creates a comment! Notion as far as I can tell, doesn’t even _have_ a shortcut for a code-mark.

There are so many other quirks in these applications with regard to how the spacebar, or arrow-keys work, how to deal with one-character of code. I have yet to see a WYSIWYG editor actually do it “right”. Our goal at Curvenote is to make a best-in-class editing experience for technical content, and these are the types of details you either never notice because it just works, or they make people tear their hair out.

### Can you make this a good experience?!

I have tested 20 or so WYSIWYG editors to excruciating detail in this area, but each of these details I have been surprised at in using them in real, non-contrived settings. In the following analysis, I am just showing Notion, Slack, Confluence, and Curvenote, many other editors fall into these same traps. I have included little diagrams to show where a cursor (`|`) is and whether the next character you type will be “marked” `` `code|` ``, or be “unmarked” `` `code`| ``. If you have one of these editors open, try to play along and get annoyed with me!

### Inline Code Creation

Can create code with markdown syntax while typing! `` `code| → `code`| ``

- Notion: ✅, Slack: ✅, Confluence: ✅, Curvenote: ✅

Can create code with markdown syntax, in reverse order (e.g. last, then first): `` code`| → `|code` ``

- Notion: 😵, Slack: ✅, Confluence: 😵, Curvenote: ✅

### Entering and Exiting a Code Mark

You can exit a code mark at the end of a line using the RIGHT arrow key: `` `code|` → `code`| ``

- Notion: 😵, Slack: ✅, Confluence: ✅, Curvenote: ✅
- Slack has (seemingly) different behaviour if you are at the end of the line or not 🙁 turning your arrow key into a spacebar for some reason, but we will give it to them.

You can exit a code mark easily using the LEFT arrow key: `` `|code` → |`code` ``

- Notion: 😵, Slack: 😵, Confluence: ✅, Curvenote: ✅

You can exit a code mark easily using the left arrow key **even at the start of a line**:

- Notion: 😵, Slack: 😵, Confluence: 😵, Curvenote: ✅

Never insert a space when you press an arrow key to visually cheat above: `` `code`| vs `code` | ``

- Notion: ✅, Slack: 😵, Confluence: ✅, Curvenote: ✅

Don’t use the spacebar to sometimes exit the code mark:\
`` `code|` → `code |` ``

- Notion: 😵, Slack: ✅, Confluence: ✅, Curvenote: ✅

You should be always be able to use arrow modifiers to jump between words, select words, and/or jump to the start/end of the line. (i.e. ctrl-a/e, cmd-left/right, cmd-shift-left/right, alt-left/right)

- Notion: ✅, Slack: ✅, Confluence: 😵, Curvenote: ✅
- Confluence takes over the arrow key functionality if you are directly before/after a code-mark, and does special, unexpected things.

````{margin}
```{figure} images/AVQ2dzLNloEd25Io8NbA-52j9lJNpY9eklarCInKQ-v1.png
:name: ax7c84J0NT

You should be able to know if you are inside or outside of the code-mark. Which is different than a space!!
```

````

### No Surprises for Next Character Insertion

You should be able to visually see if the next character that you type will be inside or outside of the code mark: `` `code|` vs `code`| ``, this should happen on both sides of the code, essentially pretending that it is wrapped in backticks.

Color

- Notion: 😵, Slack: ✅, Confluence: 😵, Curvenote: ✅

Position:

- Notion: 😵, Slack: 🤔, Confluence: 🤔, Curvenote: ✅
- Confluence did do this in 2019, but has regressed when testing their editor in 2021, which honestly is even more confusing.
- Slack gets half marks here because it almost always do what you expect, but try putting an explanation mark after `code`!

For those keeping arbitrary score on this minuscule detail:

- Notion: 3/10
- Slack: 6.5/10
- Confluence: 5.2/10
- Curvenote: 💯 🎉 🥳

There are **_plenty_** of other details that we need to polish on the Curvenote editor, but on this _one_ thing, I think it is best in class. I am hoping for the sake of writing technical content on the internet, that by discussing this, creating a requirements list, and open-sourcing our solution — maybe these other editors will up their game in this area! These are some of the things that give WYSIWYG a bad-taste and make them frustrating to use when doing the simplest tiny things.
