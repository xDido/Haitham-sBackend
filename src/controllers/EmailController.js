import { EmailService } from '../services/EmailService.js';

export class EmailController {
  static async createEmail(req, res) {
    try {
      const { name, email, subject, message } = req.body;

      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      const savedEmail = await EmailService.saveEmail({ name, email, subject, message });
      res.status(201).json(savedEmail);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getEmails(req, res) {
    try {
      const emails = await EmailService.getAllEmails();
      res.status(200).json(emails);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
