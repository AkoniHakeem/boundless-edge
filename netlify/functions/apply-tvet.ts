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
    const { name, email, phone, track, message } = data;

    // Validate required fields
    if (!name || !email || !phone || !track) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Missing required fields' }),
      };
    }

    // Send confirmation email to applicant
    const applicantEmail = await resend.emails.send({
      from: 'Boundless Edge <noreply@exchange.boundlesedge.com>',
      to: [email],
      subject: 'TVET Program Application Received - Next Steps',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>TVET Application Confirmation</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <!-- Header -->
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #667eea; margin-bottom: 10px;">Boundless Edge</h1>
              <p style="color: #666; margin: 0;">TVET Program Application Confirmation</p>
            </div>
            
            <!-- Main Content -->
            <div style="background: #f8f9fa; padding: 30px; border-radius: 10px; margin-bottom: 30px;">
              <h2 style="color: #333; margin-top: 0;">Hi ${name}!</h2>
              <p>Thank you for applying to our <strong>${track}</strong> program. We have received your application and are excited about your interest in joining Boundless Edge TVET.</p>
              
              <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #667eea; margin-top: 0;">Application Details:</h3>
                <ul style="list-style: none; padding: 0;">
                  <li style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</li>
                  <li style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</li>
                  <li style="margin-bottom: 10px;"><strong>Phone:</strong> ${phone}</li>
                  <li style="margin-bottom: 10px;"><strong>Track:</strong> ${track}</li>
                  ${
                    message
                      ? `<li style="margin-bottom: 10px;"><strong>Message:</strong> ${message}</li>`
                      : ''
                  }
                </ul>
              </div>

              <div style="background: #667eea; color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
                <h3 style="margin-top: 0; color: white;">Next Step: Complete Your Payment</h3>
                <p style="margin-bottom: 20px;">To secure your spot in the program, please complete your payment using the link below:</p>
                <a href="https://paystack.shop/pay/tvet-program" 
                   style="display: inline-block; background: white; color: #667eea; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; margin: 10px 0;">
                   Complete Payment Now
                </a>
                <p style="font-size: 14px; margin-top: 15px; opacity: 0.9;">
                  Payment Link: https://paystack.shop/pay/tvet-program
                </p>
              </div>
            </div>
            
            <!-- What Happens Next -->
            <div style="margin-bottom: 30px;">
              <h3 style="color: #333;">What Happens Next?</h3>
              <ol style="padding-left: 20px;">
                <li style="margin-bottom: 10px;">Complete your payment using the link above</li>
                <li style="margin-bottom: 10px;">Our team will review your application within 2-3 business days</li>
                <li style="margin-bottom: 10px;">You'll receive an email with program details and start date</li>
                <li style="margin-bottom: 10px;">Welcome packet with curriculum and preparation materials</li>
              </ol>
            </div>
            
            <!-- Footer -->
            <div style="border-top: 1px solid #eee; padding-top: 20px; text-align: center; color: #666; font-size: 14px;">
              <p>Questions? Contact us at <a href="mailto:service@boundlesedge.com" style="color: #667eea;">service@boundlesedge.com</a></p>
              <p style="margin: 10px 0;">Boundless Edge Limited</p>
              <p style="margin: 0;">Transforming Ideas into Reality</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Send notification email to admin
    const adminEmail = await resend.emails.send({
      from: 'TVET Applications <notifications@exchange.boundlesedge.com>',
      to: ['service@boundlesedge.com'],
      subject: `New TVET Application: ${track} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New TVET Application</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <!-- Header -->
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #667eea; margin-bottom: 10px;">Boundless Edge</h1>
              <p style="color: #666; margin: 0;">New TVET Program Application</p>
            </div>
            
            <!-- Alert Box -->
            <div style="background: #d4edda; border: 1px solid #c3e6cb; color: #155724; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
              <strong>New Application Alert!</strong> A new TVET program application has been submitted.
            </div>
            
            <!-- Application Details -->
            <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
              <h2 style="color: #333; margin-top: 0;">Application Details</h2>
              
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
                  <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;">
                      <a href="tel:${phone}" style="color: #667eea;">${phone}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Track:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;">
                      <span style="background: #667eea; color: white; padding: 4px 12px; border-radius: 15px; font-size: 12px;">
                        ${track}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Applied:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;">${new Date().toLocaleString()}</td>
                  </tr>
                  ${
                    message
                      ? `
                  <tr>
                    <td style="padding: 10px; font-weight: bold; vertical-align: top;">Message:</td>
                    <td style="padding: 10px;">
                      <div style="background: #f1f3f4; padding: 10px; border-radius: 4px; font-style: italic;">
                        "${message}"
                      </div>
                    </td>
                  </tr>
                  `
                      : ''
                  }
                </table>
              </div>
            </div>
            
            <!-- Actions -->
            <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #856404; margin-top: 0;">Next Actions Required:</h3>
              <ul style="color: #856404; margin: 0; padding-left: 20px;">
                <li>Contact applicant within 24 hours</li>
                <li>Verify payment completion</li>
                <li>Send welcome packet and program materials</li>
                <li>Add to student management system</li>
              </ul>
            </div>
            
            <!-- Footer -->
            <div style="border-top: 1px solid #eee; padding-top: 20px; text-align: center; color: #666; font-size: 14px;">
              <p>TVET Program Administration</p>
              <p style="margin: 0;">Boundless Edge Limited</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log('TVET Application processed:', {
      applicant: name,
      track,
      applicantEmailId: applicantEmail.data?.id,
      adminEmailId: adminEmail.data?.id,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message:
          'Application received successfully! Check your email for next steps.',
        emailSent: true,
      }),
    };
  } catch (error) {
    console.error('Error processing TVET application:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error processing application. Please try again.',
        error:
          process.env.NODE_ENV === 'development'
            ? (error as Error).message
            : undefined,
      }),
    };
  }
};
