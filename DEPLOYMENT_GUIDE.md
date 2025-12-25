# 🚀 Deployment Guide

Your website is ready to deploy! Here are your options:

## Option 1: Vercel (Recommended - FREE for Next.js) ⭐

### Via Vercel Website (Easiest)
1. Go to https://vercel.com/signup
2. Sign up with your GitHub account (LWENA27)
3. Click "New Project"
4. Import your repository: `LwenaTechWareAfrica`
5. Vercel will auto-detect Next.js settings
6. Click "Deploy" - Done in 2 minutes!

**Your site will be live at**: `https://lwena-tech-ware-africa.vercel.app`

### Via CLI (Alternative)
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd /home/lwena/LwenaTechWareAfrica
vercel --prod
```

### Connect Your Domain
After deployment:
1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain: `techwareafrica.tech` or `lwenatechwaeafrica.tech`
3. Update DNS records as Vercel instructs (at .TECH Domains)
4. Wait 5-10 minutes for DNS propagation

---

## Option 2: Netlify (Also FREE)

1. Go to https://www.netlify.com/
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repo: `LwenaTechWareAfrica`
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

**Your site will be live at**: `https://lwenatech.netlify.app`

---

## Option 3: GitHub Pages (Static Export)

GitHub Pages needs static export. Add to `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

Then deploy:
```bash
npm run build
# Push to gh-pages branch
```

⚠️ **Note**: GitHub Pages doesn't support server-side features well. Use Vercel instead!

---

## 🎯 Recommended: Vercel

**Why Vercel?**
- ✅ Built specifically for Next.js (made by Next.js creators)
- ✅ Automatic SSL certificates
- ✅ Global CDN
- ✅ Auto-deploys on git push
- ✅ Free SSL for custom domains
- ✅ Serverless functions support
- ✅ FREE forever for personal projects
- ✅ Zero configuration needed

---

## 📋 Pre-Deployment Checklist

Before deploying, make sure:
- ✅ All pages load correctly locally (`npm run dev`)
- ✅ No console errors in browser
- ✅ Git repository is up to date (`git push`)
- ✅ Build works successfully (`npm run build`)
- ✅ Update environment variables if needed

---

## 🌐 After Deployment

1. **Test your live site** - Click all links, test all pages
2. **Set up custom domain**:
   - Go to your domain registrar (.TECH Domains)
   - Add DNS records:
     - Type: `A` Record, Name: `@`, Value: Vercel's IP (they provide)
     - Type: `CNAME`, Name: `www`, Value: `yoursite.vercel.app`
3. **Enable SSL** - Automatic with Vercel (done for you)
4. **Share your site** - Your website is live! 🎉

---

## 🔗 Your Domains

You have two domains registered:
1. `techwareafrica.tech` (expires Dec 24, 2026)
2. `lwenatechwaeafrica.tech` (pending)

**Recommended primary domain**: `techwareafrica.tech`

---

## 📧 Need Help?

If you encounter any issues:
1. Check Vercel's deployment logs
2. Ensure your GitHub repo is public or Vercel has access
3. Verify DNS settings are correct
4. Wait 5-10 minutes for DNS changes to propagate

---

## 🎊 Quick Deploy NOW!

**Fastest way (2 minutes)**:
1. Open: https://vercel.com/new
2. Sign in with GitHub
3. Import: `LWENA27/LwenaTechWareAfrica`
4. Click Deploy
5. Done! ✨

Your site will be live at: `https://lwena-tech-ware-africa.vercel.app`

Then connect your domain `techwareafrica.tech` in Vercel settings!

---

**Built with ❤️ in Africa for the World** 🌍
