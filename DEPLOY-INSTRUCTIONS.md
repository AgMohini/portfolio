# 🚀 Deployment Instructions for Your Portfolio

## Step 1: Upload to GitHub

### Manual Upload (Recommended)
1. **Go to your GitHub repo**: https://github.com/AgMohini/portfolio
2. **Click "uploading an existing file"** or drag files
3. **Upload all project files** (except node_modules)
4. **Commit changes** with message: "Add professional portfolio website"

### Using Git Commands
```bash
# If you have git installed locally
git clone https://github.com/AgMohini/portfolio.git
cd portfolio
# Copy all your project files here
git add .
git commit -m "Add professional portfolio website"
git push origin main
```

## Step 2: Deploy for FREE

### Option A: Vercel (Recommended)
1. **Visit**: https://vercel.com
2. **Sign up** with GitHub account
3. **Click "New Project"**
4. **Import** your GitHub repo: `AgMohini/portfolio`
5. **Configure**:
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`
6. **Deploy** - Get URL like: `https://portfolio-agmohini.vercel.app`

### Option B: Netlify
1. **Visit**: https://netlify.com
2. **Sign up** with GitHub account
3. **Drag and drop** your `dist/public` folder (after running `npm run build`)
4. **Get URL** like: `https://amazing-name-123456.netlify.app`

### Option C: Railway
1. **Visit**: https://railway.app
2. **Sign up** with GitHub account
3. **New Project** → **Deploy from GitHub repo**
4. **Select**: `AgMohini/portfolio`
5. **Deploy** - Get URL like: `https://portfolio-production-1234.up.railway.app`

## Step 3: Update Your Links

Once deployed, update your:
- **LinkedIn profile** with portfolio URL
- **Resume/CV** with portfolio link
- **GitHub repo description** with live URL
- **Email signature** with portfolio link

## Step 4: Test Your Portfolio

Visit your live URL and verify:
- ✅ All sections load correctly
- ✅ Navigation works smoothly
- ✅ Contact form functions
- ✅ Mobile responsive design
- ✅ Project links work
- ✅ Fast loading times

## Troubleshooting

### Build Errors
```bash
# If build fails, try:
npm install
npm run build
```

### Contact Form Issues
- **Vercel**: Contact form needs serverless functions
- **Netlify**: Enable Netlify Forms in settings
- **Railway**: Full backend support included

### Custom Domain (Optional)
All platforms support custom domains:
- **Free subdomains**: `yourname.platform.app`
- **Custom domains**: `mohini-agarwal.com` (requires domain purchase)

## Files to Upload

Make sure to upload all these files to GitHub:
```
portfolio/
├── client/           # Your React frontend
├── server/           # Your Express backend
├── shared/           # Shared types
├── attached_assets/  # Your images
├── components.json   # UI components config
├── package.json      # Dependencies
├── vercel.json       # Vercel config
├── netlify.toml      # Netlify config
├── railway.json      # Railway config
├── README.md         # Project documentation
├── tailwind.config.ts
├── vite.config.ts
└── tsconfig.json
```

## 🎯 Expected Result

After deployment, your portfolio will be live at a public URL showing:
- Your professional profile and photo
- 412 citations and h-index metrics
- 17+ ML projects showcase
- Academic experience timeline
- Contact information
- Mobile-responsive design

## 💡 Pro Tips

1. **Use Vercel** for best performance and easy setup
2. **Update README** with your live URL once deployed
3. **Test on mobile** devices after deployment
4. **Share your URL** with potential employers
5. **Keep your portfolio updated** with new projects

Your portfolio is ready for deployment! Choose your preferred platform and follow the steps above.