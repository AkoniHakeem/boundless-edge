# EmailJS HTML Template Setup Guide

## Using the Professional HTML Email Template

The `docs/email-template.html` file contains a beautifully designed, responsive email template for your contact form submissions. Here's how to set it up:

## Step 1: Copy the HTML Template

1. Open `docs/email-template.html`
2. Copy the entire HTML content
3. Go to your EmailJS dashboard → Email Templates
4. Create a new template or edit your existing one
5. Switch to "HTML" mode (not the visual editor)
6. Paste the HTML content

## Step 2: Configure EmailJS Template Variables

The template uses these variables that are automatically populated:

```
{{from_name}} - User's full name
{{from_email}} - User's email address
{{company}} - User's company name
{{project_type}} - Selected project type
{{message}} - User's project details
{{submission_date}} - When the form was submitted
{{to_email}} - Your business email (dev@boundlesedge.com)
```

## Step 3: Email Template Features

### ✨ Professional Design

- Branded header with Boundless Edge styling
- Gradient backgrounds matching your website
- Mobile-responsive design
- Clean typography and spacing

### 📱 Mobile Optimized

- Responsive layout that works on all devices
- Optimized for mobile email clients
- Touch-friendly buttons and links

### 🎨 Visual Elements

- Priority badge for new leads
- Organized contact details in cards
- Clear message section with proper formatting
- Professional footer with contact information

### 🚀 Interactive Features

- Direct reply button with pre-filled email
- Clickable email addresses and phone numbers
- Next steps section for follow-up actions

### 🌙 Dark Mode Support

- Automatic dark mode detection
- Optimized colors for both light and dark themes

## Step 4: Alternative Text Template

If you prefer a simpler text-only version, use `docs/email-template.txt`:

1. Copy the content from `docs/email-template.txt`
2. Create a new EmailJS template
3. Use "Text" mode instead of HTML
4. Paste the text content

## Step 5: Email Client Compatibility

The HTML template is tested and optimized for:

✅ **Desktop Clients:**

- Outlook 2016+
- Apple Mail
- Thunderbird
- Windows Mail

✅ **Web Clients:**

- Gmail
- Outlook.com
- Yahoo Mail
- Apple iCloud Mail

✅ **Mobile Clients:**

- iOS Mail
- Android Gmail
- Outlook Mobile
- Apple Mail Mobile

## Step 6: Testing Your Template

1. Set up EmailJS with your credentials
2. Submit a test form on your website
3. Check your email for the styled template
4. Verify all variables are populated correctly
5. Test the reply button functionality

## Template Customization

### Colors and Branding

The template uses CSS variables for easy customization:

```css
/* Primary gradient - Header and buttons */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Secondary gradient - Priority badge */
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);

/* Background colors */
background-color: #f4f6f8; /* Email background */
background-color: #ffffff; /* Content background */
```

### Typography

The template uses system fonts for maximum compatibility:

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
  Ubuntu, Cantarell, sans-serif;
```

### Layout Sections

1. **Header** - Company branding and title
2. **Content** - Main email body with contact details
3. **Contact Details Card** - Organized customer information
4. **Message Section** - User's project details
5. **Action Button** - Quick reply functionality
6. **Footer** - Company information and links

## Step 7: Advanced Features

### Auto-Reply Setup (Optional)

You can set up an auto-reply email to customers using a separate EmailJS template:

1. Create a second EmailJS template for customer confirmation
2. Use the customer's email as the recipient
3. Send both emails from your contact form submission

### CRM Integration

The template includes structured data that's easy to parse for CRM systems:

- Contact information in a consistent format
- Submission timestamp for lead tracking
- Project type categorization for sales routing

## Troubleshooting

### Common Issues:

**HTML not rendering:**

- Ensure you're in HTML mode, not visual editor
- Check that all HTML tags are properly closed

**Variables not showing:**

- Verify variable names match exactly (case-sensitive)
- Check EmailJS template configuration
- Ensure form data is being sent correctly

**Mobile display issues:**

- The template includes media queries for mobile optimization
- Test on actual devices or email client mobile apps

**Dark mode not working:**

- Dark mode support depends on the email client
- Not all clients support CSS media queries for dark mode

## Email Template Structure

```
email-template.html          (Full HTML template)
├── Header Section          (Branding and title)
├── Contact Details Card    (Customer information)
├── Message Section         (Project details)
├── Action Buttons          (Reply functionality)
└── Footer                  (Company information)

email-template.txt          (Plain text version)
└── Simple text format     (For basic email clients)
```

This professional email template will make your contact form submissions look polished and help you convert more leads into customers!
