# Rashid Ismael Rashid — Portfolio

A personal portfolio built with Nuxt 4, Vue 3, and TypeScript. It introduces
Rashid's background, selected projects, technical interests, education, and
leadership experience.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Nuxt in your terminal.

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

The GitHub Actions workflow in `.github/workflows/deploy.yml` generates and
deploys the static site when you push to the `main` or `master` branch.

1. Create a GitHub repository named `rashid-portfolio` under `R2ashid10`.
2. Push this project to the repository.
3. In the repository, open **Settings → Pages** and set the source to
   **GitHub Actions**.
4. When the workflow completes, share
   `https://r2ashid10.github.io/rashid-portfolio/`.

## Project structure

- `app/pages/[...slug].vue` contains the portfolio sections and profile content.
- `app/assets/css/portfolio.css` contains the responsive site styles.
- `public/rashid.jpeg` is the profile portrait.
