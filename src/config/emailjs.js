// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new email service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Service ID, Template ID, and Public Key
// 6. Replace the values in .env file

export const emailJSConfig = {
  serviceId: process.env.EMAILJS_SERVICE_ID || 'service_11lbg1v',
  templateId: process.env.EMAILJS_TEMPLATE_ID || 'template_7iol0v5',
  autoReplyTemplateId:
    process.env.EMAILJS_AUTO_REPLY_TEMPLATE_ID || 'YOUR_AUTO_REPLY_TEMPLATE_ID',
  publicKey: process.env.EMAILJS_PUBLIC_KEY || '--WeQoDLNoAzR1WZQ',
};

// Validate EmailJS configuration
export const isEmailJSConfigured = () => {
  return (
    emailJSConfig.serviceId !== 'YOUR_SERVICE_ID' &&
    emailJSConfig.templateId !== 'YOUR_TEMPLATE_ID' &&
    emailJSConfig.publicKey !== 'YOUR_PUBLIC_KEY' &&
    emailJSConfig.serviceId.length > 0 &&
    emailJSConfig.templateId.length > 0 &&
    emailJSConfig.publicKey.length > 0
  );
};

// Check if auto-reply is configured (optional feature)
export const isAutoReplyConfigured = () => {
  return (
    emailJSConfig.autoReplyTemplateId !== 'YOUR_AUTO_REPLY_TEMPLATE_ID' &&
    emailJSConfig.autoReplyTemplateId.length > 0
  );
};

// Email template variables that will be sent:
// - from_name: User's name
// - from_email: User's email
// - company: User's company (optional)
// - project_type: Selected project type
// - message: User's message
// - to_email: Your business email (dev@boundlesedge.com)

// Example EmailJS template structure:
/*
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
*/
