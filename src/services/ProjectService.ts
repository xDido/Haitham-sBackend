import { ProjectModel, IProject } from '../models/Project.js';

export class ProjectService {
  static async getAllProjects(): Promise<IProject[]> {
    return ProjectModel.find();
  }

  static async getProjectById(id: string): Promise<IProject | null> {
    return ProjectModel.findById(id);
  }

  static async createProject(projectData: Partial<IProject>): Promise<IProject> {
    const newProject = new ProjectModel(projectData);
    return newProject.save();
  }

  static async updateProject(id: string, updatedData: Partial<IProject>): Promise<IProject | null> {
    return ProjectModel.findByIdAndUpdate(id, updatedData, { new: true });
  }

  static async deleteProject(id: string): Promise<IProject | null> {
    return ProjectModel.findByIdAndDelete(id);
  }
}
