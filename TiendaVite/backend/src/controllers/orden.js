import repository from '../repositories/orden.js';
import carritoRepo from '../repositories/carrito.js';

const findAll = async (req, res) => {
  const result = await repository.findAll();
  res.json(result);
};

const findOne = async (req, res) => {
  const result = await repository.findOne(req.params.id);
  res.json(result);
};

const create = async (req, res) => {
  const payload = req.body;

  // Guardar la orden
  const nuevaOrden = await repository.create(payload);

  // Vaciar el carrito tras la orden
  await carritoRepo.vaciar();

  res.json(nuevaOrden);
};

export default { findAll, findOne, create };
