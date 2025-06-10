import { Schema, model } from 'mongoose';

const ProjectSchema = new Schema(
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

export const ProjectModel = model('Project', ProjectSchema);
