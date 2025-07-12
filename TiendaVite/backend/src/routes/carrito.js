import express from 'express';
import controller from '../controllers/carrito.js';

const router = express.Router();

router.get('/', controller.findAll);
router.get('/guardados', controller.findGuardados);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.put('/guardar/:id', controller.guardar);
router.put('/regresar/:id', controller.regresar);
router.delete('/:id', controller.remove);

export default router;
