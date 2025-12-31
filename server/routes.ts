import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  projectType: z.string().optional(),
  details: z.string().optional(),
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // POST /api/contact - accept a commission/proposal request
  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = contactSchema.parse(req.body);
      const proposal = await storage.createProposal(parsed);
      return res.status(201).json({ ok: true, proposal });
    } catch (err: any) {
      if (err?.issues) {
        // zod error
        return res.status(400).json({ ok: false, errors: err.issues });
      }
      return res.status(500).json({ ok: false, message: err?.message || "Internal Error" });
    }
  });

  // GET /api/proposals - debug listing
  app.get("/api/proposals", async (_req, res) => {
    const list = await storage.listProposals();
    res.json({ ok: true, proposals: list });
  });

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  return httpServer;
}
