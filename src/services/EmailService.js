import { Email } from '../models/Email.js';

export class EmailService {
  static async saveEmail({ name, email, subject, message }) {
    try {
      const emailEntry = new Email({ name, email, subject, message });
      const savedEmail = await emailEntry.save();
      return savedEmail;
    } catch (error) {
      throw new Error(`Error saving email: ${error.message}`);
    }
  }

  static async getAllEmails() {
    try {
      return await Email.find();
    } catch (error) {
      throw new Error(`Error retrieving emails: ${error.message}`);
    }
  }
}
