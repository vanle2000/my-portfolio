# Elizabeth Van Le — Portfolio

Jekyll 4.3 + Minimal Mistakes. Deployed via GitHub Actions to GitHub Pages.

## Quick start (local, requires Ruby 3.2+)

```bash
bundle install
bundle exec jekyll serve --livereload
```

Open `http://localhost:4000`.

## Deployment

Push to `main` — GitHub Actions builds and deploys automatically.
Requires GitHub Pages enabled with source set to **GitHub Actions** in repo Settings → Pages.

## Content

All content lives in `_data/*.yml`:

| File | Purpose |
|------|---------|
| `projects.yml` | Project entries (slug, title, tags, body) |
| `research.yml` | Research/papers |
| `news.yml` | Homepage news feed |
| `about.yml` | Bio, skills, photo path |
| `resume.yml` | Experience, education, certifications |
| `contact.yml` | Email, GitHub, LinkedIn, resume PDF path |
| `navigation.yml` | Masthead nav links |

Detail pages in `projects/` and `research/` are 5-line front-matter stubs — all content is loaded from data by `_layouts/detail.html`.

## Design tokens

CSS custom properties in `_sass/minimal-mistakes/skins/_anthropic.scss`.
Component styles in `_sass/_anthropic-overrides.scss`.
