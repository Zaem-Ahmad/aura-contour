# Resend Email Setup Guide

## Configuration Steps

1. **Get your Resend API Key**
   - Sign up at [https://resend.com](https://resend.com)
   - Go to API Keys section
   - Create a new API key
   - Copy the key (starts with `re_`)

2. **Set up Environment Variables**
   Create a `.env.local` file in the root directory with:
   ```env
   RESEND_API_KEY=re_your_actual_api_key_here
   RESEND_FROM_EMAIL=Aura Contour <onboarding@resend.dev>
   RESEND_SEND_CONFIRMATION=false
   ```

3. **Verify Your Domain (Important!)**
   - In Resend dashboard, go to Domains
   - Add and verify your domain
   - Update `RESEND_FROM_EMAIL` to use your verified domain
   - Example: `Aura Contour <contact@yourdomain.com>`

4. **Optional: Enable Confirmation Emails**
   - Set `RESEND_SEND_CONFIRMATION=true` to send auto-reply to users
   - This sends a thank you email when they submit the contact form

## Email Configuration

- **To Email**: Currently set to `auracontour999@gmail.com`
- **From Email**: Configured via `RESEND_FROM_EMAIL` environment variable
- **Reply To**: Automatically set to the user's email address

## Testing

1. Fill out the contact form on your website
2. Check your Resend dashboard for sent emails
3. Verify the email arrives at `auracontour999@gmail.com`

## Troubleshooting

- **"Email service is not configured"**: Make sure `RESEND_API_KEY` is set in `.env.local`
- **Email not sending**: Verify your domain in Resend dashboard
- **Check Resend dashboard logs**: View detailed error messages in Resend dashboard


