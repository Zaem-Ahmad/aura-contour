import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      )
    }

    // Support both RESEND_API_KEY and legacy API_KEY env names.
    const resendApiKey = process.env.RESEND_API_KEY || process.env.API_KEY
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured")
      return NextResponse.json(
        { error: "Email service is not configured. Please contact the administrator." },
        { status: 500 }
      )
    }

    const resend = new Resend(resendApiKey)

    // Map subject values to readable labels
    const subjectLabels: Record<string, string> = {
      booking: "Booking Inquiry",
      services: "Services Question",
      feedback: "Feedback",
      other: "Other",
    }
    const subjectLabel = subjectLabels[subject] || subject

    const fallbackSender = "Aura Contour <onboarding@resend.dev>"
    const senderFrom = process.env.RESEND_FROM_EMAIL || fallbackSender
    const recipientEmail = process.env.CONTACT_TO_EMAIL || "auracontour999@gmail.com"

    const emailPayload = {
      from: senderFrom,
      to: [recipientEmail],
      replyTo: email,
      subject: `Contact Form: ${subjectLabel}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #d4af37 0%, #b8941f 100%);
                color: white;
                padding: 30px;
                text-align: center;
                border-radius: 10px 10px 0 0;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background: white;
                border-left: 4px solid #d4af37;
                border-radius: 5px;
              }
              .field-label {
                font-weight: bold;
                color: #d4af37;
                margin-bottom: 5px;
                text-transform: uppercase;
                font-size: 12px;
                letter-spacing: 1px;
              }
              .field-value {
                color: #333;
                font-size: 16px;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-left: 4px solid #d4af37;
                border-radius: 5px;
                margin-top: 10px;
                white-space: pre-wrap;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #ddd;
                color: #666;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Aura Contour Aesthetic & Beauty Salon</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Name</div>
                <div class="field-value">${name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value">
                  <a href="mailto:${email}" style="color: #d4af37; text-decoration: none;">${email}</a>
                </div>
              </div>
              
              ${phone ? `
              <div class="field">
                <div class="field-label">Phone</div>
                <div class="field-value">
                  <a href="tel:${phone}" style="color: #d4af37; text-decoration: none;">${phone}</a>
                </div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="field-label">Subject</div>
                <div class="field-value">${subjectLabel}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Message</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div class="footer">
                <p>This email was sent from the Aura Contour contact form.</p>
                <p>You can reply directly to this email to respond to ${name}.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    }

    // Send email to Aura Contour
    let { error } = await resend.emails.send(emailPayload)

    // Retry with Resend's onboarding sender if custom sender/domain fails.
    if (error && senderFrom !== fallbackSender) {
      console.error("Resend primary sender failed, retrying with fallback sender:", error)
      const retryResult = await resend.emails.send({ ...emailPayload, from: fallbackSender })
      error = retryResult.error
    }

    // If account is in Resend test mode, auto-route to the account owner's allowed address.
    if (
      error &&
      error.name === "validation_error" &&
      typeof error.message === "string" &&
      error.message.includes("You can only send testing emails to your own email address")
    ) {
      const match = error.message.match(/\(([^)]+)\)/)
      const allowedTestRecipient = match?.[1]

      if (allowedTestRecipient) {
        console.error(`Resend test mode detected, retrying to allowed recipient: ${allowedTestRecipient}`)
        const retryToAllowed = await resend.emails.send({
          ...emailPayload,
          from: fallbackSender,
          to: [allowedTestRecipient],
        })
        error = retryToAllowed.error
      }
    }

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Unable to send right now. Please try again in a moment or contact us on WhatsApp." },
        { status: 500 }
      )
    }

    // Optionally send a confirmation email to the user
    if (process.env.RESEND_SEND_CONFIRMATION === "true") {
      await resend.emails.send({
        from: senderFrom,
        to: [email],
        subject: "Thank you for contacting Aura Contour",
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body {
                  font-family: Arial, sans-serif;
                  line-height: 1.6;
                  color: #333;
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                }
                .header {
                  background: linear-gradient(135deg, #d4af37 0%, #b8941f 100%);
                  color: white;
                  padding: 30px;
                  text-align: center;
                  border-radius: 10px 10px 0 0;
                }
                .content {
                  background: #f9f9f9;
                  padding: 30px;
                  border-radius: 0 0 10px 10px;
                }
                .footer {
                  text-align: center;
                  margin-top: 30px;
                  padding-top: 20px;
                  border-top: 1px solid #ddd;
                  color: #666;
                  font-size: 12px;
                }
              </style>
            </head>
            <body>
              <div class="header">
                <h1 style="margin: 0; font-size: 28px;">Thank You, ${name}!</h1>
              </div>
              <div class="content">
                <p>We've received your message and will get back to you as soon as possible.</p>
                <p>Our team typically responds within 24-48 hours.</p>
                <p>If you have any urgent inquiries, please feel free to contact us directly:</p>
                <ul>
                  <li><strong>Phone:</strong> +92 3373248248</li>
                  <li><strong>Email:</strong> auracontour999@gmail.com</li>
                </ul>
                <p>We look forward to helping you enhance your beauty and confidence!</p>
                <p style="margin-top: 30px;">Best regards,<br><strong>The Aura Contour Team</strong></p>
              </div>
              <div class="footer">
                <p>Aura Contour Aesthetic & Beauty Salon</p>
                <p>Suit 203 2nd floor, Phot 126 C lane 1 A, Al Murtaza Commercial Phase VIII, DHA Karachi</p>
              </div>
            </body>
          </html>
        `,
      })
    }

    return NextResponse.json(
      { 
        success: true,
        message: "Your message has been sent successfully! We'll get back to you soon." 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { 
        error: "An error occurred while sending your message. Please try again later." 
      },
      { status: 500 }
    )
  }
}

