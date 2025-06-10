import { ProjectModel } from '../models/Project.js';

export class ProjectService {
  static async getAllProjects() {
    return ProjectModel.find();
  }

  static async getProjectById(id) {
    return ProjectModel.findById(id);
  }

  static async createProject(projectData) {
    const newProject = new ProjectModel(projectData);
    return newProject.save();
  }

  static async updateProject(id, updatedData) {
    return ProjectModel.findByIdAndUpdate(id, updatedData, { new: true });
  }

  static async deleteProject(id) {
    return ProjectModel.findByIdAndDelete(id);
  }
}
