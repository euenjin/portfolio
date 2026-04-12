# Portfolio Website

A minimal, content-first React + Vite portfolio skeleton ready for deployment.

## Quick Start

### Install Dependencies
```bash
npm install
```

### Development
```bash
npm run dev
```

Runs locally at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

## Project Structure

```
/src
  /components      # React components for each section
  /data           # Editable content file (content.js)
  /styles         # Global CSS
  App.jsx         # Main app component
  main.jsx        # Entry point

/public           # Static assets (add later)
```

## Editing Your Content

**All portfolio content is in:** `src/data/content.js`

This file contains:
- **projects** - Array of project objects with result-first structure
- **research** - Research experience entries
- **skills** - Skills organized by category

### Project Structure (each project should have):
1. `title` - Project name
2. `summary` - 2-3 sentence overview
3. `results` - Key achievements/metrics as array
4. `tools` - Methods and technologies used
5. `impact` - Why it matters
6. `details` - Detailed process (optional, in collapsible section)
7. `github` - GitHub URL (optional)

Simply replace the placeholder content in `content.js` with your real project details and the portfolio will update automatically.

## Deployment (Vercel)

### Option 1: Deploy from CLI
```bash
npm install -g vercel
vercel
```

### Option 2: Deploy from GitHub
1. Push repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import project
4. Deploy (Vercel auto-detects Vite)

### Environment Setup
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

## Next Steps

1. ✅ Skeleton created and structured
2. Replace placeholder content in `src/data/content.js` with your real project descriptions
3. Add resume PDF to `/public`
4. Deploy to Vercel
5. Later: Add styling refinements, icons, images

## Notes

- Currently minimal and content-focused (no icons, images, decorative elements)
- All styling is in `src/styles/index.css` - easy to customize
- Result-first project card layout shows key metrics and impact before process details
- Collapsible "Detailed Process" section keeps the portfolio clean while preserving technical depth
