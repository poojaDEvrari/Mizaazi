import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, eventDate, message } = await request.json()

    // Create email content
    const emailContent = `
New Booking Request for Mizaazi

Client Details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Event Date: ${eventDate}

Message:
${message}


    `.trim()

    // For now, we'll use a simple mailto approach
    // In production, you'd want to use a service like Resend, SendGrid, or Nodemailer
    const mailtoLink = `mailto:manishkumarsingh8954@gmail.com?subject=New Booking Request from ${name}&body=${encodeURIComponent(emailContent)}`

    return NextResponse.json({
      success: true,
      message: "Booking request received successfully!",
      mailtoLink,
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, message: "Failed to process booking request" }, { status: 500 })
  }
}
