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
    const { full_name, email, phone, message } = data;

    // Validate required fields
    if (!full_name || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Missing required fields' }),
      };
    }

    // Send confirmation email to investor
    const investorEmail = await resend.emails.send({
      from: 'Boundless Edge <noreply@exchange.boundlesedge.com>',
      to: [email],
      subject: 'Investment Forum Confirmed - November 5, 2025',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Investment Forum Confirmation</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; background: #f9fafb;">
            
            <!-- Header with Logo -->
            <div style="text-align: center; margin-bottom: 30px; background: linear-gradient(135deg, #00050d 0%, #001a33 100%); padding: 40px 20px; border-radius: 12px;">
              <h1 style="color: #00aaff; margin: 0 0 10px 0; font-size: 32px; font-weight: 900;">BOUNDLESS EDGE</h1>
              <p style="color: #ffffff; margin: 0; font-size: 16px;">Investment Forum - November 5, 2025</p>
            </div>
            
            <!-- Main Content -->
            <div style="background: #ffffff; padding: 40px 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07); margin-bottom: 20px;">
              <h2 style="color: #00050d; margin-top: 0; font-size: 28px; font-weight: 700;">You're All Set, ${full_name}! 🎉</h2>
              
              <p style="font-size: 16px; color: #374151;">
                Thank you for registering for the <strong>Boundless Edge Investment Forum</strong>. We're excited to share our vision with you and explore how you can be part of Nigeria's next foundational ventures.
              </p>

              <!-- Event Details Box -->
              <div style="background: linear-gradient(135deg, #00aaff 0%, #0077cc 100%); color: white; padding: 25px; border-radius: 10px; margin: 25px 0;">
                <h3 style="margin-top: 0; color: white; font-size: 22px; font-weight: 700;">Event Details</h3>
                
                <div style="margin: 15px 0;">
                  <div style="display: inline-block; vertical-align: top; margin: 10px 0;">
                    <strong style="font-size: 16px;">📅 Date:</strong>
                    <p style="margin: 5px 0 0 0; font-size: 16px;">Wednesday, November 5, 2025</p>
                  </div>
                </div>

                <div style="margin: 15px 0;">
                  <div style="display: inline-block; vertical-align: top; margin: 10px 0;">
                    <strong style="font-size: 16px;">🕐 Time:</strong>
                    <p style="margin: 5px 0 0 0; font-size: 16px;">12:00 noon (UTC)</p>
                  </div>
                </div>

                <div style="margin: 15px 0;">
                  <div style="display: inline-block; vertical-align: top; margin: 10px 0;">
                    <strong style="font-size: 16px;">💻 Platform:</strong>
                    <p style="margin: 5px 0 0 0; font-size: 16px;">Google Meet</p>
                  </div>
                </div>

                <div style="background: rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 8px; margin-top: 20px;">
                  <p style="margin: 0 0 10px 0; font-size: 14px; font-weight: 600;">Meeting Link:</p>
                  <a href="https://meet.google.com/nop-aorj-yvv" 
                     style="color: white; font-size: 15px; word-break: break-all; text-decoration: underline;">
                    https://meet.google.com/nop-aorj-yvv
                  </a>
                </div>
              </div>

              <!-- Registration Details -->
              <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 25px 0;">
                <h4 style="margin-top: 0; color: #1f2937; font-size: 18px;">Your Registration Details</h4>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600; color: #4b5563;">Name:</td>
                    <td style="padding: 8px 0; color: #1f2937;">${full_name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600; color: #4b5563;">Email:</td>
                    <td style="padding: 8px 0; color: #1f2937;">${email}</td>
                  </tr>
                  ${
                    phone
                      ? `
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600; color: #4b5563;">Phone:</td>
                    <td style="padding: 8px 0; color: #1f2937;">${phone}</td>
                  </tr>
                  `
                      : ''
                  }
                </table>
              </div>

              <!-- What to Expect -->
              <div style="margin: 30px 0;">
                <h3 style="color: #00050d; font-size: 20px; font-weight: 700;">What to Expect</h3>
                <ul style="color: #374151; font-size: 15px; line-height: 1.8; padding-left: 20px;">
                  <li>Comprehensive overview of Boundless Edge's portfolio (WastePro, TVET, Stint360)</li>
                  <li>Financial performance and market opportunity analysis</li>
                  <li>Investment terms and equity structure</li>
                  <li>Q&A session with the founding team</li>
                  <li>Next steps for interested investors</li>
                </ul>
              </div>

              <!-- Next Steps -->
              <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; border-radius: 8px; margin: 25px 0;">
                <h4 style="margin-top: 0; color: #78350f; font-size: 18px;">📋 Next Steps</h4>
                <ol style="color: #78350f; font-size: 15px; line-height: 1.8; margin: 0; padding-left: 20px;">
                  <li><strong>Add to Calendar:</strong> Mark November 5, 2025 at 12:00 noon UTC</li>
                  <li><strong>Save the Meeting Link:</strong> Bookmark the Google Meet link above</li>
                  <li><strong>Prepare Questions:</strong> Think about what you'd like to know</li>
                </ol>
              </div>

              <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
                <p style="font-size: 15px; color: #6b7280; margin: 0;">
                  We're looking forward to meeting you and exploring this opportunity together.
                </p>
                <p style="font-size: 15px; color: #6b7280; margin: 10px 0 0 0;">
                  <strong>Best regards,</strong><br>
                  The Boundless Edge Team
                </p>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 14px;">
              <p style="margin: 5px 0;">
                Questions? Contact us at 
                <a href="mailto:dev@boundlesedge.com" style="color: #00aaff; text-decoration: none;">dev@boundlesedge.com</a>
              </p>
              <p style="margin: 5px 0;">📞 +234 701 163 0342</p>
              <p style="margin: 15px 0 5px 0; color: #9ca3af;">Boundless Edge Limited</p>
              <p style="margin: 0; color: #9ca3af;">Transforming Ideas into Reality</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Send notification email to admin
    const adminEmail = await resend.emails.send({
      from: 'Investment Forum <notifications@exchange.boundlesedge.com>',
      to: ['service@boundlesedge.com'],
      subject: `New Investment Forum Registration - ${full_name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Investment Forum Registration</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            
            <!-- Header -->
            <div style="text-align: center; margin-bottom: 30px; background: linear-gradient(135deg, #00050d 0%, #001a33 100%); padding: 30px 20px; border-radius: 12px;">
              <h1 style="color: #00aaff; margin: 0 0 10px 0; font-size: 28px;">BOUNDLESS EDGE</h1>
              <p style="color: #ffffff; margin: 0;">New Investment Forum Registration</p>
            </div>
            
            <!-- Alert Box -->
            <div style="background: #d1fae5; border: 2px solid #10b981; color: #065f46; padding: 20px; border-radius: 10px; margin-bottom: 25px;">
              <strong style="font-size: 18px;">🎯 New Registration Alert!</strong>
              <p style="margin: 10px 0 0 0;">A new investor has registered for the Investment Forum.</p>
            </div>
            
            <!-- Registration Details -->
            <div style="background: #f9fafb; padding: 30px; border-radius: 12px; margin-bottom: 25px;">
              <h2 style="color: #00050d; margin-top: 0; font-size: 24px;">Registration Details</h2>
              
              <div style="background: white; padding: 25px; border-radius: 10px; border: 1px solid #e5e7eb;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 35%;">Name:</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-size: 16px;">${full_name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                      <a href="mailto:${email}" style="color: #00aaff; text-decoration: none;">${email}</a>
                    </td>
                  </tr>
                  ${
                    phone
                      ? `
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Phone:</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                      <a href="tel:${phone}" style="color: #00aaff; text-decoration: none;">${phone}</a>
                    </td>
                  </tr>
                  `
                      : ''
                  }
                  ${
                    message
                      ? `
                  <tr>
                    <td style="padding: 12px 0; font-weight: bold; vertical-align: top;">Message:</td>
                    <td style="padding: 12px 0;">
                      <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; font-style: italic;">
                        ${message}
                      </div>
                    </td>
                  </tr>
                  `
                      : ''
                  }
                </table>
              </div>
            </div>

            <!-- Registration Time -->
            <div style="background: #eff6ff; padding: 20px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #3b82f6;">
              <p style="margin: 0; color: #1e40af; font-size: 14px;">
                <strong>Registered:</strong> ${new Date().toLocaleString(
                  'en-US',
                  {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZoneName: 'short',
                  }
                )}
              </p>
            </div>

            <!-- Action Items -->
            <div style="background: #fef3c7; padding: 20px; border-radius: 10px; border-left: 4px solid #f59e0b;">
              <h3 style="margin-top: 0; color: #78350f; font-size: 18px;">📝 Action Items</h3>
              <ul style="color: #78350f; margin: 0; padding-left: 20px;">
                <li>Add to investor tracking spreadsheet</li>
                <li>Prepare personalized follow-up</li>
              </ul>
            </div>

            <!-- Footer -->
            <div style="text-align: center; padding: 25px 0; border-top: 1px solid #e5e7eb; margin-top: 30px; color: #6b7280; font-size: 14px;">
              <p style="margin: 0;">Boundless Edge Investment Forum System</p>
              <p style="margin: 10px 0 0 0; color: #9ca3af; font-size: 13px;">This is an automated notification</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log('Investor confirmation email sent:', investorEmail);
    console.log('Admin notification email sent:', adminEmail);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Registration successful',
        emailSent: true,
      }),
    };
  } catch (error) {
    console.error('Error processing registration:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Failed to process registration',
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
    };
  }
};
