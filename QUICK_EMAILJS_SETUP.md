# Quick EmailJS Setup Guide 🚀

## The contact form is working but needs EmailJS configuration to send emails.

### Step 1: Create EmailJS Account (5 minutes)
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Gmail Service (3 minutes)
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Select "Gmail"
4. Click "Connect Account" and authorize with your Gmail
5. **Copy your Service ID** (looks like: `service_abc123`)

### Step 3: Create Email Template (2 minutes)
1. Go to "Email Templates"
2. Click "Create New Template"
3. **Template Name**: Portfolio Contact Form
4. **Subject**: `New message from {{from_name}} - Portfolio Contact`
5. **Content**:
```
Hello Joseph,

You received a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

Reply to: {{from_email}}
```
6. Save and **copy your Template ID** (looks like: `template_xyz789`)

### Step 4: Get Public Key (1 minute)
1. Go to "Account" in the left sidebar
2. **Copy your Public Key** (looks like: `user_def456`)

### Step 5: Update Your Environment File (1 minute)
1. Open `.env.local` in your project root
2. Replace the placeholder values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_def456
```

### Step 6: Restart Development Server
```bash
npm run dev
```

### Test Your Contact Form ✅
- Fill out the contact form
- You should receive an email at your Gmail account
- The form will show a success message

---

## Alternative Contact Methods (Working Now)
While setting up EmailJS, clients can still reach you via:
- **WhatsApp**: Click the floating green button (bottom right)
- **Direct Email**: joedev247@gmail.com
- **Phone**: +237 653 956 170

## Troubleshooting
- **400 Error**: Usually means incorrect Service ID or Template ID
- **422 Error**: Template variables don't match
- **No emails**: Check Gmail spam folder
- **Still not working**: Contact form will show detailed error messages

## Free Plan Limits
- 200 emails per month
- Perfect for portfolio contact forms

---
*Once configured, all contact form submissions will be sent directly to your email! 📧*
