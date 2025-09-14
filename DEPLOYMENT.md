# Netlify Deployment Guide for Boundless Edge

## 🚀 Deployment to boundlesedge.com

### Prerequisites

- [ ] Netlify account
- [ ] Domain ownership of boundlesedge.com
- [ ] EmailJS configured and tested
- [ ] Git repository pushed to GitHub/GitLab

## 📁 Deployment Files

The following files have been created for optimal Netlify deployment:

### `netlify.toml`

- Build configuration
- Security headers
- Cache optimization
- SPA routing support

### `public/_redirects`

- Custom domain redirects (www → non-www)
- HTTPS enforcement
- SPA fallback routing

## 🔧 Step-by-Step Deployment

### Step 1: Prepare Environment Variables

Create these environment variables in Netlify:

```
EMAILJS_SERVICE_ID=your_actual_service_id
EMAILJS_TEMPLATE_ID=your_actual_template_id
EMAILJS_AUTO_REPLY_TEMPLATE_ID=your_actual_auto_reply_template_id
EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### Step 2: Connect Repository to Netlify

1. **Login to Netlify**

   - Go to [https://netlify.com](https://netlify.com)
   - Sign in or create an account

2. **New Site from Git**

   - Click "New site from Git"
   - Choose your Git provider (GitHub/GitLab)
   - Select your `boundless-edge` repository

3. **Build Settings**

   - **Build command**: `npm run build`
   - **Publish directory**: `dist/spa`
   - **Node version**: `20` (set in Environment variables)

4. **Deploy Site**
   - Click "Deploy site"
   - Wait for initial build to complete

### Step 3: Configure Custom Domain

1. **Add Custom Domain**

   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter: `boundlesedge.com`

2. **DNS Configuration**
   Update your domain DNS settings with your registrar:

   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: boundlesedge.netlify.app
   ```

3. **SSL Certificate**
   - Netlify will automatically provision SSL
   - Wait for "HTTPS" to show as active

### Step 4: Environment Variables Setup

In Netlify Dashboard → Site settings → Environment variables:

```bash
# Add these variables:
EMAILJS_SERVICE_ID = your_service_id_here
EMAILJS_TEMPLATE_ID = your_template_id_here
EMAILJS_AUTO_REPLY_TEMPLATE_ID = your_auto_reply_template_id_here
EMAILJS_PUBLIC_KEY = your_public_key_here
```

### Step 5: Redeploy with Environment Variables

1. Go to Deploys tab
2. Click "Trigger deploy" → "Deploy site"
3. Wait for build to complete

## 🔍 Post-Deployment Checklist

### ✅ **Functionality Tests**

- [ ] Website loads at https://boundlesedge.com
- [ ] All pages and sections work
- [ ] Contact form submits successfully
- [ ] Business notification email received
- [ ] Customer auto-reply email received
- [ ] Mobile responsiveness verified
- [ ] Bubble animations working
- [ ] SEO meta tags present

### ✅ **Performance Tests**

- [ ] Page load speed < 3 seconds
- [ ] Images optimized and loading
- [ ] Fonts loading correctly
- [ ] No console errors

### ✅ **SEO Verification**

- [ ] Meta tags populated
- [ ] Sitemap accessible: `/sitemap.xml`
- [ ] Robots.txt accessible: `/robots.txt`
- [ ] Manifest.json accessible: `/manifest.json`

## 🌐 Domain Configuration

### DNS Settings at Your Registrar:

```bash
# A Record for root domain
Type: A
Name: @ (or leave empty)
Value: 75.2.60.5
TTL: 3600

# CNAME for www subdomain
Type: CNAME
Name: www
Value: boundlesedge.netlify.app
TTL: 3600
```

### Verification Commands:

```bash
# Check DNS propagation
nslookup boundlesedge.com
nslookup www.boundlesedge.com

# Check SSL certificate
curl -I https://boundlesedge.com
```

## 🔧 Build Configuration

The `netlify.toml` file configures:

### **Build Settings**

- Node.js version 20
- Build command: `npm run build`
- Publish directory: `dist/spa`

### **Security Headers**

- XSS Protection
- Content Type Options
- Frame Options
- Referrer Policy

### **Performance Optimization**

- Long-term caching for assets
- Compression enabled
- Image optimization

## 🚨 Troubleshooting

### **Common Issues:**

1. **Build Fails**

   - Check Node.js version in build log
   - Verify all dependencies in package.json
   - Check for TypeScript/ESLint errors

2. **Environment Variables Not Working**

   - Ensure variables are set in Netlify dashboard
   - Redeploy after adding variables
   - Check variable names match exactly

3. **Contact Form Not Working**

   - Verify EmailJS credentials
   - Check network tab for API errors
   - Test EmailJS in development first

4. **Domain Not Connecting**
   - Wait 24-48 hours for DNS propagation
   - Double-check DNS records
   - Use DNS checker tools

### **Debug Commands:**

```bash
# Test local build
npm run build

# Check environment variables (in development)
echo $EMAILJS_SERVICE_ID

# Verify DNS
dig boundlesedge.com
dig www.boundlesedge.com
```

## 📊 Monitoring & Analytics

### Netlify Analytics

- Enable in Site settings → Analytics
- Monitor traffic and performance

### EmailJS Monitoring

- Check EmailJS dashboard for email delivery
- Monitor monthly quota usage

### Performance Monitoring

- Use Lighthouse for performance scores
- Monitor Core Web Vitals

## 🔄 Continuous Deployment

Once deployed, any push to your main branch will:

1. Trigger automatic rebuild
2. Deploy changes to production
3. Maintain environment variables
4. Keep custom domain configuration

## 🎯 Final URLs

After successful deployment:

- **Primary**: https://boundlesedge.com
- **Redirect**: https://www.boundlesedge.com → https://boundlesedge.com
- **Netlify**: https://boundlesedge.netlify.app (backup)

Your website will be live at https://boundlesedge.com with:

- ✅ Professional custom domain
- ✅ SSL certificate (HTTPS)
- ✅ Fast global CDN
- ✅ Automatic deployments
- ✅ Form handling with EmailJS
- ✅ SEO optimization
- ✅ Mobile optimization
