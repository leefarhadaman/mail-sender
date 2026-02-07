require('dotenv').config()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// Function to send email with dynamic recipient
async function sendEmail(recipientEmail, subject, textContent, htmlContent) {
  const msg = {
    to: recipientEmail, // Dynamic recipient
    from: 'your-verified-email@example.com', // Your verified sender email (simplified format)
    replyTo: 'your-verified-email@example.com', // Reply-to email
    subject: subject,
    text: textContent,
    html: htmlContent,
  }

  try {
    const response = await sgMail.send(msg)
    console.log('✅ Email sent successfully!')
    console.log('Status Code:', response[0].statusCode)
    console.log('Message ID:', response[0].headers['x-message-id'])
    console.log('\n📧 Email Details:')
    console.log('From:', msg.from)
    console.log('To:', msg.to)
    console.log('Subject:', msg.subject)
    console.log('\n⚠️  If email not received, check:')
    console.log('1. Spam/Junk folder')
    console.log('2. SendGrid Activity Feed: https://app.sendgrid.com/email_activity')
    console.log('3. Verify sender email in SendGrid: https://app.sendgrid.com/settings/sender_auth/senders')
    return response
  } catch (error) {
    console.error('❌ Error sending email:', error.response?.body || error)
    throw error
  }
}

// Example usage - replace with your dynamic recipient
const recipientEmail = 'recipient@example.com'
const subject = 'Welcome to Our Email Service'
const textContent = `Hello there,

We hope this email finds you well!

This is a test email sent through our SendGrid integration. We're excited to have our email service up and running.

If you have any questions or need assistance, feel free to reach out to us.

Best regards,
The Team`

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #4CAF50; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
    .content { background-color: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
    .footer { background-color: #333; color: white; padding: 15px; text-align: center; font-size: 12px; border-radius: 0 0 5px 5px; }
    .button { background-color: #4CAF50; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome! 👋</h1>
    </div>
    <div class="content">
      <h2>Hello there,</h2>
      <p>We hope this email finds you well!</p>
      <p>This is a test email sent through our <strong>SendGrid integration</strong>. We're excited to have our email service up and running.</p>
      <p>Our email system is now capable of:</p>
      <ul>
        <li>✅ Sending dynamic emails to any recipient</li>
        <li>✅ Beautiful HTML formatting</li>
        <li>✅ Secure API key management</li>
        <li>✅ Professional email templates</li>
      </ul>
      <p>If you have any questions or need assistance, feel free to reach out to us.</p>
      <p><strong>Best regards,</strong><br>The Team</p>
    </div>
    <div class="footer">
      <p>© 2026 Your Company. All rights reserved.</p>
      <p>This email was sent to recipient@example.com</p>
    </div>
  </div>
</body>
</html>
`

sendEmail(recipientEmail, subject, textContent, htmlContent)