# Solduino Developer Docs

Nextra-based documentation site for the Solduino SDK.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run start
```

## Vercel Deployment

Use these settings in Vercel:

- **Framework Preset**: Next.js
- **Root Directory**: `docs`
- **Build Command**: `npm run build`
- **Install Command**: `npm install`
- **Output Directory**: `.next` (default)
