# EE Active Learning Labs site

A plain HTML, CSS and JavaScript site for GitHub Pages. No build step and no tools to install.

## Structure

```
index.html                  Landing page
labs/index.html             Spaces, hours link, location
access/index.html           How access is tied to courses, and FAQ
courses/index.html          Searchable course list
courses/course/index.html   One page that shows any course, chosen by the link
courses/es173-lab2/         ES173 Lab 2 student walkthrough
safety/index.html           Lab safety basics
support/index.html          Access request, support and booking routes
404.html                    Page not found
assets/css/site.css         All styling and design tokens
assets/js/config.js         EDIT THIS to set your support form, Calendly and email links
assets/js/courses.js        EDIT THIS to manage the course list and per-course links
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

## Manage courses

All courses live in `assets/js/courses.js`. Each one gets a page automatically at `courses/course/#id`.

- To add a course, copy a line in the list and change the `id` and `code`.
- To give a course its own lab guide link, add `labGuide:'https://...'` to its line. Without it, the page opens the shared lab activities folder.
- To point a course at its Canvas site, add `canvas:'https://...'`.
- To change the access message for one course, add `access:'Your text'`.
- The default access message and shared folder link are at the top of the file.
- The tech support link on every course page comes from `booking` in `assets/js/config.js`.

## Before you publish

- Confirm the access page wording matches the current policy.
- Check sharing on the Google Drive folder. Students must be able to open it, and it should hold only student facing guides.
- Confirm room numbers and the address.
- Anything in this repository is public when the repository is public. Do not add answer keys, TF guides, grading notes, student data or internal staffing details.
- If your site lives at a project address such as `https://ORG.github.io/REPO/`, the `404.html` home link needs `/REPO/` instead of `/`.
