import Carrito from '../models/carrito.js';

const findAll = async () => await Carrito.findAll();
const findOne = async (id) => await Carrito.findByPk(id);
const create = async (payload) => await Carrito.create(payload);
const update = async (payload) => {
  const item = await Carrito.findByPk(payload.id);
  if (item) return await item.update(payload);
  return null;
};
const remove = async (id) => {
  const item = await Carrito.findByPk(id);
  if (item) { await item.destroy(); return true; }
  return false;
};
const clear = async () => { await Carrito.destroy({ where: {} }); };

export default { findAll, findOne, create, update, remove, clear };
