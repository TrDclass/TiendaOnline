import express from 'express';
import controller from '../controllers/orden.js';

const router = express.Router();

router.get('/', controller.findAll);
router.get('/:id', controller.findOne);
router.post('/', controller.create);

export default router;
