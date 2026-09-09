<div align="center">

# Personal Portfolio

**Jan Camps Atmetller — IT Systems Technician & developer, Barcelona.**

Single-page portfolio and CV, trilingual (Catalan · Spanish · English),
built with vanilla HTML, CSS and JavaScript — no framework, no build step.

[**→ 005jan.github.io**](https://005jan.github.io)

</div>

---

## What it does

- **Instant language switching** between CA / ES / EN, entirely client-side —
  no page reload, no separate builds. Every translatable node carries a
  `data-i18n` key and the strings live in one `translations` object in
  [`main.js`](main.js). The choice is remembered in `localStorage`
  (`cv-lang`), defaulting to Catalan.
- **Single-page layout** with seven sections: about, experience, education,
  skills, projects, languages and certifications.
- **Scrollspy navigation** that highlights the section currently in view, plus
  reveal-on-scroll animations.
- **Dark theme**, responsive down to mobile.

## Stack

Plain HTML5 · CSS3 (custom properties, flexbox, grid) · vanilla JavaScript ·
[Font Awesome](https://fontawesome.com/) from CDN. Deployed on **GitHub Pages**
from the `main` branch.

```
index.html    Markup and all data-i18n keys
main.js       Translations, language switcher, scrollspy, animations
style.css     Theme, layout and animations
profile.jpg   Profile photo
```

## Running it locally

No dependencies and no build. Serve the folder over HTTP:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

Opening `index.html` straight from the filesystem mostly works, but a local
server avoids `file://` restrictions.

## Deployment note

GitHub Pages is configured from the repository root. If a deploy ever hangs
waiting for approval, check **Settings → Environments → `github-pages`** and
make sure the deployment branch rule is set to *No restriction* — a protection
rule there silently blocks the Pages workflow.

## Adding or changing a translation

1. Add the key to the element in `index.html`: `data-i18n="my_key"`.
2. Add `"my_key"` to the `ca`, `es` and `en` blocks of `translations` in
   `main.js`.

A key missing from one language leaves that element blank, so add all three.

---

## Copyright

© 2026 Jan Camps Atmetller. All rights reserved.

This repository is published so the site can be served from GitHub Pages, and
is readable as a work sample. It carries no open-source licence: the code, the
profile photo and the CV text are not offered for reuse or redistribution.
