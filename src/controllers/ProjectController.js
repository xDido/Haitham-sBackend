import express from 'express';
const { Request, Response } = express;
import { ProjectService } from '../services/ProjectService.js';

export class ProjectController {
  // Get all projects
  static async getAllProjects(req, res) {
    try {
      const projects = await ProjectService.getAllProjects();
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching projects', error });
    }
  }

  // Get a project by ID
  static async getProjectById(req, res) {
    try {
      const { id } = req.params;
      const project = await ProjectService.getProjectById(id);
      if (!project) {
        res.status(404).json({ message: 'Project not found' });
        return;
      }
      res.status(200).json(project);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching project', error });
    }
  }

  // Create a new project
  static async createProject(req, res) {
    try {
      const newProject = await ProjectService.createProject(req.body);
      res.status(201).json(newProject);
    } catch (error) {
      res.status(500).json({ message: 'Error creating project', error });
    }
  }

  // Update an existing project
  static async updateProject(req, res) {
    try {
      const { id } = req.params;
      const updatedProject = await ProjectService.updateProject(id, req.body);
      if (!updatedProject) {
        res.status(404).json({ message: 'Project not found' });
        return;
      }
      res.status(200).json(updatedProject);
    } catch (error) {
      res.status(500).json({ message: 'Error updating project', error });
    }
  }

  // Delete a project
  static async deleteProject(req, res) {
    try {
      const { id } = req.params;
      const deletedProject = await ProjectService.deleteProject(id);
      if (!deletedProject) {
        res.status(404).json({ message: 'Project not found' });
        return;
      }
      res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting project', error });
    }
  }
}
