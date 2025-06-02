import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { insertContactMessageSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Create nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER || process.env.GMAIL_USER || 'portfolio@example.com',
          pass: process.env.EMAIL_PASS || process.env.GMAIL_PASS || 'defaultpass'
        }
      });

      // Email content
      const mailOptions = {
        from: process.env.EMAIL_USER || process.env.GMAIL_USER || 'portfolio@example.com',
        to: 'sai.maradapudi@example.com', // Portfolio owner's email
        subject: `Portfolio Contact: ${validatedData.subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Subject:</strong> ${validatedData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        `,
        replyTo: validatedData.email
      };

      // Send email
      await transporter.sendMail(mailOptions);

      res.json({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon." 
      });
    } catch (error) {
      console.error('Contact form error:', error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Please check your form data",
          errors: error.errors
        });
      }

      res.status(500).json({
        success: false,
        message: "Failed to send message. Please try again later."
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
