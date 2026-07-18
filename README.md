# Tynixor — Next.js

Rebuilt from the original static HTML site into Next.js (App Router).

## What changed from the original site

- **Framework:** plain HTML/CSS/JS → Next.js 14 (App Router), React components.
- **Design:** dark, heavily-animated space theme → clean light theme, minimal
  motion. All the animated starfield/nebula/particle background layers and
  the "explosion" loading intro were removed — they were the main cause of
  slow load and visual clutter.
- **Sign-in:** the old flow showed a fake "Redirecting to Google login..."
  progress bar with manufactured delays and trust text before the real
  Firebase Google popup. That's been replaced with a plain, honest
  "Sign in with Google" button that calls Firebase Auth directly — no fake
  waiting, no manufactured urgency.
- **QuizzTech and GPlayCode pages were removed.** Both advertised real cash
  payouts (UPI, "instant redemptions") with no actual payment backend behind
  them, and GPlayCode specifically offered payment for social media
  engagement (likes/follows/comments), which violates platform policies.
  Every other page's content (About, Careers, Partners, Privacy, Terms,
  Disclaimer, LearnTools, LearnSoftware, AI Face Analyzer) was preserved.
- **Images optimized:** several logos/icons were 1MB+ PNGs; they're now
  compressed to a fraction of the size with no visible quality loss
  (total assets folder: ~4MB → ~960KB).
- **Analytics, AdSense, and the Firebase visitor counter** are wired the
  same way as before.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push this folder to a GitHub repo.
2. Import the repo in Vercel.
3. Framework Preset: **Next.js** (auto-detected — no manual config needed).
4. Deploy.

No environment variables are required — the Firebase config is public
client-side config (safe to expose, same as before).

## Project structure

```
app/                  → pages (App Router)
  page.js             → home
  about/, contact/, careers/, partners/,
  privacy/, terms/, disclaimer/
  website/
    learntool/, learnsoft/, faceanalysis/
components/
  Header.jsx           → nav + real Google sign-in
  Footer.jsx
lib/
  firebase.js          → Firebase client init
public/assets/         → optimized images, icons, favicon
```
