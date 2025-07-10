# Vercel Deployment Settings

## Framework Configuration
When deploying to Vercel, use these exact settings:

### Project Settings
- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

### Environment Variables
- **NODE_ENV**: `production` (optional, set automatically)
- **NODE_VERSION**: `18.x` (recommended)

### Build Settings
- **Node.js Version**: 18.x
- **Package Manager**: npm
- **Root Directory**: `.` (project root)

### Advanced Settings
- **Output File Tracing**: Enabled (default)
- **Source Maps**: Disabled (for production)
- **Build Cache**: Enabled (default)

## Important Notes

1. **Framework Detection**: Vercel should automatically detect Vite, but if not, manually select "Vite"

2. **Build Output**: Your project builds to `dist/public` directory, which contains all static assets

3. **API Routes**: The backend API will be handled by `server/index.ts` as serverless functions

4. **Static Assets**: Images in `attached_assets/` will be served from the build output

## Troubleshooting

### If Build Fails
- Ensure `vercel.json` is in project root
- Check that `dist/public` directory exists after build
- Verify all dependencies are in `package.json`

### If Framework Not Detected
- Manually select "Vite" from the framework dropdown
- Ensure `vite.config.ts` is in project root

### If Deployment Succeeds but Site Doesn't Load
- Check build output directory is set to `dist/public`
- Verify routes are configured correctly in `vercel.json`

## Expected Result
After successful deployment:
- Your portfolio will be live at `https://portfolio-username.vercel.app`
- All pages and API routes will work correctly
- Mobile responsive design will be active
- Contact form will function properly