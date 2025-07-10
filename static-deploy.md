# Free Deployment Guide for Mohini's Portfolio

## Option 1: Vercel (Recommended)
### Steps:
1. **Build the project**: `npm run build`
2. **Create GitHub repo** and push your code
3. **Visit vercel.com** and connect your GitHub
4. **Import project** and deploy
5. **Get URL**: `https://your-project-name.vercel.app`

### Vercel Setup:
- Build Command: `npm run build`
- Output Directory: `dist/public`
- Install Command: `npm install`

## Option 2: Netlify
### Steps:
1. **Build the project**: `npm run build`
2. **Visit netlify.com** and drag the `dist/public` folder
3. **Get URL**: `https://random-name.netlify.app`

### Manual Upload:
- Just drag the `dist/public` folder to Netlify
- Instant deployment with custom domain options

## Option 3: Railway (Full-stack)
### Steps:
1. **Connect GitHub** to railway.app
2. **Deploy from repo** - supports full backend
3. **Get URL**: `https://your-project.railway.app`

## Option 4: GitHub Pages
### Steps:
1. **Push to GitHub** repository
2. **Go to Settings > Pages**
3. **Select source**: Deploy from a branch
4. **Build and deploy** the `dist/public` folder

## Quick Static Build:
```bash
npm run build
```
This creates a `dist/public` folder with all static files ready for deployment.

## Files Created:
- `vercel.json` - Vercel configuration
- `netlify.toml` - Netlify configuration  
- `railway.json` - Railway configuration
- This guide - Step-by-step instructions

## Contact Form Note:
For static deployments, the contact form will need a service like:
- Netlify Forms (free)
- Formspree (free tier)
- EmailJS (free tier)