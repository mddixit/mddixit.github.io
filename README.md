# Maitreyi Dixit: Portfolio

Personal portfolio site: **https://mddixit.github.io**

Plain HTML/CSS/JS with no build step. Each project gets its own page, with a description, photos, my contributions, and the skills and lessons I gained from it.

## What's in here

| Path | What it is |
|------|------------|
| `index.html` | Homepage (about, project cards, experience, skills, contact) |
| `project.html` | Project page template. Every project uses it: `project.html?p=<slug>` |
| `assets/projects.js` | **All project content. This is the file you edit.** |
| `assets/style.css` | Styling for every page |
| `assets/main.js` | Site behavior (no need to edit) |
| `assets/art.js` | Built-in project illustrations (no need to edit) |
| `images/<slug>/` | Photos for each project |
| `resume.pdf` | Résumé linked from the homepage |

---

## Add a new project

1. Open **`assets/projects.js`** (on GitHub: click the file, then the ✏️ pencil icon).
2. Scroll to the **TEMPLATE** at the bottom and copy the whole `{ ... },` block.
3. Paste it inside the `window.PROJECTS = [ ... ]` list, where you want the project to appear. Order in the list = order on the site.
4. Fill in the fields:
   - `slug`: short id, lowercase with dashes, e.g. `"exoskeleton-glove"`. The page URL and photo folder both use it.
   - `summary`: shown on the homepage card.
   - `overview`, `contributions`, `learnings`: lists of sentences.
   - `skills` (skills gained) and `tools`: short labels.
   - `results`: optional big numbers, e.g. `{ value: "40%", label: "lighter" }`.
   - `links`: optional buttons (GitHub repo, paper, report PDF…).
5. Click **Commit changes**. The homepage card and the new page appear in about a minute.

If the site goes blank after an edit, the usual cause is a missing comma between projects or a missing quote. GitHub shows your changes in the file history, so you can compare against the last version that worked.

## Add photos

1. On GitHub, open the `images` folder, click **Add file → Upload files**, and upload photos. To put them in a new folder, type the folder name first in the file path, e.g. `images/manta-ray/`.
2. In `projects.js`, list them under the project's `images`:
   ```js
   images: [
     { src: "images/manta-ray/1.jpg", caption: "Final prototype" },
     { youtube: "dQw4w9WgXcQ", caption: "Pool trial video" }   // YouTube video id
   ],
   ```
3. Optional main photo at the top of the page and on the homepage card:
   `cover: "images/manta-ray/cover.jpg",`

Notes:
- File names must match exactly, including `.jpg` vs `.JPG`.
- Photos that are listed but not uploaded yet are **hidden automatically** on the live site. When you open `project.html` on your own computer, they show as dashed "Add photo" boxes with the expected file name.
- Resize photos to about 1600 px wide first so pages load quickly.
- Only post photos you're allowed to share. Check with your lab or company about unpublished work.

## Videos, posters and design highlights

These are optional fields in each project. The SLUGBOT entry uses all of them, so copy from there:

- `videos`: MP4 files (H.264) or YouTube ids. Shown large under "See it in action". GitHub's web uploader only accepts files **under 25 MB**. For longer videos, upload to YouTube (it can be unlisted) and use `{ youtube: "VIDEO_ID" }`.
- `posters`: a poster image and PDF, and/or an **interactive poster** link. With `embed: true`, visitors can click **Load interactive poster** to view it inside the page. Some poster sites block embedding. If yours shows a blank or "refused to connect" box on the live site, set `embed: false`, and the page will just show the "Open interactive poster" button.
- `details`: small "design highlight" cards. `detailsTitle` changes the heading.
- `coverPosition`: controls which part of the cover photo stays visible when it's cropped, e.g. `"30% 40%"` (horizontal, vertical).

To turn a poster PDF into an image for the preview, open it and export or screenshot it as a JPG about 2000–2500 px wide.

## Preview before publishing (optional)

Double-click `index.html` to open it in your browser. Everything works locally, including project pages.

---

## Publishing / updating on GitHub Pages

**First time:**
1. Create a public repository named exactly **`mddixit.github.io`**.
2. Click **uploading an existing file** and drag in everything from this folder, **including the `assets` and `images` folders**. Then click **Commit changes**.
3. Go to **Settings → Pages**, set Source to *Deploy from a branch*, Branch to `main` / `(root)`, and click **Save**.
4. Visit https://mddixit.github.io after 1–2 minutes.

**Already published the first version?** Upload the new files the same way. GitHub replaces files with the same name (`index.html`) and adds the new ones (`project.html`, `assets/`, `images/`).

GitHub doesn't upload empty folders. That's fine: a project's folder is created when you upload its first photo.
