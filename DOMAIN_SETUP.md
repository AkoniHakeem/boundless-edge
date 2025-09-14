# DNS Configuration for boundlesedge.com

## Required DNS Records

### Option A: Using Netlify DNS (Recommended)

If you want to use Netlify's DNS servers:

1. **In Netlify Dashboard**:

   - Go to Domain Management
   - Click "Set up Netlify DNS"
   - Copy the 4 nameserver addresses

2. **At Your Domain Registrar**:
   - Update nameservers to the 4 Netlify nameservers
   - Example:
     ```
     dns1.p01.nsone.net
     dns2.p01.nsone.net
     dns3.p01.nsone.net
     dns4.p01.nsone.net
     ```

### Option B: Using External DNS (Your Current Registrar)

If you want to keep your current DNS provider:

1. **A Record** (for root domain):

   ```
   Type: A
   Name: @ (or leave empty)
   Value: 75.2.60.5
   TTL: 3600
   ```

2. **CNAME Record** (for www subdomain):
   ```
   Type: CNAME
   Name: www
   Value: boundlessedge.netlify.app
   TTL: 3600
   ```

## SSL Certificate

Netlify will automatically provision an SSL certificate once:

- The domain is added to your site
- DNS records are pointing to Netlify
- DNS propagation is complete (up to 48 hours)

## Verification Commands

After setting up DNS, verify with these commands:

```bash
# Check A record
dig boundlesedge.com

# Check CNAME record
dig www.boundlesedge.com

# Check if pointing to Netlify
nslookup boundlesedge.com

# Test HTTPS (after SSL is active)
curl -I https://boundlesedge.com
```

## Expected Results

Once configured correctly:

- ✅ https://boundlesedge.com → Your Netlify site
- ✅ https://www.boundlesedge.com → Redirects to https://boundlesedge.com
- ✅ SSL certificate active and valid
- ✅ All HTTP traffic redirects to HTTPS

## Timeline

- **DNS Propagation**: 1-48 hours
- **SSL Certificate**: 24 hours after DNS propagation
- **Full Setup**: Usually complete within 24-48 hours

## Troubleshooting

### DNS Not Propagating

- Wait 24-48 hours for full propagation
- Check with multiple DNS checker tools online
- Verify records are correctly entered at registrar

### SSL Certificate Issues

- Ensure DNS is fully propagated first
- SSL certificates are issued after DNS verification
- Can take up to 24 hours after DNS propagation

### Domain Not Working

- Check DNS records are correct
- Verify domain is added in Netlify dashboard
- Check for typos in DNS configuration
- Use DNS propagation checker tools
