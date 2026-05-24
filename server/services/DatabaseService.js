import mongoose from 'mongoose';

class DatabaseService {
  #uri;
  #connected = false;

  constructor(uri) {
    this.#uri = uri;
  }

  async connect() {
    if (this.#connected) return;
    await mongoose.connect(this.#uri);
    this.#connected = true;
    console.log('[DB] MongoDB connected');
  }

  async disconnect() {
    if (!this.#connected) return;
    await mongoose.disconnect();
    this.#connected = false;
    console.log('[DB] MongoDB disconnected');
  }
}

export const db = new DatabaseService(process.env.MONGODB_URI);
