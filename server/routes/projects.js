import { Router } from 'express';
import controller from '../controllers/ProjectController.js';

const router = Router();

router.get('/',      (req, res) => controller.getAll(req, res));
router.post('/',     (req, res) => controller.create(req, res));
router.put('/:id',   (req, res) => controller.update(req, res));
router.delete('/:id',(req, res) => controller.remove(req, res));

export default router;
