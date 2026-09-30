# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

The main website for LocalHugDealer Studios, a game design company. The site is a portfolio of the studio's games. Each game gets its own dedicated page. The first game is **Enemy No. 1** (in development).

The site will be published on GitHub (GitHub Pages). It is plain static HTML and CSS with no framework or build step, so there are no build, lint, or test commands. Open `index.html` in a browser to preview.

## Structure

- `index.html`: the studio home page. Page-specific styles live in its `<style>` block.
- `assets/`: studio-wide brand assets shared by every page.
  - `assets/css/base.css`: shared site chrome. Palette custom properties, `@font-face` rules, the `.btn` style, and the `drift`/`bob` cloud animations. Link it first on every page.
  - `assets/images/cloud.svg`: the outlined cloud, drawn to match the logo style. Reuse it rather than drawing new clouds.
  - `logo.png` has a transparent background. The "Green" logo variants have a solid green background, so they show as a visible square on anything that isn't flat `--green`.
  - `assets/images/logo/`: studio logos (plain and with heading, default and green variants). Filenames contain spaces, so URL-encode them or rename them before referencing.
  - `assets/fonts/Montserrat/`: the brand font (SIL OFL, see `OFL.txt`). It ships as variable fonts (`Montserrat-VariableFont_wght.ttf` plus italic) and static weights in `static/`. Prefer the variable files.
  - `assets/colours/colour_palette.png`: the brand palette (see below).
- `games/<game-slug>/`: assets owned by a single game, kept separate from studio branding. Slugs are kebab-case (for example `games/enemy-no-1/`, with `font/`, `gifs/`, and `images/` subfolders). A game page should pull its own look from its folder and use `assets/` only for shared site chrome.

Git does not track empty directories, so the `games/enemy-no-1/` subfolders only appear in the repo once they contain files.

## Colour palette

The brand colours are a subset of the AAP-64 palette. `colour_palette.png` is the source of truth. Its colours, row by row:

| Row | Colours |
| --- | --- |
| 1 | `#14A02E` `#DF3E23` `#249FDE` `#BC4A9B` `#5DAF8D` `#8B93AF` `#F4D29C` |
| 2 | `#1A7A3E` `#FFD541` `#B4202A` `#285CC4` `#793A80` `#328464` `#6D758D` `#DBA463` |
| 3 | `#24523B` `#F9A31B` `#73172D` `#143464` `#23674E` `#4A5462` `#BB7547` |
| 4 | `#3B1725` `#333941` `#71413B` |

Use only these colours for site styling, plus white (`#FFFFFF`) as the page background. They are defined once as custom properties in `assets/css/base.css`. Don't add ad hoc hex values. The primary brand colour is `#328464` (`--green`). Avoid dark text on green backgrounds; use white or cream instead.

## Hosting notes

GitHub Pages serves static files only. A project site is served from a subpath (`<user>.github.io/<repo>/`) unless a custom domain is configured, so use relative asset paths or a configurable base path.
