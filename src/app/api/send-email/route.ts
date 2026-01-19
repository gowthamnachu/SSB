import { NextRequest, NextResponse } from 'next/server'
import * as brevo from '@getbrevo/brevo'

// Initialize Brevo API client
const apiInstance = new brevo.TransactionalEmailsApi()
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY || ''
)

// Site URL and Logo
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ssb-constructions.netlify.app'
const LOGO_URL = `${SITE_URL}/SSB_LOGO.png`

// Brand Colors
const COLORS = {
  navy: '#00032e',
  primary: '#2e5e7f',
  primaryDark: '#1e4a66',
  white: '#ffffff',
  lightGray: '#f8f9fa',
  border: '#e9ecef',
  textDark: '#1a1a1a',
  textMuted: '#6c757d',
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const currentDate = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })

    const referenceId = `SSB${Date.now().toString().slice(-8)}`

    // =============================================
    // OWNER NOTIFICATION EMAIL
    // =============================================
    const ownerEmail = new brevo.SendSmtpEmail()
    ownerEmail.sender = {
      name: process.env.SENDER_NAME || 'SSB Constructions',
      email: process.env.SENDER_EMAIL!,
    }
    ownerEmail.to = [
      {
        email: process.env.OWNER_EMAIL!,
        name: 'SSB Constructions',
      },
    ]
    ownerEmail.subject = `New Inquiry from ${name} - ${subject || 'General'}`
    ownerEmail.htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Quote Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f4f4; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: ${COLORS.white}; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background-color: ${COLORS.navy}; padding: 30px 40px; text-align: center;">
              <img src="${LOGO_URL}" alt="SSB Constructions" width="80" height="80" style="display: block; margin: 0 auto 15px; border-radius: 8px; background: ${COLORS.white}; padding: 6px;">
              <h1 style="color: ${COLORS.white}; margin: 0; font-size: 22px; font-weight: 600; letter-spacing: 0.3px;">New Quote Request Received</h1>
            </td>
          </tr>
          
          <!-- Alert -->
          <tr>
            <td style="background-color: #fef9e7; padding: 16px 40px; border-bottom: 1px solid #f7dc6f;">
              <p style="margin: 0; color: #7d6608; font-size: 14px;"><strong>Action Required:</strong> Please respond within 24 hours</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              
              <!-- Customer Details Section -->
              <h2 style="color: ${COLORS.navy}; margin: 0 0 20px; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid ${COLORS.primary}; padding-bottom: 8px;">Customer Details</h2>
              
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="padding: 14px 16px; background-color: ${COLORS.lightGray}; border-left: 3px solid ${COLORS.primary}; margin-bottom: 12px;">
                    <p style="margin: 0 0 4px; color: ${COLORS.textMuted}; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</p>
                    <p style="margin: 0; color: ${COLORS.textDark}; font-size: 16px; font-weight: 600;">${name}</p>
                  </td>
                </tr>
              </table>
              
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 12px;">
                <tr>
                  <td width="48%" style="padding: 14px 16px; background-color: ${COLORS.lightGray}; border-left: 3px solid ${COLORS.primary}; vertical-align: top;">
                    <p style="margin: 0 0 4px; color: ${COLORS.textMuted}; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                    <p style="margin: 0;"><a href="mailto:${email}" style="color: ${COLORS.primary}; font-size: 15px; font-weight: 500; text-decoration: none;">${email}</a></p>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="padding: 14px 16px; background-color: ${COLORS.lightGray}; border-left: 3px solid ${COLORS.primary}; vertical-align: top;">
                    <p style="margin: 0 0 4px; color: ${COLORS.textMuted}; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Phone</p>
                    <p style="margin: 0;">${phone ? `<a href="tel:${phone}" style="color: ${COLORS.primary}; font-size: 15px; font-weight: 500; text-decoration: none;">${phone}</a>` : `<span style="color: ${COLORS.textMuted}; font-size: 14px;">Not provided</span>`}</p>
                  </td>
                </tr>
              </table>
              
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="padding: 14px 16px; background-color: ${COLORS.lightGray}; border-left: 3px solid ${COLORS.primary};">
                    <p style="margin: 0 0 4px; color: ${COLORS.textMuted}; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Subject</p>
                    <p style="margin: 0; color: ${COLORS.textDark}; font-size: 15px; font-weight: 500;">${subject || 'General Inquiry'}</p>
                  </td>
                </tr>
              </table>
              
              <!-- Message Section -->
              <h2 style="color: ${COLORS.navy}; margin: 0 0 15px; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid ${COLORS.primary}; padding-bottom: 8px;">Message</h2>
              
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="padding: 20px; background-color: ${COLORS.white}; border: 1px solid ${COLORS.border}; border-left: 3px solid ${COLORS.primary}; border-radius: 4px;">
                    <p style="margin: 0; color: ${COLORS.textDark}; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>
              
              <!-- Action Buttons -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}" style="display: inline-block; background-color: ${COLORS.primary}; color: ${COLORS.white}; padding: 12px 30px; border-radius: 4px; text-decoration: none; font-weight: 600; font-size: 14px; margin-right: 10px;">Reply via Email</a>
                    ${phone ? `<a href="tel:${phone}" style="display: inline-block; background-color: ${COLORS.navy}; color: ${COLORS.white}; padding: 12px 30px; border-radius: 4px; text-decoration: none; font-weight: 600; font-size: 14px;">Call Customer</a>` : ''}
                  </td>
                </tr>
              </table>
              
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: ${COLORS.navy}; padding: 20px 40px; text-align: center;">
              <p style="margin: 0 0 5px; color: rgba(255,255,255,0.7); font-size: 12px;">Received on ${currentDate}</p>
              <p style="margin: 0; color: rgba(255,255,255,0.5); font-size: 11px;">Reference: ${referenceId}</p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `
    ownerEmail.textContent = `
