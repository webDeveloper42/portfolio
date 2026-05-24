import { Router } from 'express';
import controller from '../controllers/ProfileController.js';

const router = Router();

router.get('/',  (req, res) => controller.get(req, res));
router.put('/',  (req, res) => controller.upsert(req, res));

export default router;
