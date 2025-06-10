import { Router } from 'express';
import { EmailController } from '../controllers/EmailController.js';

const router = Router();

router.post('/', EmailController.createEmail);
router.get('/', EmailController.getEmails);

export default router;
