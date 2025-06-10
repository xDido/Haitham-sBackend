import {Schema, model} from 'mongoose';

const ProjectSchema = new Schema(
    {
        name: {type: String, required: true},
        description: {type: String, required: true},
        technologies: {type: [String], required: true, default: []},
        bulletPoints: {type: [String], default: []},
        githubLink: {type: String},
        imageUrl: {type: String},
    },
    {timestamps: true}
);

export const ProjectModel = model('Project', ProjectSchema);
