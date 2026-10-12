# Davis Mesmer: Game Producer Portfolio

A static portfolio site. No build step, no framework, free to host on GitHub Pages.

## What's here

| File | What it's for |
| --- | --- |
| `index.html` | Home page: intro, project schedule, project list, skills, contact |
| `project.html` | One template for every project page (`project.html?p=crypt-dig`) |
| `resume.html` | Résumé page: highlights plus your PDF, viewable and downloadable |
| `resume.pdf` | **Add this.** Your résumé. Replace the file whenever you update it |
| `assets/data.js` | **All your content.** Edit this to change text or add projects |
| `assets/style.css` | Colors, type and layout |
| `assets/main.js` | Builds the pages from `data.js` |
| `images/` | Covers and screenshots, converted to WebP (35 MB down to about 2 MB) |

## Before you publish

1. Put your résumé in the site folder named `resume.pdf`.
2. Check the top section of `assets/data.js`: intro, email, LinkedIn, résumé highlights and the two credential badges.

## Publish on GitHub Pages

1. Create a new public repository named **`DatFrozenCube.github.io`** (your username plus `.github.io`).
2. Upload everything in this folder to the repository, keeping the folder structure. You can drag and drop the files on the repository page with **Add file > Upload files**.
3. Go to **Settings > Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. After a minute or two, the site is live at `https://datfrozencube.github.io`.

### Using a custom domain

In **Settings > Pages > Custom domain**, enter your domain. Then, at your domain registrar, add the DNS records GitHub shows you. Turn on **Enforce HTTPS** once it becomes available. Cancel Webflow hosting only after the new site is live on your domain.

## Adding a project

1. Put a cover and screenshots in `images/`. WebP or JPG around 1600 px wide is ideal.
2. In `assets/data.js`, copy an existing project entry, give it a new `slug`, and update the fields.
3. `kind` sets the color on the schedule: `"production"`, `"development"` or `"both"`.
4. `featured: true` puts it in the top section. `hidden: true` keeps it off the site.
5. For a playable build, set `playEmbed.id` to the number from itch.io's embed code (`itch.io/embed-upload/<id>`).

## Previewing locally

Open `index.html` in a browser. Or, from this folder, run `python -m http.server` and visit `http://localhost:8000`.
