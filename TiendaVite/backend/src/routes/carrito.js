import express from 'express';
import controller from '../controllers/carrito.js';
const router = express.Router();

router.get('/', controller.findAll);        // Ver carrito
router.get('/:id', controller.findOne);     // Ver item específico
router.post('/', controller.create);        // Agregar al carrito
router.put('/:id', controller.update);      // Actualizar cantidad
router.delete('/:id', controller.remove);   // Eliminar item del carrito
router.delete('/', controller.clear);       // Vaciar carrito

export default router;
