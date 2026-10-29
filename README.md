# Gummadi Rakesh — Portfolio

Personal portfolio for a Java Full Stack Developer based in Hyderabad, built with Next.js (static export).

## Commands

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/
```

## Customize

| File | What to update |
|------|----------------|
| `src/data/profile.ts` | GitHub / LinkedIn URLs when available |
| `src/sections/Contact.tsx` | Formspree / EmailJS / API endpoint |
| `public/` | Favicon / OG image |

Contact details currently use resume values:

- Email: `gummadi0312@gmail.com`
- Phone: `+91 8978053109`
- Location: Hyderabad, Telangana

## Deploy

- **GitHub Pages**: every push to `main` runs `.github/workflows/deploy.yml`, which builds and publishes `out/` to https://rakeshgummadi.online
- **Netlify**: build `npm run build`, publish `out`
