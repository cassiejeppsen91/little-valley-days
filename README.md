# Little Valley Days Static Website

This is a simple static website for GitHub Pages.

## Files

- `index.html` — Weeknight Schedule page
- `saturday.html` — Saturday Schedule page
- `style.css` — all colors, fonts, spacing, and card styles
- `script.js` — keeps only one accordion open at a time
- `images/` — website images

## How to publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload every file and folder from this package into the repository root.
3. Go to Settings → Pages.
4. Under "Build and deployment," choose: Deploy from a branch.
5. Choose branch: `main`, folder: `/root`.
6. Save.

GitHub will give you a temporary address first. After it is working, you can connect `littlevalleydays.com` in the Pages settings.

## How to edit events

Open `index.html` or `saturday.html` and search for the event name. Edit the text between that event's `<details class="event">` and `</details>` section.

## Important

The Saturday page was recreated from a PDF image. Please proofread it before publishing, especially dates, registration instructions, and phone numbers.
