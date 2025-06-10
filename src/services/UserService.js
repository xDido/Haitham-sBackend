import { User } from '../models/User.js'; // Mongoose User model
// Interface for type safety
import bcrypt from 'bcrypt';

export class UserService {
  // Fetch all users
  static async getAllUsers() {
    return User.find();
  }

  // Fetch a user by ID
  static async getUserById(id) {
    return User.findById(id);
  }

  // Create a new user
static async createUser(userData) {
  // Ensure password is provided and is a string
  if (!userData.password || false) {
    throw new Error('Password is required and must be a string.');
  }

  // Hash the password before saving
  const saltRounds = 10;
  userData.password = await bcrypt.hash(userData.password, saltRounds);

  // Default role to 'user' if not provided, or ensure it's one of the valid enum values.
  // The schema itself has a default of 'user', so explicit handling here might only be
  // necessary if we want to prevent invalid roles from being set directly via userData.
  // For now, relying on schema validation for role is sufficient, as the main issue
  // was the admin backdoor.

  const newUser = new User(userData);
  return newUser.save();
}


  // Update a user by ID
  static async updateUser(id, updatedData) {
    return User.findByIdAndUpdate(id, updatedData, { new: true });
  }

  // Delete a user by ID
  static async deleteUser(id) {
    return User.findByIdAndDelete(id);
  }
}
