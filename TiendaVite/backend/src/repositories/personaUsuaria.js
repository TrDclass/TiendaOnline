import PersonaUsuaria from '../models/personaUsuaria.js';

const findAll = async () => await PersonaUsuaria.findAll();
const findOne = async (id) => await PersonaUsuaria.findByPk(id);
const create = async (payload) => await PersonaUsuaria.create(payload);
const update = async (payload) => {
  const item = await PersonaUsuaria.findByPk(payload.id);
  if (item) return await item.update(payload);
  return null;
};
const remove = async (id) => {
  const item = await PersonaUsuaria.findByPk(id);
  if (item) { await item.destroy(); return true; }
  return false;
};

export default { findAll, findOne, create, update, remove };
