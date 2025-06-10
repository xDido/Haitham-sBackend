import { Schema, model, Document } from 'mongoose';

export interface IBlogPost extends Document {
  title: string;
  content: string;
  author: string; // Can be a User ID or string for simplicity
  tags: string[]; // Optional tags for categorization
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BlogPostSchema = new Schema<IBlogPost>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    tags: { type: [String], default: [] },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

export const BlogPostModel = model<IBlogPost>('BlogPost', BlogPostSchema);
