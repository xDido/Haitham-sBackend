import { Schema, model, Document } from 'mongoose';

export interface IProject extends Document {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: [String], required: true, default: [] },
    liveLink: { type: String },
    githubLink: { type: String },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

export const ProjectModel = model<IProject>('Project', ProjectSchema);
