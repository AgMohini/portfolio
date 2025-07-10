# Custom Domain Setup for Vercel

## Overview
Connect `mohiniagarwal.com` to your Vercel deployment: `https://portfolio-sm7v.vercel.app/`

## Step 1: Purchase Domain
Buy `mohiniagarwal.com` from a domain registrar:
- **Namecheap** (recommended, ~$10/year)
- **GoDaddy** (~$15/year)
- **Google Domains** (~$12/year)
- **Cloudflare** (~$9/year)

## Step 2: Add Domain to Vercel

### In Vercel Dashboard:
1. Go to your project: `portfolio-sm7v`
2. Click **"Settings"** tab
3. Click **"Domains"** in sidebar
4. Click **"Add"** button
5. Enter: `mohiniagarwal.com`
6. Click **"Add"**

### Vercel will provide DNS records:
```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Step 3: Configure DNS

### At Your Domain Registrar:
1. **Login** to your domain registrar account
2. **Find DNS Management** (or DNS Settings)
3. **Add these records**:

#### For Root Domain (mohiniagarwal.com):
- **Type**: A Record
- **Host**: @ (or leave blank)
- **Value**: `76.76.19.61`
- **TTL**: 300 (or Auto)

#### For WWW Subdomain (www.mohiniagarwal.com):
- **Type**: CNAME
- **Host**: www
- **Value**: `cname.vercel-dns.com`
- **TTL**: 300 (or Auto)

## Step 4: Verify Setup

### Check Status:
1. **In Vercel**: Domain status shows "Valid Configuration"
2. **DNS Propagation**: May take 24-48 hours
3. **SSL Certificate**: Vercel automatically provides HTTPS

### Test Your Domain:
- Visit: `https://mohiniagarwal.com`
- Visit: `https://www.mohiniagarwal.com`
- Both should redirect to your portfolio

## Step 5: Update Links

Once working, update your:
- **LinkedIn profile**: Use `https://mohiniagarwal.com`
- **Resume/CV**: Professional domain looks better
- **Business cards**: Custom domain more memorable
- **Email signature**: Include portfolio link

## Troubleshooting

### Domain Not Working After 24 Hours:
1. **Check DNS records** are exactly as Vercel specified
2. **Clear browser cache** or try incognito mode
3. **Use DNS checker**: `whatsmydns.net` to verify propagation
4. **Contact support** if records are correct but not working

### SSL Certificate Issues:
- Vercel automatically provides SSL
- May take additional time after DNS propagation
- Should show green lock icon in browser

### WWW vs Non-WWW:
- Both `mohiniagarwal.com` and `www.mohiniagarwal.com` will work
- Vercel handles redirects automatically
- Choose your preferred version for sharing

## Cost Breakdown
- **Domain Registration**: $9-15/year
- **Vercel Hosting**: Free (for personal projects)
- **SSL Certificate**: Free (included with Vercel)
- **Total Annual Cost**: $9-15

## Professional Benefits
- **Credibility**: Custom domain looks more professional
- **Branding**: Easy to remember and share
- **SEO**: Better for search engine optimization
- **Email**: Can setup professional email later

## Next Steps After Setup
1. **Test thoroughly** on different devices
2. **Update all professional profiles** with new URL
3. **Consider email setup**: `contact@mohiniagarwal.com`
4. **Monitor analytics** through Vercel dashboard

Your portfolio at `mohiniagarwal.com` will significantly enhance your professional presence!