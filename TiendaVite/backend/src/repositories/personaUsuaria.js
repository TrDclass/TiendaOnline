import personaUsuaria from '../models/personaUsuaria.js';

const findAll = async () => await personaUsuaria.findAll();
const findOne = async (id) => await personaUsuaria.findByPk(id);
const create = async (payload) => await personaUsuaria.create(payload);
const update = async (payload) => {
  const item = await personaUsuaria.findByPk(payload.id);
  if (item) return await item.update(payload);
  return null;
};
const remove = async (id) => {
  const item = await personaUsuaria.findByPk(id);
  if (item) { await item.destroy(); return true; }
  return false;
};

export default { findAll, findOne, create, update, remove };