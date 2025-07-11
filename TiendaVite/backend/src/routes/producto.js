// src/routes/producto.js
import express from 'express';
import controller from '../controllers/producto.js';
import upload from '../config/multer.js';

const router = express.Router();

router.get('/', controller.findAll);
router.get('/:id', controller.findOne);
router.get('/search', controller.searchByName);
router.post('/', upload.single('imagen'), controller.create); // Ahora acepta imagen
router.put('/:id', upload.single('imagen'), controller.update);
router.delete('/:id', controller.remove);

export default router;
