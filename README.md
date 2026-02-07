# SendGrid Email Sender

A professional Node.js email service built with SendGrid API for sending dynamic, beautifully formatted HTML emails.

## 🚀 Features

- ✅ Dynamic recipient email addresses
- ✅ Professional HTML email templates
- ✅ Plain text fallback for compatibility
- ✅ Secure API key management with environment variables
- ✅ Error handling and detailed logging
- ✅ Easy to customize and extend

## 📋 Prerequisites

- Node.js (v14 or higher)
- A SendGrid account with API key
- Verified sender email address in SendGrid

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/leefarhadaman/mail-sender.git
cd mail-sender
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Add your SendGrid API key and configuration to `.env`:
```env
SENDGRID_API_KEY=your_sendgrid_api_key_here
RECIPIENT_EMAIL=recipient@example.com
```

## 🔑 Getting Your SendGrid API Key

1. Sign up for a free account at [SendGrid](https://sendgrid.com/)
2. Navigate to Settings → API Keys
3. Click "Create API Key"
4. Give it a name and select "Full Access"
5. Copy the API key and add it to your `.env` file

## ✉️ Verify Your Sender Email

Before sending emails, you must verify your sender email address:

1. Go to [SendGrid Sender Authentication](https://app.sendgrid.com/settings/sender_auth/senders)
2. Click "Create New Sender"
3. Fill in your details (from email, company address, etc.)
4. Check your email inbox for the verification link
5. Click the verification link to activate your sender

## 🎯 Usage

Run the email sender:
```bash
node index.js
```

### Sending to Different Recipients

You can modify the recipient in `index.js` or pass it as an environment variable:

```bash
RECIPIENT_EMAIL=newemail@example.com node index.js
```

### Customizing Email Content

Edit the `sendEmail()` function call in `index.js`:

```javascript
const recipientEmail = 'recipient@example.com'
const subject = 'Your Custom Subject'
const textContent = 'Your plain text content'
const htmlContent = '<h1>Your HTML content</h1>'

sendEmail(recipientEmail, subject, textContent, htmlContent)
```

## 📧 Email Template

The included template features:
- Responsive design
- Professional styling
- Header, content, and footer sections
- Mobile-friendly layout
- Easy to customize colors and content

## 🔒 Security

- Never commit your `.env` file to version control
- The `.gitignore` file is configured to exclude sensitive files
- Keep your SendGrid API key secure and rotate it regularly
- Use environment-specific API keys for development and production

## 📊 Monitoring

Check your email delivery status:
- [SendGrid Activity Feed](https://app.sendgrid.com/email_activity)
- View delivery rates, bounces, and spam reports
- Track individual email status by Message ID

## 🐛 Troubleshooting

**Email not received?**
1. Check spam/junk folder
2. Verify sender email is authenticated in SendGrid
3. Check SendGrid Activity Feed for delivery status
4. Ensure API key has proper permissions

**403 Forbidden Error?**
- Your sender email needs to be verified in SendGrid
- Visit the Sender Authentication page to verify

**401 Unauthorized Error?**
- Check that your API key is correct
- Ensure API key starts with "SG."
- Verify API key has Full Access permissions

## 📝 Project Structure

```
.
├── index.js              # Main application file
├── package.json          # Project dependencies
├── .env                  # Environment variables (not in git)
├── .gitignore           # Git ignore rules
└── README.md            # This file
```

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📄 License

This project is open source and available.

## 👨‍💻 Developer

Developed by **Farhad Ali**

## 🔗 Resources

- [SendGrid Documentation](https://docs.sendgrid.com/)
- [SendGrid Node.js Library](https://github.com/sendgrid/sendgrid-nodejs)
- [Email Best Practices](https://sendgrid.com/docs/ui/sending-email/email-best-practices/)

## ⭐ Show Your Support

If you find this project helpful, please give it a star on GitHub!

---

**Note:** This is a demonstration project. Make sure to comply with email regulations (CAN-SPAM, GDPR, etc.) when sending emails in production.
