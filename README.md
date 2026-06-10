# rpeters4.github.io

Personal portfolio site for Ryan Peters, an M.S. Computer Science student at Syracuse University researching formal verification applied to distributed ML training systems.

Built with [Astro](https://astro.build), TypeScript, and [Tailwind CSS](https://tailwindcss.com). Deployed to [GitHub Pages](https://pages.github.com).

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

Follow these steps to publish the site at `https://rpeters4.github.io` directly from your command line:

1. **Configure Pages (One-time Setup).** 
   In your repository settings on GitHub, go to **Settings > Pages**.
   * Under **Build and deployment > Source**, select **"Deploy from a branch"**.
   * Under **Branch**, select `main` and change the folder option from `/ (root)` to `/docs`.
   * Click **Save**.

2. **Deploy with a Single Command.** 
   Run the following terminal command. This script will automatically rebuild your Astro site into `/docs`, stage all changed files, commit them, and push the branch to GitHub:
   ```bash
   npm run deploy
   ```

3. **Visit the site.** 
   Go to `https://rpeters4.github.io`. It may take a couple of minutes to go live after pushing. HTTPS is automatic on `github.io`.

## Features

- Single-page portfolio with smooth-scroll navigation and scroll-spy
- Light/dark theme toggle with system preference detection (no flash of wrong theme)
- Live GitHub projects feed (fetched client-side, cached in sessionStorage)
- Interactive pipeline parallelism visualization (naive vs. 1F1B scheduling)
- Copy-to-clipboard on email addresses
- Fully responsive, accessible, and respects prefers-reduced-motion
- Zero-cost hosting on GitHub Pages via static branch deployment

## Tech Stack

- **Astro** (static site generation with islands architecture)
- **TypeScript** (strict mode)
- **Tailwind CSS v4** (via @tailwindcss/vite)
