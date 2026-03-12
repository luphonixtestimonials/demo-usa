import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmails } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = req.body;
      
      // Basic validation
      if (!data.email || !data.firstName || !data.message) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      await sendContactEmails(data);
      res.status(200).json({ message: "Message sent successfully" });
    } catch (error: any) {
      console.error("Route error:", error);
      res.status(500).json({ message: error.message || "Failed to send message" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
