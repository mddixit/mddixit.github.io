# Maitreyi Dixit: Portfolio

Personal portfolio site: **https://mddixit.github.io**

A single-page site (plain HTML/CSS/JS, no build step) covering my soft-robotics research at Carnegie Mellon, projects, experience, and skills.

## Files

| File | What it is |
|------|------------|
| `index.html` | The whole website |
| `resume.pdf` | Résumé linked from the "Download résumé" button |
| `README.md` | This file |

---

## How to publish on GitHub Pages (about 5 minutes)

1. **Sign in** at [github.com](https://github.com) as `mddixit`.
2. **Create the repository.** Click **+** (top right) and choose **New repository**.
   - Name it exactly: `mddixit.github.io`
   - Set it to **Public**.
   - Click **Create repository**.
3. **Upload the files.** On the new repo page, click **uploading an existing file**. Drag in `index.html`, `resume.pdf` and `README.md`, then click **Commit changes**.
4. **Turn on Pages.** Go to **Settings → Pages**. Under **Build and deployment**, set **Source** to *Deploy from a branch* and **Branch** to `main` / `(root)`, then click **Save**.
5. **Wait 1–2 minutes**, then visit **https://mddixit.github.io**. The **Actions** tab shows deployment progress.

## Updating the site later

- **Edit text:** open `index.html` on GitHub, click the ✏️ pencil icon, make changes, then click **Commit changes**. The site updates in about a minute.
- **New résumé:** upload a new file named `resume.pdf`. It replaces the old one.
- **Add a project:** copy one `<article class="card ...">…</article>` block in the *Projects* section and edit its text.
- **Add real photos:** upload an image (e.g. `manta.jpg`). Then, in the project card, replace the `<svg>…</svg>` inside `<div class="art">` with
  `<img src="manta.jpg" alt="Manta ray robot" style="width:100%;height:100%;object-fit:cover">`

## Optional polish

- **Pin it on your profile:** on github.com/mddixit, click **Customize your pins** and select this repo.
- **Add the link to LinkedIn:** go to Contact info → Website and add `https://mddixit.github.io`.
- **Custom domain:** buy a domain, then enter it under Settings → Pages → Custom domain.
