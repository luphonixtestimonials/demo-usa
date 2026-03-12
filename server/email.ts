import nodemailer from "nodemailer";

interface EmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmails(data: EmailData) {
  const { firstName, lastName, email, phone, company, service, message } = data;
  const fullName = `${firstName} ${lastName}`;

  // Email to the owner
  const adminMailOptions = {
    from: `"Contact Form" <${process.env.SMTP_USER || "Info@6VCconsulting.com"}>`,
    to: "Info@6VCconsulting.com",
    subject: `New Contact Form Submission from ${fullName}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Company:</strong> ${company || "N/A"}</p>
      <p><strong>Service Interest:</strong> ${service}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  // Confirmation email to the user
  const userMailOptions = {
    from: `"6VC Consulting" <${process.env.SMTP_USER || "Info@6VCconsulting.com"}>`,
    to: email,
    subject: "Thank You for Contacting 6VC Consulting",
    html: `
      <h2>Hello ${firstName},</h2>
      <p>Thank you for reaching out to 6VC Consulting. We have received your message regarding <strong>${service}</strong>.</p>
      <p>Our team will review your inquiry and get back to you within 24 hours.</p>
      <br>
      <p><strong>Your Message Summary:</strong></p>
      <p>${message}</p>
      <br>
      <p>Best Regards,</p>
      <p><strong>The 6VC Consulting Team</strong></p>
    `,
  };

  try {
    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);
    return { success: true };
  } catch (error) {
    console.error("Error sending emails:", error);
    throw new Error("Failed to send emails");
  }
}
