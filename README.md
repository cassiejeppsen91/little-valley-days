# Little Valley Days Static Website

This is a simple static website built for GitHub Pages.

## Files

- `index.html` — Weeknight Schedule page
- `saturday.html` — Saturday Schedule page
- `style.css` — all colors, spacing, buttons, cards, and mobile styles
- `script.js` — smooth accordion animations and back-to-top button
- `images/` — website images

## Publishing on GitHub Pages

Upload the contents of this folder to your repository root. In GitHub, go to Settings → Pages → Deploy from a branch → `main` → `/root`.

## Editing events

Open `index.html` or `saturday.html` and search for the event name. Each event is inside a clearly labeled block like:

```html
<details class="event">
  <summary>...</summary>
  <div class="event-body">
    ...event text...
  </div>
</details>
```

Edit only the text, links, dates, and phone numbers inside each event unless you want to change the design.

## Design notes

The site keeps the original Little Valley Days look and feel, but adds:

- smoother accordion animations
- better mobile spacing
- cleaner typography using system fonts for faster loading
- nicer button hover states
- a back-to-top button on long pages
- accessibility improvements like focus outlines and a skip link

## Important

The Saturday page was recreated from a PDF image. Please proofread it before publishing, especially dates, registration instructions, links, and phone numbers.
