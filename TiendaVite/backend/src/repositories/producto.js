import Producto from '../models/producto.js';

// Obtener todos los productos
const findAll = async () => {
    return await Producto.findAll();
}

// Buscar un producto por ID
const findOne = async (id) => {
    return await Producto.findByPk(id);
}

// Crear un nuevo producto
const create = async (payload) => {
    return await Producto.create(payload);
}

// Actualizar un producto existente
const update = async (payload) => {
    const producto = await Producto.findByPk(payload.id);
    if (producto) {
        return await producto.update(payload);
    }
    return null;
}

// Eliminar un producto
const remove = async (id) => {
    const producto = await Producto.findByPk(id);
    if (producto) {
        await producto.destroy();
        return true;
    }
    return false;
}

// Exportar el repositorio como objeto
const repository = { findAll, findOne, create, update, remove }

export default repository;
