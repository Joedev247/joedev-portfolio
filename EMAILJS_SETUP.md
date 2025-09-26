# EmailJS Setup Guide for Contact Form

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to "Email Services" in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID** (e.g., service_abc123)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

### Template Subject:
```
New Contact Form Message from {{from_name}}
```

### Template Body:
```
Hello Joseph,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio website.
Reply directly to this email to respond to {{from_name}}.
```

4. Save the template and note down your **Template ID** (e.g., template_xyz789)

## Step 4: Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** (e.g., user_def456)

## Step 5: Update Environment Variables
1. Open your `.env.local` file
2. Replace the placeholder values with your actual credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_def456
```

## Step 6: Test the Contact Form
1. Restart your development server: `npm run dev`
2. Go to your contact form
3. Fill out and submit a test message
4. Check your email for the message

## Important Notes:
- EmailJS free plan allows 200 emails per month
- Keep your credentials secure and never commit them to public repositories
- The contact form will show success/error messages automatically
- Failed submissions will be logged to the browser console for debugging

## Troubleshooting:
- If emails aren't sending, check the browser console for errors
- Verify all environment variables are set correctly
- Ensure your email service is properly configured in EmailJS
- Check your spam folder for test emails

## Email Template Variables Used:
- `{{from_name}}` - Sender's name from the form
- `{{from_email}}` - Sender's email from the form  
- `{{message}}` - Message content from the form
- `{{to_email}}` - Your email (joedev247@gmail.com)
