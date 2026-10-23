# EE Active Learning Labs site

A plain HTML, CSS and JavaScript site for GitHub Pages. No build step and no tools to install.

## Structure

```
index.html                  Landing page
labs/index.html             Spaces, hours link, location
access/index.html           Training path, access tiers, FAQ
courses/index.html          Course resource directory
courses/es173-lab2/         ES173 Lab 2 student walkthrough
safety/index.html           Lab safety basics
support/index.html          Access request, support and booking routes
404.html                    Page not found
assets/css/site.css         All styling and design tokens
assets/js/config.js         EDIT THIS to set your form, booking and email links
assets/js/site.js           Menu and link wiring
assets/img/                 Images and favicon
.nojekyll                   Tells GitHub to publish the files as they are
```

## Wire up your links

Open `assets/js/config.js` and paste in your Google Form, Calendly and email values.
Any buttons without a value show "link coming soon" until you do.

## Preview on your computer

Run `python3 -m http.server 8000` inside this folder, then open http://localhost:8000.
Opening the files by double click will not follow folder links correctly.

## Add a course page

1. Copy the folder `courses/es173-lab2` and rename it, for example `courses/ese135-ctd`.
2. Replace the `index.html` inside it.
3. Add a card for it in `courses/index.html`.

## Before you publish

- Confirm the access tier wording in `access/index.html` matches the final policy.
- Confirm room numbers and the address.
- Anything in this repository is public when the repository is public. Do not add answer keys, TF guides, grading notes, student data or internal staffing details.
- If your site lives at a project address such as `https://ORG.github.io/REPO/`, the `404.html` home link needs `/REPO/` instead of `/`.
