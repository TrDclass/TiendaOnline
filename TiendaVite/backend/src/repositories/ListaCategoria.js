
import ListaCategoria from '../models/ListaCategoria.js';

const findAll = async () => {
  return await ListaCategoria.findAll();
};

const findOne = async (id) => {
  return await ListaCategoria.findByPk(id);
};

const create = async (Listacategoria) => {
  return await ListaCategoria.create(Listacategoria);
};

const update = async (id, Listacategoria) => {
  const categoriaToUpdate = await ListaCategoria.findByPk(id);
  if (categoriaToUpdate) {
    return await categoriaToUpdate.update(Listacategoria);
  }
  return null;
};

const remove = async (id) => {
  const categoriaToDelete = await ListaCategoria.findByPk(id);
  if (categoriaToDelete) {
    await categoriaToDelete.destroy();
    return true;
  }
  return false;
};

const repository= { findAll, findOne, create, update, remove };

export default repository;