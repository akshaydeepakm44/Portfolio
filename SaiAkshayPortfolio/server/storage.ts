// Storage interface for portfolio contact messages
// This portfolio currently uses in-memory storage for simplicity

export interface IStorage {
  // Portfolio storage methods can be added here if needed
}

export class MemStorage implements IStorage {
  constructor() {
    // Simple storage for portfolio
  }
}

export const storage = new MemStorage();
