import Carrito from '../models/carrito.js';

// Obtener todos los productos del carrito
const findAll = async () => await Carrito.findAll({ where: { guardado: false } });

// Obtener ítems guardados para después
const findGuardados = async () => await Carrito.findAll({ where: { guardado: true } });

// Agregar producto al carrito
const create = async (payload) => await Carrito.create(payload);

// Actualizar cantidad o estado
const update = async (payload) => {
  const item = await Carrito.findByPk(payload.id);
  if (item) return await item.update(payload);
  return null;
};

// Mover producto a guardados
const guardarParaDespues = async (id) => {
  const item = await Carrito.findByPk(id);
  if (item) return await item.update({ guardado: true });
  return null;
};

// Regresar de guardados al carrito
const regresarAlCarrito = async (id) => {
  const item = await Carrito.findByPk(id);
  if (item) return await item.update({ guardado: false });
  return null;
};

// Eliminar ítem
const remove = async (id) => {
  const item = await Carrito.findByPk(id);
  if (item) {
    await item.destroy();
    return true;
  }
  return false;
};

// Vaciar carrito (al completar orden)
const vaciar = async () => {
  await Carrito.destroy({ where: { guardado: false } });
};

const repository = {
  findAll,
  findGuardados,
  create,
  update,
  guardarParaDespues,
  regresarAlCarrito,
  remove,
  vaciar
};

export default repository;
