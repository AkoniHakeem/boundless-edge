import { Handler } from '@netlify/functions';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    const { name, email, company, projectType, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Missing required fields' }),
      };
    }

        // Send confirmation email to client
    const clientEmail = await resend.emails.send({
      from: 'Boundless Edge <onboarding@resend.dev>',
      to: [email],
      subject: 'Thanks for reaching out - We received your message!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Confirmation</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <!-- Header -->
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #667eea; margin-bottom: 10px;">Boundless Edge</h1>
              <p style="color: #666; margin: 0;">Transforming Ideas into Reality</p>
            </div>
            
            <!-- Main Content -->
            <div style="background: #f8f9fa; padding: 30px; border-radius: 10px; margin-bottom: 30px;">
              <h2 style="color: #333; margin-top: 0;">Hi ${name}!</h2>
              <p>Thank you for reaching out to Boundless Edge. We have received your inquiry and are excited to learn about your project.</p>
              
              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #667eea; margin-top: 0;">Your Message Details:</h3>
                <ul style="list-style: none; padding: 0;">
                  <li style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</li>
                  <li style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</li>
                  ${
                    company
                      ? `<li style="margin-bottom: 10px;"><strong>Company:</strong> ${company}</li>`
                      : ''
                  }
                  ${
                    projectType
                      ? `<li style="margin-bottom: 10px;"><strong>Project Type:</strong> ${projectType}</li>`
                      : ''
                  }
                  <li style="margin-bottom: 10px;"><strong>Message:</strong></li>
                  <li style="background: #f1f3f4; padding: 10px; border-radius: 4px; font-style: italic;">
                    "${message}"
                  </li>
                </ul>
              </div>

              <div style="background: #667eea; color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
                <h3 style="margin-top: 0; color: white;">What Happens Next?</h3>
                <p style="margin-bottom: 0;">Our team will review your project requirements and get back to you within 24 hours to discuss how we can bring your ideas to reality.</p>
              </div>
            </div>
            
            <!-- Services Overview -->
            <div style="margin-bottom: 30px;">
              <h3 style="color: #333;">Our Services Include:</h3>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 15px;">
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                  <strong>Web Development</strong>
                  <p style="margin: 5px 0 0; font-size: 14px; color: #666;">Custom websites & web applications</p>
                </div>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                  <strong>Mobile Apps</strong>
                  <p style="margin: 5px 0 0; font-size: 14px; color: #666;">iOS & Android applications</p>
                </div>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                  <strong>Cloud Solutions</strong>
                  <p style="margin: 5px 0 0; font-size: 14px; color: #666;">Scalable cloud infrastructure</p>
                </div>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                  <strong>Digital Strategy</strong>
                  <p style="margin: 5px 0 0; font-size: 14px; color: #666;">Comprehensive digital transformation</p>
                </div>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="border-top: 1px solid #eee; padding-top: 20px; text-align: center; color: #666; font-size: 14px;">
              <p>Questions? Contact us at <a href="mailto:service@boundlesedge.com" style="color: #667eea;">service@boundlesedge.com</a></p>
              <p style="margin: 10px 0;">Boundless Edge Limited</p>
              <p style="margin: 0;">Building Tomorrow's Technology Today</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Send notification email to admin
    const adminEmail = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['service@boundlesedge.com'],
      subject: `New Contact Form Submission: ${
        projectType || 'General Inquiry'
      } - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <!-- Header -->
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #667eea; margin-bottom: 10px;">Boundless Edge</h1>
              <p style="color: #666; margin: 0;">New Contact Form Submission</p>
            </div>
            
            <!-- Alert Box -->
            <div style="background: #d4edda; border: 1px solid #c3e6cb; color: #155724; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
              <strong>New Inquiry Alert!</strong> A potential client has submitted a contact form.
            </div>
            
            <!-- Contact Details -->
            <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
              <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
              
              <div style="background: white; padding: 20px; border-radius: 8px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Name:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;">
                      <a href="mailto:${email}" style="color: #667eea;">${email}</a>
                    </td>
                  </tr>
                  ${
                    company
                      ? `
                  <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Company:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;">${company}</td>
                  </tr>
                  `
                      : ''
                  }
                  ${
                    projectType
                      ? `
                  <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Project Type:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;">
                      <span style="background: #667eea; color: white; padding: 4px 12px; border-radius: 15px; font-size: 12px;">
                        ${projectType}
                      </span>
                    </td>
                  </tr>
                  `
                      : ''
                  }
                  <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Submitted:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;">${new Date().toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; font-weight: bold; vertical-align: top;">Message:</td>
                    <td style="padding: 10px;">
                      <div style="background: #f1f3f4; padding: 15px; border-radius: 4px; font-style: italic; line-height: 1.6;">
                        "${message}"
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            
            <!-- Quick Actions -->
            <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #856404; margin-top: 0;">Quick Actions:</h3>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <a href="mailto:${email}" style="background: #667eea; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px; text-align: center; display: block;">
                  Reply to Client
                </a>
                <a href="mailto:${email}?cc=service@boundlesedge.com&subject=Project Discussion - ${name}" 
                   style="background: #28a745; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px; text-align: center; display: block;">
                   Schedule Meeting
                </a>
              </div>
            </div>
            
            <!-- Response Priority -->
            <div style="background: ${
              projectType
                ? projectType.includes('Enterprise')
                  ? '#dc3545'
                  : projectType.includes('E-commerce')
                  ? '#fd7e14'
                  : '#17a2b8'
                : '#17a2b8'
            }; color: white; padding: 15px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
              <strong>Priority Level: ${
                projectType
                  ? projectType.includes('Enterprise')
                    ? 'HIGH'
                    : projectType.includes('E-commerce')
                    ? 'MEDIUM'
                    : 'NORMAL'
                  : 'NORMAL'
              }</strong>
              <p style="margin: 5px 0 0; font-size: 14px;">
                ${
                  projectType
                    ? projectType.includes('Enterprise')
                      ? 'Respond within 4 hours'
                      : projectType.includes('E-commerce')
                      ? 'Respond within 12 hours'
                      : 'Respond within 24 hours'
                    : 'Respond within 24 hours'
                }
              </p>
            </div>
            
            <!-- Footer -->
            <div style="border-top: 1px solid #eee; padding-top: 20px; text-align: center; color: #666; font-size: 14px;">
              <p>Business Development Team</p>
              <p style="margin: 0;">Boundless Edge Limited</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log('Contact form processed:', {
      client: name,
      email,
      projectType: projectType || 'General Inquiry',
      clientEmailId: clientEmail.data?.id,
      adminEmailId: adminEmail.data?.id,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message:
          "Message sent successfully! We'll get back to you within 24 hours.",
        emailSent: true,
      }),
    };
  } catch (error) {
    console.error('Error processing contact form:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error sending message. Please try again.',
        error:
          process.env.NODE_ENV === 'development'
            ? (error as Error).message
            : undefined,
      }),
    };
  }
};
