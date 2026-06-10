# rpeters4.github.io

Personal portfolio site for Ryan Peters, an M.S. Computer Science student at Syracuse University researching formal verification applied to distributed ML training systems.

Built with [Astro](https://astro.build), TypeScript, and [Tailwind CSS](https://tailwindcss.com). Deployed to [GitHub Pages](https://pages.github.com) via GitHub Actions.

## Run Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Deploy to GitHub Pages

The site is deployed automatically via GitHub Actions. Every push to `main` triggers a build and deploy.

### One-Time Setup

1. Go to your repository on GitHub: **Settings > Pages**.
2. Under **Build and deployment > Source**, select **"GitHub Actions"**.
3. That is it. The workflow at `.github/workflows/deploy.yml` handles the rest.

### Deploying Changes

Run the deploy script from the project root:

```bash
npm run deploy
```

This stages all changes, commits them, and pushes to `main`. GitHub Actions will then:

1. Check out the code
2. Build the Astro site (with `GITHUB_TOKEN` for any API calls)
3. Deploy the built output to GitHub Pages

The site will be live at **https://rpeters4.github.io** within a couple of minutes.

### Manual Trigger

You can also trigger a deploy manually from the GitHub Actions tab using the **"Run workflow"** button (the workflow supports `workflow_dispatch`).

## Features

- Single-page portfolio with smooth-scroll navigation and scroll-spy
- Light/dark theme toggle with system preference detection (no flash of wrong theme)
- Curated featured projects section with role badges, tech pills, and repo links
- Interactive pipeline parallelism visualization (naive vs. 1F1B scheduling)
- Copy-to-clipboard on email addresses
- Fully responsive, accessible, and respects prefers-reduced-motion
- Zero-cost hosting on GitHub Pages via GitHub Actions

## Tech Stack

- **Astro** (static site generation with islands architecture)
- **TypeScript** (strict mode)
- **Tailwind CSS v4** (via @tailwindcss/vite)