NEW QUOTE REQUEST - SSB CONSTRUCTIONS
Reference: ${referenceId}

CUSTOMER DETAILS
----------------
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject || 'General Inquiry'}

MESSAGE
-------
${message}

Received: ${currentDate}
    `

    // =============================================
    // CUSTOMER THANK YOU EMAIL
    // =============================================
    const userEmail = new brevo.SendSmtpEmail()
    userEmail.sender = {
      name: process.env.SENDER_NAME || 'SSB Constructions',
      email: process.env.SENDER_EMAIL!,
    }
    userEmail.to = [
      {
        email: email,
        name: name,
      },
    ]
    userEmail.subject = 'Thank You for Contacting SSB Constructions & Roadways'
    userEmail.htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You - SSB Constructions</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f4f4; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: ${COLORS.white}; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background-color: ${COLORS.navy}; padding: 40px; text-align: center;">
              <img src="${LOGO_URL}" alt="SSB Constructions" width="100" height="100" style="display: block; margin: 0 auto 20px; border-radius: 10px; background: ${COLORS.white}; padding: 8px;">
              <h1 style="color: ${COLORS.white}; margin: 0 0 8px; font-size: 24px; font-weight: 600;">SSB Constructions & Roadways</h1>
              <p style="color: rgba(255,255,255,0.85); margin: 0; font-size: 14px; letter-spacing: 1px;">Building Infrastructure | Powering Progress</p>
            </td>
          </tr>
          
          <!-- Success Message -->
          <tr>
            <td style="background-color: #d4edda; padding: 16px 40px; border-bottom: 1px solid #c3e6cb;">
              <p style="margin: 0; color: #155724; font-size: 14px; text-align: center; font-weight: 500;">Your message has been received successfully</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              
              <h2 style="color: ${COLORS.primary}; margin: 0 0 15px; font-size: 22px; font-weight: 600;">Dear ${name},</h2>
              
              <p style="color: ${COLORS.textDark}; margin: 0 0 20px; font-size: 15px; line-height: 1.7;">Thank you for reaching out to SSB Constructions & Roadways. We appreciate your interest in our services and the opportunity to assist you with your project.</p>
              
              <!-- What's Next Box -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="background-color: #e8f4fd; padding: 25px; border-left: 4px solid ${COLORS.primary}; border-radius: 4px;">
                    <h3 style="color: ${COLORS.navy}; margin: 0 0 12px; font-size: 16px; font-weight: 600;">What Happens Next?</h3>
                    <p style="color: ${COLORS.textDark}; margin: 0; font-size: 14px; line-height: 1.6;">Our team will review your inquiry and respond within <strong>24 hours</strong> with a detailed consultation and competitive quote tailored to your requirements.</p>
                  </td>
                </tr>
              </table>
              
              <!-- Process Steps -->
              <h3 style="color: ${COLORS.navy}; margin: 0 0 20px; font-size: 15px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Our Process</h3>
              
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="padding: 15px; background-color: ${COLORS.lightGray}; border-radius: 4px; margin-bottom: 10px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="35" style="vertical-align: top;">
                          <div style="width: 28px; height: 28px; background-color: ${COLORS.primary}; border-radius: 50%; text-align: center; line-height: 28px; color: ${COLORS.white}; font-size: 13px; font-weight: 600;">1</div>
                        </td>
                        <td style="vertical-align: top; padding-left: 12px;">
                          <p style="margin: 0 0 3px; color: ${COLORS.textDark}; font-size: 14px; font-weight: 600;">Review & Analysis</p>
                          <p style="margin: 0; color: ${COLORS.textMuted}; font-size: 13px;">We analyze your project requirements</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td style="height: 10px;"></td></tr>
                <tr>
                  <td style="padding: 15px; background-color: ${COLORS.lightGray}; border-radius: 4px; margin-bottom: 10px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="35" style="vertical-align: top;">
                          <div style="width: 28px; height: 28px; background-color: ${COLORS.primary}; border-radius: 50%; text-align: center; line-height: 28px; color: ${COLORS.white}; font-size: 13px; font-weight: 600;">2</div>
                        </td>
                        <td style="vertical-align: top; padding-left: 12px;">
                          <p style="margin: 0 0 3px; color: ${COLORS.textDark}; font-size: 14px; font-weight: 600;">Custom Proposal</p>
                          <p style="margin: 0; color: ${COLORS.textMuted}; font-size: 13px;">We prepare a detailed quote and timeline</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td style="height: 10px;"></td></tr>
                <tr>
                  <td style="padding: 15px; background-color: ${COLORS.lightGray}; border-radius: 4px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="35" style="vertical-align: top;">
                          <div style="width: 28px; height: 28px; background-color: ${COLORS.primary}; border-radius: 50%; text-align: center; line-height: 28px; color: ${COLORS.white}; font-size: 13px; font-weight: 600;">3</div>
                        </td>
                        <td style="vertical-align: top; padding-left: 12px;">
                          <p style="margin: 0 0 3px; color: ${COLORS.textDark}; font-size: 14px; font-weight: 600;">Personal Follow-up</p>
                          <p style="margin: 0; color: ${COLORS.textMuted}; font-size: 13px;">We contact you to discuss your project</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Inquiry Reference -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="background-color: #fff8e1; padding: 20px; border: 1px solid #ffe082; border-radius: 4px;">
                    <h3 style="color: #7d6608; margin: 0 0 12px; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Your Inquiry Reference</h3>
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding: 5px 0;">
                          <span style="color: ${COLORS.textMuted}; font-size: 13px;">Reference ID:</span>
                          <span style="color: ${COLORS.textDark}; font-size: 13px; font-weight: 600; margin-left: 8px;">${referenceId}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 5px 0;">
                          <span style="color: ${COLORS.textMuted}; font-size: 13px;">Subject:</span>
                          <span style="color: ${COLORS.textDark}; font-size: 13px; margin-left: 8px;">${subject || 'General Inquiry'}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 5px 0;">
                          <span style="color: ${COLORS.textMuted}; font-size: 13px;">Submitted:</span>
                          <span style="color: ${COLORS.textDark}; font-size: 13px; margin-left: 8px;">${currentDate}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Contact Information -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 30px; border: 2px solid ${COLORS.primary}; border-radius: 6px;">
                <tr>
                  <td style="padding: 25px;">
                    <h3 style="color: ${COLORS.primary}; margin: 0 0 5px; font-size: 16px; font-weight: 600;">Need Immediate Assistance?</h3>
                    <p style="color: ${COLORS.textMuted}; margin: 0 0 20px; font-size: 13px;">Our team is available to help you directly.</p>
                    
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="48%" style="background-color: ${COLORS.lightGray}; padding: 18px; border-radius: 4px; text-align: center; vertical-align: top;">
                          <p style="margin: 0 0 5px; color: ${COLORS.textMuted}; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Phone</p>
                          <a href="tel:+918746966999" style="color: ${COLORS.navy}; font-size: 15px; font-weight: 600; text-decoration: none;">+91 87469 66999</a>
                        </td>
                        <td width="4%"></td>
                        <td width="48%" style="background-color: ${COLORS.lightGray}; padding: 18px; border-radius: 4px; text-align: center; vertical-align: top;">
                          <p style="margin: 0 0 5px; color: ${COLORS.textMuted}; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Email</p>
                          <a href="mailto:ssbsamalkot@gmail.com" style="color: ${COLORS.navy}; font-size: 14px; font-weight: 600; text-decoration: none;">ssbsamalkot@gmail.com</a>
                        </td>
                      </tr>
                      <tr><td colspan="3" style="height: 12px;"></td></tr>
                      <tr>
                        <td width="48%" style="background-color: ${COLORS.lightGray}; padding: 18px; border-radius: 4px; text-align: center; vertical-align: top;">
                          <p style="margin: 0 0 5px; color: ${COLORS.textMuted}; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Location</p>
                          <p style="color: ${COLORS.navy}; font-size: 13px; font-weight: 500; margin: 0;">Samalkot, East Godavari<br>Andhra Pradesh, India</p>
                        </td>
                        <td width="4%"></td>
                        <td width="48%" style="background-color: ${COLORS.lightGray}; padding: 18px; border-radius: 4px; text-align: center; vertical-align: top;">
                          <p style="margin: 0 0 5px; color: ${COLORS.textMuted}; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Working Hours</p>
                          <p style="color: ${COLORS.navy}; font-size: 13px; font-weight: 500; margin: 0;">Monday - Saturday<br>9:00 AM - 6:00 PM</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- CTA -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="background-color: ${COLORS.primary}; padding: 30px; border-radius: 6px; text-align: center;">
                    <p style="color: ${COLORS.white}; margin: 0 0 15px; font-size: 17px; font-weight: 500;">Ready to discuss your project?</p>
                    <a href="tel:+918746966999" style="display: inline-block; background-color: ${COLORS.white}; color: ${COLORS.primary}; padding: 12px 35px; border-radius: 4px; text-decoration: none; font-weight: 600; font-size: 14px;">Call Us Now</a>
                  </td>
                </tr>
              </table>
              
              <!-- Closing -->
              <p style="color: ${COLORS.textDark}; margin: 0 0 25px; font-size: 15px; line-height: 1.6;">We look forward to the opportunity to work with you and bring your vision to life.</p>
              
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-top: 1px solid ${COLORS.border}; padding-top: 25px;">
                <tr>
                  <td>
                    <p style="color: ${COLORS.textMuted}; margin: 0 0 5px; font-size: 14px;">Warm Regards,</p>
                    <p style="color: ${COLORS.navy}; margin: 0 0 5px; font-size: 16px; font-weight: 600;">SSB Constructions Team</p>
                    <p style="color: ${COLORS.textMuted}; margin: 0 0 15px; font-size: 13px; font-style: italic;">Building Dreams, Creating Realities</p>
                    <p style="color: ${COLORS.primary}; margin: 0; font-size: 12px; font-weight: 500;">11+ Years of Excellence | Rs. 80+ Crores Projects Delivered</p>
                  </td>
                </tr>
              </table>
              
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: ${COLORS.navy}; padding: 30px 40px; text-align: center;">
              <img src="${LOGO_URL}" alt="SSB" width="45" height="45" style="display: block; margin: 0 auto 12px; border-radius: 6px; background: ${COLORS.white}; padding: 4px;">
              <p style="color: ${COLORS.white}; margin: 0 0 5px; font-size: 14px; font-weight: 600;">SSB Constructions & Roadways</p>
              <p style="color: rgba(255,255,255,0.7); margin: 0 0 15px; font-size: 12px;">Quality | Reliability | Excellence</p>
              <table role="presentation" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
                <tr>
                  <td style="height: 1px; width: 80px; background-color: rgba(255,255,255,0.2);"></td>
                </tr>
              </table>
              <p style="color: rgba(255,255,255,0.5); margin: 15px 0 0; font-size: 11px;">&copy; ${new Date().getFullYear()} SSB Constructions & Roadways. All rights reserved.</p>
              <p style="color: rgba(255,255,255,0.4); margin: 8px 0 0; font-size: 10px;">This is an automated email. For assistance, contact <a href="mailto:ssbsamalkot@gmail.com" style="color: #90caf9;">ssbsamalkot@gmail.com</a></p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `
    userEmail.textContent = `
SSB CONSTRUCTIONS & ROADWAYS
============================

Dear ${name},

Thank you for reaching out to SSB Constructions & Roadways. We appreciate your interest in our services.

WHAT HAPPENS NEXT?
------------------
Our team will review your inquiry and respond within 24 hours with a detailed consultation and competitive quote tailored to your requirements.

YOUR INQUIRY REFERENCE
----------------------
Reference ID: ${referenceId}
Subject: ${subject || 'General Inquiry'}
Submitted: ${currentDate}

NEED IMMEDIATE ASSISTANCE?
--------------------------
Phone: +91 87469 66999
Email: ssbsamalkot@gmail.com
Location: Samalkot, East Godavari, Andhra Pradesh
Hours: Monday - Saturday, 9:00 AM - 6:00 PM

We look forward to the opportunity to work with you.

Warm Regards,
SSB Constructions Team
Building Dreams, Creating Realities

11+ Years of Excellence | Rs. 80+ Crores Projects Delivered

---
© ${new Date().getFullYear()} SSB Constructions & Roadways. All rights reserved.
    `

    // Send both emails
    const [ownerResult, userResult] = await Promise.all([
      apiInstance.sendTransacEmail(ownerEmail),
      apiInstance.sendTransacEmail(userEmail),
    ])

    console.log('Owner email sent:', ownerResult)
    console.log('User email sent:', userResult)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Emails sent successfully'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
