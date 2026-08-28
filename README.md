# Customer Life Insurance Centre

A small React static site scaffold for a financial advisor focusing on Tata AIA life insurance products.

## Files

- `index.html` – app entry
- `src/` – React source files

## Quick start

Install dependencies and run dev server:

```bash
npm install
npm run dev
```

## Notes

- Replace placeholder contact details with real data.
- If you want client-side routing, add `react-router` and update `App.jsx`.
- Deploy the `dist` folder after `npm run build`.

## Deployment on Vercel

1. Push this project to a Git provider (GitHub/GitLab/Bitbucket).
2. Sign in to https://vercel.com and import the repository.
	- Build command: `npm run build`
	- Output directory: `dist`
3. Add your custom domain `www.financialAdvisor.com` in the Vercel project settings.
	- For the `www` subdomain: add a CNAME record for `www` pointing to `cname.vercel-dns.com`.
	- For the apex domain (`financialAdvisor.com`) add an A record pointing to `76.76.21.21` (Vercel's IP).
4. Wait for Vercel to verify DNS and issue SSL (automatic).

Notes:
- You must own the domain name; DNS changes are done at your domain registrar.
- Vercel will host the static `dist` build and serve the SPA; the `vercel.json` file in this repo helps configuring the build and SPA routing.
