import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = contactSchema.parse(req.body);
      
      // In a real application, you would send an email here
      // For now, we'll just log the message and return success
      console.log("Contact form submission:", { name, email, message });
      
      // You can integrate with email services like SendGrid, Mailgun, etc.
      // const emailService = new EmailService();
      // await emailService.sendEmail({
      //   to: "mohini15oct@gmail.com",
      //   subject: `New message from ${name}`,
      //   text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      // });
      
      res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
