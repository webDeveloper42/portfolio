import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { db } from './services/DatabaseService.js';
import projectRoutes from './routes/projects.js';
import profileRoutes from './routes/profile.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());

app.use('/api/projects', projectRoutes);
app.use('/api/profile', profileRoutes);

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

db.connect()
  .then(() => {
    app.listen(PORT, () => console.log(`[Server] Running on http://localhost:${PORT}`))
      .on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
          console.error(`[Server] Port ${PORT} is in use. Set PORT= in server/.env to change it.`);
        } else {
          console.error('[Server] Error:', err.message);
        }
        process.exit(1);
      });
  })
  .catch((err) => {
    console.error('[DB] Connection failed:', err.message);
    process.exit(1);
  });
