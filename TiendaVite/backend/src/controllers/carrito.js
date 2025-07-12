import repository from '../repositories/carrito.js';

const findAll = async (req, res) => {
  const items = await repository.findAll();
  res.json(items);
};

const findGuardados = async (req, res) => {
  const items = await repository.findGuardados();
  res.json(items);
};

const create = async (req, res) => {
  const item = await repository.create(req.body);
  res.json(item);
};

const update = async (req, res) => {
  const payload = { ...req.body, id: req.params.id };
  const result = await repository.update(payload);
  res.json(result);
};

const guardar = async (req, res) => {
  const result = await repository.guardarParaDespues(req.params.id);
  res.json(result);
};

const regresar = async (req, res) => {
  const result = await repository.regresarAlCarrito(req.params.id);
  res.json(result);
};

const remove = async (req, res) => {
  const result = await repository.remove(req.params.id);
  res.json(result);
};

export default { findAll, findGuardados, create, update, guardar, regresar, remove };
