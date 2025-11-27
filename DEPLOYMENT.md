# 🚀 Deployment Guide - codeXtreme Winners Gallery

## ✅ Pre-Deployment Checklist

### 1. Code Quality
- ✅ All TypeScript types defined
- ✅ No console errors or warnings
- ✅ All components properly exported
- ✅ ToastProvider integrated in root layout
- ✅ All imports verified

### 2. Build Verification
```bash
# Run production build locally
npm run build

# Start production server
npm start
```

**Expected Output:**
- ✅ Build completes without errors
- ✅ All routes accessible
- ✅ No hydration errors
- ✅ All features working

### 3. Environment Check
```bash
# Check Node version (should be 18+)
node -v

# Check dependencies
npm list
```

---

## 🚢 Deployment to Vercel

### Method 1: GitHub Integration (Recommended)

#### Step 1: Push to GitHub
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Ready for deployment - MVP complete"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/winners.codextreme.io.git

# Push
git push -u origin main
```

#### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Select your repository: `winners.codextreme.io`
5. Vercel auto-detects:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
6. Click **"Deploy"**
7. Wait 2-3 minutes for deployment
8. Done! Your site is live at `your-project.vercel.app`

---

### Method 2: Vercel CLI

#### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

#### Step 2: Login
```bash
vercel login
```

#### Step 3: Deploy
```bash
# Run from project root
vercel

# Follow prompts:
# ? Set up and deploy "~\path\to\winners.codextreme.io"? [Y/n] y
# ? Which scope do you want to deploy to? [Your Account]
# ? Link to existing project? [y/N] n
# ? What's your project's name? winners-codextreme
# ? In which directory is your code located? ./
```

#### Step 4: Deploy to Production
```bash
vercel --prod
```

---

## 🌐 Custom Domain Setup

### Option 1: winners.codextreme.io

1. **In Vercel Dashboard:**
   - Go to your project
   - Click **Settings** → **Domains**
   - Enter: `winners.codextreme.io`
   - Click **Add**

2. **Update DNS Records:**

   Go to your DNS provider (where codextreme.io is registered) and add:

   **A Record:**
   ```
   Type: A
   Name: winners
   Value: 76.76.21.21 (Vercel's IP)
   TTL: Auto/3600
   ```

   **CNAME Record (Alternative):**
   ```
   Type: CNAME
   Name: winners
   Value: cname.vercel-dns.com
   TTL: Auto/3600
   ```

3. **Wait for DNS Propagation:**
   - Usually takes 5-60 minutes
   - Check status in Vercel dashboard
   - SSL certificate automatically provisioned

---

## 🔍 Post-Deployment Verification

### 1. Check All Pages
- [ ] Homepage loads: `https://winners.codextreme.io`
- [ ] Participants page: `https://winners.codextreme.io/participants`
- [ ] About page: `https://winners.codextreme.io/about`
- [ ] Project detail: `https://winners.codextreme.io/project/l-guard-2025`

### 2. Test Features
- [ ] Search functionality works
- [ ] Filters update correctly
- [ ] Project comparison works
- [ ] Participant modal opens
- [ ] All animations smooth
- [ ] Mobile responsive

### 3. Performance Check
Visit: `https://pagespeed.web.dev/`
- Enter your URL
- Check scores for:
  - Performance (target: 90+)
  - Accessibility (target: 95+)
  - Best Practices (target: 90+)
  - SEO (target: 90+)

---

## 🐛 Troubleshooting

### Build Fails

**Error: "Module not found"**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Error: "Type errors"**
```bash
# Check TypeScript
npx tsc --noEmit
```

### Deployment Issues

**Error: "Function Timeout"**
- Check if any API routes are slow
- Optimize data fetching
- Use static generation where possible

**Error: "404 on dynamic routes"**
- Ensure `[id]` folder structure is correct
- Check if all necessary files are committed

### DNS Issues

**Domain not resolving:**
```bash
# Check DNS propagation
nslookup winners.codextreme.io
```

Wait 24-48 hours for full global propagation.

---

## 🔄 Update Process

### Deploying Updates

**With GitHub Integration:**
```bash
# Make changes
git add .
git commit -m "Update: description"
git push

# Vercel auto-deploys on push to main
```

**With Vercel CLI:**
```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Rollback

If something breaks:
1. Go to Vercel Dashboard
2. Click **Deployments**
3. Find previous working version
4. Click **...** → **Promote to Production**

---

## 📊 Environment Variables (If Needed Later)

Currently, the app uses static JSON data. If you add APIs or databases later:

1. **In Vercel Dashboard:**
   - Go to **Settings** → **Environment Variables**
   - Add variables (e.g., `DATABASE_URL`, `API_KEY`)

2. **Access in code:**
```typescript
const apiKey = process.env.API_KEY;
```

---

## 🎯 Next Steps After Deployment

1. **Add Analytics** (Optional)
   - Vercel Analytics (built-in)
   - Google Analytics
   - Plausible Analytics

2. **Set up Monitoring** (Optional)
   - Vercel Speed Insights
   - Sentry for error tracking

3. **Add Real Content**
   - Replace placeholder images
   - Add more competitions
   - Add more projects & participants

4. **Share with Users**
   - Announce on social media
   - Send to codeXtreme community
   - Collect feedback

---

## 📞 Support

**Vercel Issues:**
- Documentation: https://vercel.com/docs
- Support: https://vercel.com/support

**Project Issues:**
- Create GitHub issue
- Contact codeXtreme team

---

## ✅ Final Checklist

Before going live:
- [ ] Production build successful
- [ ] All pages load correctly
- [ ] Mobile responsive verified
- [ ] All features tested
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Performance scores good
- [ ] Content reviewed
- [ ] Team notified

---

**Your codeXtreme Winners Gallery is ready to inspire Africa's innovators! 🚀**
