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

Follow these steps to publish the site at `https://rpeters4.github.io`:

1. **Create the repository.** On GitHub, create a new **public** repository named exactly `rpeters4.github.io`.

2. **Push this project.** Initialize git in this directory, add the remote, and push to `main`:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git remote add origin https://github.com/rpeters4/rpeters4.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. **Configure Pages.** In the repository on GitHub, go to **Settings > Pages** and set the build and deployment source to **"GitHub Actions"**.

4. **Trigger the deploy.** Push to `main` (or go to the **Actions** tab and trigger the workflow manually). The Actions run builds the site and deploys it.

5. **Visit the site.** Go to `https://rpeters4.github.io`. It may take a couple of minutes after the first successful deploy to go live. HTTPS is automatic on `github.io`.

That is the entire setup. No DNS, no custom domain, no CNAME file needed.

## Features

- Single-page portfolio with smooth-scroll navigation and scroll-spy
- Light/dark theme toggle with system preference detection (no flash of wrong theme)
- Live GitHub projects feed (fetched client-side, cached in sessionStorage)
- Interactive pipeline parallelism visualization (naive vs. 1F1B scheduling)
- Copy-to-clipboard on email addresses
- Fully responsive, accessible, and respects prefers-reduced-motion
- Zero-cost hosting on GitHub Pages via GitHub Actions

## Tech Stack

- **Astro** (static site generation with islands architecture)
- **TypeScript** (strict mode)
- **Tailwind CSS v4** (via @tailwindcss/vite)
- **GitHub Actions** (CI/CD)
