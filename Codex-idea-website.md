# Portfolio-to-PhD Website Handoff

**Owner:** Elizabeth Van Le  
**Repository:** [vanle2000/my-portfolio](https://github.com/vanle2000/my-portfolio)  
**Live site:** [vanle2000.github.io/my-portfolio](https://vanle2000.github.io/my-portfolio/)  
**Session date:** September 16, 2026

## 1. Purpose of This Work

The original website presented Elizabeth primarily as an industry data
scientist, analytics engineer, and BI practitioner. The goal of this session
was to begin transforming it into a website that can also support PhD
applications without discarding the strong technical portfolio already there.

The selected direction is a **research-first editorial portfolio**:

- Academic and research identity appears before industry positioning.
- Research questions lead; technologies support the story.
- Writing is warm, specific, reflective, and quietly confident.
- Projects explain reasoning, evaluation, limitations, and learning.
- Industry experience remains visible as evidence of technical maturity.
- The site should feel personal without becoming informal or overly
  autobiographical.

The current implementation now includes both the research-focused content
rewrite and a restrained academic visual redesign.

## 2. Current Deployment State

The main rewrite was committed and pushed to `main`:

```text
95d5c8e Rewrite portfolio for research-focused PhD applications
```

The GitHub Pages workflow completed successfully, and the deployed homepage was
verified to contain the new research-oriented hero copy.

At the end of the implementation:

- Local `main` and remote `origin/main` were synchronized.
- YAML data files passed parsing validation.
- `git diff --check` passed.
- The GitHub Actions Jekyll build and Pages deployment succeeded.

Before testing the simplified sans-first typography direction, the previous
deployed design was preserved in the Git tag:

```text
design-before-simple-typography-2026-09-16
```

Before adding the scroll-driven Experience road, the sans-first version was
also preserved as:

```text
design-before-driving-road-2026-09-16
```

## 3. Reference Websites Supplied

These are all the websites and repositories provided during the session.

### Elizabeth's Current Website

- [Live portfolio](https://vanle2000.github.io/my-portfolio/)
- [Portfolio source repository](https://github.com/vanle2000/my-portfolio)

### Academic Website References

- [Jen-Hao Cheng](https://jen-haocheng.com/#/)
- [Lenny Aharon — Research](https://lennyaharon.github.io/research.html)
- [Tiffany Cai](https://tc2718.github.io/)
- [Fangyi Chen](https://fangyi-chen.github.io/)
- [Xinming Dai — Source Repository](https://github.com/Xinming-Dai/Xinming-Dai.github.io)
- [Geonhee Han](https://geonhee619.github.io/)

## 4. What Was Learned From the References

No single reference should be copied directly. The recommended design combines
the strongest parts of several examples.

### Jen-Hao Cheng

**Useful ideas**

- Research projects are treated as visual, substantial bodies of work.
- The personal path into research is visible.
- Advisor, institution, current position, and research direction are stated
  clearly.
- Individual project pages provide room for methods, media, and outcomes.

**Avoid copying**

- A very long life timeline.
- Hover-only project information.
- React and hash routing for a mostly static academic website.
- Excessive narrative before readers reach the main research evidence.

### Lenny Aharon

**Useful ideas**

- A precise research-interest paragraph appears before the publication list.
- Publications include authors, venue or status, paper, code, and BibTeX.
- Research visuals make papers easier to understand and remember.
- Presentations, invited talks, and teaching extend the academic story.

**Avoid copying**

- Very dense pages without enough visual breathing room.
- A dark treatment that could overpower Elizabeth's warmer existing identity.
- Listing unfinished work in a way that may appear inflated or ambiguous.

### Tiffany Cai

**Useful ideas**

- This is the strongest reference for admissions-oriented content hierarchy.
- Role, institution, advisor, and research interests are immediately clear.
- Research entries include paper, code, slides, status, and a short summary.
- Expandable summaries support both skimming and deeper reading.

**Avoid copying**

- A generic academic-template appearance.
- Too little visual identity or personality.

### Fangyi Chen

**Useful ideas**

- Strong visual balance between academic credibility and polished presentation.
- Publication cards use thumbnails, authors, venue, and artifact links.
- Social and academic links are immediately accessible.
- The hero clearly communicates current role and organization.

**Avoid copying**

- A long, animation-heavy single page.
- A decorative experience timeline that competes with publications.
- Too many sections in the main navigation.

### Xinming Dai

**Useful ideas**

- Clear academic CV ordering: publications, research experience, teaching,
  professional experience, and education.
- Simple content management through structured YAML.
- The page is easy to print and scan.

**Avoid copying**

- Making the whole website feel like a web version of a résumé.
- Broad statements such as being open to any research area.
- Giving too little space to research motivation and future questions.

### Geonhee Han

**Useful ideas**

- Very fast to understand.
- Name, program, field, mentors, publications, education, and contact are
  visible on one page.
- Publication cards are simple and readable.
- A visible "last updated" date signals that the site is maintained.

**Avoid copying**

- An experience so minimal that research contributions cannot be explained.
- Omitting deeper research/project pages.
- Three-column publication layouts when entries contain substantial text.

## 5. Recommended Voice and Writing Style

The desired voice is:

- First person.
- Warm but not casual.
- Confident without self-promotion.
- Specific about methods and contributions.
- Honest about uncertainty and limitations.
- Reflective about how one experience led to the next.
- Forward-looking without claiming a fixed research agenda too early.

### Preferred Flow

For biography and experience writing:

```text
What drew me to the problem
→ what I worked on
→ what I contributed
→ what the experience taught me
→ how it shapes the questions I want to pursue next
```

For project and research pages:

```text
The question
→ data and context
→ approach
→ evaluation
→ observed result
→ limitations
→ what I learned
```

### Preferred Language

Use:

- "I became interested in..."
- "I wanted to understand..."
- "My contribution included..."
- "The result suggested..."
- "This project taught me..."
- "The analysis is descriptive rather than causal."
- "A strong metric is not automatically strong evidence."

Avoid:

- "Cutting-edge"
- "Revolutionary"
- "State-of-the-art" without evidence and context
- "Leveraged" when "used" is clearer
- Long lists of technologies without explaining the research question
- Claims that imply causality when the analysis only shows association
- Generic phrases such as "turning data into actionable insights"

## 6. Research Positioning Chosen

The working umbrella is:

> Reliable machine learning for scientific and high-stakes data.

The current research themes are:

1. Statistical learning for scientific data
2. Uncertainty and robust evaluation
3. Causal inference and experiment design
4. Human-centered AI

These interests were selected because they can connect:

- Mass spectrometry imaging and nanoparticle research
- Immune-data work at Adaptive Biotechnologies
- Molecular dynamics and membrane modeling
- Mechanistic model validation at Merck
- Applied analytics and production data systems
- Future graduate work involving reliable AI and human judgment

The themes should eventually be narrowed according to the exact PhD programs
Elizabeth plans to target. A computational biology application, statistics
application, biomedical informatics application, and human-centered AI
application should not all use an identical research statement.

## 7. Files Changed During the Main Rewrite

### Site Identity and Biography

- `_config.yml`
  - Replaced the industry-only SEO description with a research-oriented one.

- `_data/about.yml`
  - Changed the role to "Data Scientist & Computational Researcher."
  - Rewrote the hero tagline.
  - Rewrote the full biography as a coherent path from biochemistry and
    biomedical research into data science and reliable modeling.

### Research

- `_data/research_page.yml`
  - Replaced the literary quote with an original research introduction.
  - Reorganized broad interests into four connected research themes.
  - Rewrote both research experiences around motivation, contribution,
    outcome, and intellectual development.

- `_data/research.yml`
  - Rewrote the membrane-modeling publication page.
  - Clarified that Elizabeth co-authored the publication.
  - Added sections for the research question, role, methods, significance, and
    lessons learned.

- `research/index.html`
  - Replaced the quotation treatment with a research thesis and introduction.

- `_layouts/detail.html`
  - Added a direct publication link for records containing `pubmed`.

### Homepage and Navigation

- `_data/navigation.yml`
  - Changed "About Me" to "About."
  - Placed Research before Projects.

- `_includes/hero.html`
  - Added Google Scholar to the primary hero links.

- `index.html`
  - Moved Research before Projects.
  - Renamed the project section to "Selected Projects."
  - Added stronger links into the Research and Projects sections.

### Projects

- `_data/projects.yml`
  - Rewrote all six project summaries and narratives.
  - Reframed each project around a question, method, evaluation, limitation,
    and lesson.
  - Replaced causal-sounding language in the GitHub support project.
  - Added explicit caution around the stock model's unusually high R².
  - Rewrote subtitles to sound less like product marketing.

- `projects/index.html`
  - Added an introduction explaining how Elizabeth approaches projects.

### Experience, Updates, and Contact

- `_data/resume.yml`
  - Rewrote the Experience-page summary in a research-oriented voice.

- `_data/news.yml`
  - Rewrote updates to focus on education, research, and professional work.
  - Removed the public H1B update.
  - Removed unnecessary health disclosure.
  - Updated Georgia Tech from future-tense acceptance language to beginning the
    program in August 2026.

- `_includes/contact-cta.html`
  - Replaced generic networking copy with research-oriented outreach language.

- `contact/index.html`
  - Rewrote the contact heading and invitation.

### Styling

- `_sass/_anthropic-overrides.scss`
  - Added styling for the new research introduction.

## 8. Important Editorial Assumptions to Confirm

These statements were based on existing repository content and should be
verified by Elizabeth.

### Georgia Tech Status

The site now says Elizabeth began the online M.S. in Computational Data
Analytics in August 2026 because `_data/resume.yml` listed:

```text
Aug 2026 – Expected Dec 2028
```

Confirm enrollment and confirm that the degree title matches the university's
official wording.

### Adaptive Biotechnologies Data

The previous website described the same internship using several terms:

- Flow cytometry
- Single-cell RNA sequencing
- Bioassay data
- ImmuneCODE
- T-cell receptor response

Because these descriptions appeared inconsistent, the new public copy uses the
broader phrase **"high-dimensional immune data."**

Before making this section more specific, confirm:

- Which data modality or modalities were used
- Whether the 100K figure refers to cells, samples, or observations
- Whether the work was part of ImmuneCODE or Antigen Map
- The exact nature of the Microsoft AI for Science collaboration
- Which contributions can be discussed publicly

### Research Contributions

Confirm the exact CRediT-style contribution to the JoVE publication, especially:

- Software
- Formal analysis
- Methodology
- Validation
- Visualization
- Investigation
- Writing or review

This is safer and more persuasive than broad language such as "developed and
published the protocol."

## 9. Known Issues Not Yet Resolved

### P1: Portrait Asset

The broken local headshot reference was replaced with Elizabeth's public GitHub
profile image. It is displayed as a small, supporting 4:5 portrait rather than
the dominant homepage visual.

For better long-term control and performance, replace the external image later
with an optimized local portrait:

- At least 1000 × 1250 pixels
- JPEG or WebP
- Under approximately 300 KB
- Neutral background and enough surrounding space for responsive cropping

### P0: Academic CV

`assets/resume.pdf` is still an industry résumé. It emphasizes:

- Skills
- Quantified business impact
- Professional experience
- Industry projects

Create a separate academic CV containing:

- Research interests
- Education
- Publications
- Research experience
- Presentations and posters
- Teaching or mentoring
- Awards
- Service
- Selected technical experience

Do not relabel the existing PDF as a CV until the document itself is replaced.

### Implemented: Academic Visual Redesign

- Use Newsreader for editorial headings, Rethink Sans for body copy and
  navigation, and JetBrains Mono only for dates, tags, code, and compact
  technical metadata.
- Replaced animated header, hero, contact, and footer gradients with restrained
  solid surfaces.
- Rebuilt the homepage hero as a text-led 65/35 composition.
- Moved Latest Updates below the hero and removed the internal scroll box.
- Reduced the portrait to a supporting 4:5 identity card.
- Added a membrane-to-model workflow illustration as the primary hero visual.
- Rebuilt the Experience page as a winding road with alternating academic and
  professional stops. A custom top-down two-seat roadster follows the route as
  the visitor scrolls, while reduced-motion visitors see it parked near the
  beginning.
- Replaced résumé-style accomplishment lists on the Experience page with one
  concise purpose statement for each role and degree. The detailed quantified
  bullets remain preserved in `_data/resume.yml`.
- Removed the continuous hero parallax loop.
- Reduced entrance motion and added `prefers-reduced-motion` support.
- Retained muted blue as the primary accent and used restrained borders instead
  of heavy shadows.

### P1: Accessibility and Motion

Previously identified issues still include:

- Skip links target `#site-nav` and `#main`, but the custom markup does not
  consistently provide those IDs.
- Animated content starts at `opacity: 0`; content can remain invisible if
  JavaScript fails.
- Mobile navigation can wrap into a tall sticky header.

### P1: SEO and Structured Data

The live structured-data output previously rendered the Person name as `null`.
Add and verify:

- `author.name`
- Academic role
- Profile image
- Google Scholar
- GitHub and LinkedIn
- Open Graph image
- Page-specific descriptions
- Favicon

### P1: Evidence and Reproducibility

Every major project should eventually include:

- Dataset source and license
- Train/validation/test definition
- Baseline models
- Evaluation design
- Leakage checks
- Confidence intervals where appropriate
- Limitations
- Reproduction instructions
- Exact individual contribution

## 10. Recommended Future Homepage

### Navigation

```text
Research · Projects · CV · About
```

Contact can be presented as a persistent email link rather than a full
navigation item.

### Hero

The hero should answer four questions immediately:

1. Who is Elizabeth?
2. What problems interest her?
3. What preparation does she have?
4. Where can a reviewer find evidence?

Recommended content hierarchy:

```text
Elizabeth Van Le
Data Scientist & Computational Researcher

One- or two-sentence research thesis

[Research] [Academic CV] [Google Scholar] [Email]

Current M.S. program and professional role
```

### Section Order

1. Research thesis
2. Current research questions
3. Featured publication
4. Research experience
5. Selected technical projects
6. Education and current status
7. Three recent academic updates
8. Contact

## 11. Recommended Publication Component

Each publication should eventually support:

```yaml
title:
authors:
venue:
year:
status:
thumbnail:
paper:
doi:
pubmed:
code:
data:
slides:
bibtex:
summary:
my_contribution:
```

Suggested visible structure:

```text
[Research image]

Paper title
Authors with Elizabeth highlighted
Venue and year

Two-sentence plain-language summary

My contribution:
One precise contribution statement

[Paper] [Code] [Data] [BibTeX]
```

## 12. Recommended Project Selection

The homepage should show no more than three projects.

Suggested candidates:

1. Membrane modeling publication
2. Chronic disease risk analysis
3. Marathon performance analysis or another project with strong statistical
   methodology

The stock and advertising projects can remain in the complete Projects
archive, but they should not dominate the research-facing homepage.

## 13. Content Maintenance

Most content remains editable through `_data/*.yml`:

| File | Purpose |
|---|---|
| `_data/about.yml` | Hero identity and biography |
| `_data/research_page.yml` | Research agenda and research experience |
| `_data/research.yml` | Publications and research detail pages |
| `_data/projects.yml` | Project summaries and detail pages |
| `_data/resume.yml` | Experience, education, and skills |
| `_data/news.yml` | Homepage updates |
| `_data/contact.yml` | Email, social links, Scholar, and résumé |
| `_data/navigation.yml` | Main navigation |

When adding copy:

- Prefer evidence over adjectives.
- Keep each paragraph focused on one idea.
- Define technical terms when a non-specialist may read them.
- Avoid repeating the same accomplishment on multiple pages.
- Update dates and status language at least once per semester.
- Archive stale news rather than keeping a long homepage feed.

## 14. Development and Deployment

The repository uses Jekyll and Minimal Mistakes.

Local development, when Ruby and Bundler are installed:

```bash
bundle install
bundle exec jekyll serve --livereload
```

Deployment:

```text
Push to main
→ GitHub Actions builds Jekyll
→ GitHub Pages deploys the generated site
```

During this session, the local environment did not have Ruby/Bundler, so YAML
was validated locally and the full Jekyll build was validated through GitHub
Actions.

## 15. GitHub Authentication Note

GitHub CLI was installed at:

```text
/home/ccuser/.local/bin/gh
```

The environment was authenticated as `vanle2000` using GitHub's device flow.
The CLI reported that credentials were stored in:

```text
/home/ccuser/.config/gh/hosts.yml
```

This environment did not provide an encrypted credential keychain. To remove
the stored authentication later:

```bash
/home/ccuser/.local/bin/gh auth logout
```

Never commit the GitHub CLI configuration or token files to the repository.

## 16. Recommended Next Work Session

Complete these tasks in order:

1. Replace the externally hosted GitHub portrait with an optimized local image.
2. Confirm Georgia Tech degree wording and current enrollment status.
3. Resolve the Adaptive Biotechnologies data-modality descriptions.
4. Create a genuine academic CV.
5. Build a richer featured-publication component around the new research
   figure.
6. Fix skip-link targets and progressive enhancement for entrance transitions.
7. Add author structured data and an Open Graph image.
8. Review every numerical claim against the corresponding repository,
   notebook, or source data.
9. Tailor the research thesis to the actual PhD discipline and programs.

## 17. One-Sentence North Star

> The website should leave a faculty reviewer thinking: Elizabeth has followed
> a thoughtful path from biomedical experiments to computational modeling, she
> understands that reliable research requires more than a strong metric, and
> she is ready to develop a focused research agenda around trustworthy
> statistical and machine learning methods.
