import repository from '../repositories/producto.js';

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
  if (req.file) {
    payload.imagen = req.file.filename;
  }
  const result = await repository.create(payload);
  res.json(result);
};

const update = async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;
  if (req.file) {
    payload.imagen = req.file.filename;
  }
  const result = await repository.update(payload);
  res.json(result);
};

const remove = async (req, res) => {
  const result = await repository.remove(req.params.id);
  res.json(result);
};

export default { findAll, findOne, create, update, remove };
