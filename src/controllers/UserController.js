import express from 'express';
const { Request, Response } = express;
import { UserService } from '../services/UserService.js';

export class UserController {
  // Get all users
  static async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching users', error });
    }
  }

  // Get a user by ID
  static async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.getUserById(id);
      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching user', error });
    }
  }

  // Create a new user
  static async createUser(req, res) {
    try {
      const newUser = await UserService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: 'Error creating user', error });
    }
  }

  // Update a user
  static async updateUser(req, res) {
    try {
      const { id } = req.params;
      const updatedUser = await UserService.updateUser(id, req.body);
      if (!updatedUser) {
        res.status(404).json({ message: 'User not found' });
        return;
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: 'Error updating user', error });
    }
  }

  // Delete a user
  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const deletedUser = await UserService.deleteUser(id);
      if (!deletedUser) {
        res.status(404).json({ message: 'User not found' });
        return;
      }
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting user', error });
    }
  }
}
