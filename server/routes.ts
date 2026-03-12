import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmails } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = req.body;
      console.log("Contact form submission attempt:", data.email);
      
      // Basic validation
      if (!data.email || !data.firstName || !data.message) {
        console.warn("Validation failed for contact form:", data);
        return res.status(400).json({ message: "Missing required fields" });
      }

      const result = await sendContactEmails(data);
      console.log("Email sending result:", result);
      res.status(200).json({ message: "Message sent successfully" });
    } catch (error: any) {
      console.error("FATAL: Route error in /api/contact:", error);
      res.status(500).json({ message: error.message || "Failed to send message" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
