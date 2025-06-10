import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import blogPostRoutes from './routes/BlogPostRoutes.js'; // Adjusted path
import userRoutes from './routes/UserRoutes.js';
import projectRoutes from './routes/ProjectRoutes.js';

dotenv.config();

const index: Express = express();
const port = process.env.PORT || 3000;

// Middleware
index.use(express.json());

// Database connection
const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  console.error('MongoDB URI not found in environment variables');
  process.exit(1);
}

mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Routes
index.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

index.use('/api/blogposts', blogPostRoutes); // Using BlogPostRoutes
index.use('/api/users', userRoutes);
index.use('/api/projects', projectRoutes);

// Start server
index.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default index; // Export app for potential testing or other uses
