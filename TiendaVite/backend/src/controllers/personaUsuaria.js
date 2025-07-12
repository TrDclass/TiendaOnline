import repo from '../repositories/personaUsuaria.js';

const findAll = async (req, res) => res.json(await repo.findAll());
const findOne = async (req, res) => res.json(await repo.findOne(req.params.id));
const create = async (req, res) => res.json(await repo.create(req.body));
const update = async (req, res) => {
  const result = await repo.update({ ...req.body, id: req.params.id });
  res.json(result);
};
const remove = async (req, res) => res.json(await repo.remove(req.params.id));

export default { findAll, findOne, create, update, remove };