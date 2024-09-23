// pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter using SMTP
    let transporter = nodemailer.createTransport({
      service: "Gmail", // You can use other services like SendGrid, etc.
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail account
        pass: process.env.GMAIL_PASS, // Your Gmail app-specific password
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: email, // sender address
        to: process.env.RECIPIENT_EMAIL, // recipient email
        subject: `New Contact Form Submission from ${name}`, // Subject line
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // plain text body
      });

      // Respond with success
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ message: "Only POST requests are allowed" });
  }
}
