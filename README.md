# Laundry Landing Page

A standalone Next.js landing page for the laundry platform.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Technology Stack

- **Framework**: Next.js 15.5.4
- **Runtime**: React 19.1.0
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
laundry-landing/
├── src/
│   └── app/
│       ├── globals.css    # Tailwind config and global styles
│       ├── layout.tsx     # Root layout with metadata
│       └── page.tsx       # Landing page
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## Deployment

This project can be deployed to Vercel, Netlify, or any platform that supports Next.js:

### Vercel (Recommended)
1. Push to GitHub
2. Import to Vercel
3. Deploy

### Other Platforms
1. Build: `npm run build`
2. Start: `npm run start`

## Notes

- All links to `/auth/*` and `/bli-renser` routes will need to be updated to point to your main application URL
- The landing page uses custom Tailwind colors defined in `globals.css`
