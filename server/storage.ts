import { type User, type InsertUser } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  // proposals
  createProposal(proposal: InsertProposal): Promise<Proposal>;
  listProposals(): Promise<Proposal[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private proposals: Map<string, Proposal>;

  constructor() {
    this.users = new Map();
    this.proposals = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // --- Proposals ---
  async createProposal(insertProposal: InsertProposal): Promise<Proposal> {
    const id = randomUUID();
    const proposal: Proposal = { ...insertProposal, id, createdAt: new Date().toISOString() };
    this.proposals.set(id, proposal);
    return proposal;
  }

  async listProposals(): Promise<Proposal[]> {
    return Array.from(this.proposals.values());
  }
}

export const storage = new MemStorage();

// types for proposals
export type InsertProposal = {
  name: string;
  email: string;
  projectType?: string;
  details?: string;
};

export type Proposal = InsertProposal & { id: string; createdAt: string };
