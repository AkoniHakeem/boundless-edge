# EmailJS Setup Instructions

## Overview

EmailJS allows you to send emails directly from the frontend without needing a backend server. This guide will help you set up EmailJS for the Boundless Edge contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your provider
5. Note down the **Service ID** (e.g., `service_xyz123`)

### For Gmail:

- Allow "Less secure app access" or use App Passwords if you have 2FA enabled
- Use your Gmail credentials

### For Outlook/Hotmail:

- Use your Microsoft account credentials

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

Hello Boundless Edge Team,

You have received a new contact form submission from your website:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Project Type: {{project_type}}

Message:
{{message}}

Please respond to: {{from_email}}

Best regards,
Boundless Edge Contact System
```

4. Save the template and note down the **Template ID** (e.g., `template_abc456`)

## Step 4: Get Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `user_def789`)

## Step 5: Update Configuration

1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
EMAILJS_SERVICE_ID=service_xyz123
EMAILJS_TEMPLATE_ID=template_abc456
EMAILJS_PUBLIC_KEY=user_def789
```

## Step 6: Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the test form
4. Check your email for the message

## Template Variables

The following variables are automatically sent from the contact form:

- `{{from_name}}` - User's full name
- `{{from_email}}` - User's email address
- `{{company}}` - User's company (optional)
- `{{project_type}}` - Selected project type
- `{{message}}` - User's message
- `{{to_email}}` - Your business email (dev@boundlesedge.com)

## Security Notes

- The `.env` file is ignored by Git to keep your credentials secure
- For production deployment, set these as environment variables in your hosting platform (Netlify, Vercel, etc.)
- EmailJS public key is safe to expose in frontend code - it's designed for client-side use

## Troubleshooting

- **"User ID is required"**: Make sure your public key is correct
- **"Template not found"**: Verify your template ID is correct
- **"Service not found"**: Check your service ID
- **Emails not received**: Check spam folder, verify email service setup

## Free Plan Limits

- 200 emails/month
- EmailJS branding in emails
- Limited to 1 email service

For production use, consider upgrading to a paid plan for:

- More emails
- Remove EmailJS branding
- Multiple email services
- Better support

## Next Steps

Once EmailJS is configured, the contact form will:

1. Send emails directly to dev@boundlesedge.com
2. Show success/error notifications to users
3. Reset the form after successful submission
4. Handle errors gracefully with user-friendly messages
