import repository from '../repositories/producto.js';

const findAll = async (req, res) => {
    try {
        const result = await repository.findAll();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: "Ha ocurrido un error!", error: error.message });
    }
}

const findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await repository.findOne(id);
        if (result) {
            return res.status(200).json(result);
        } else {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Ha ocurrido un error!", error: error.message });
    }
}

const create = async (req, res) => {
    try {
        const payload = req.body;
        const result = await repository.create(payload);
        return res.status(201).json(result);
    } catch (error) {
        return res.status(500).json({ message: "Ha ocurrido un error!", error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const payload = req.body;
        const result = await repository.update(payload);
        if (result) {
            return res.status(200).json(result);
        } else {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Ha ocurrido un error!", error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await repository.remove(id);
        if (result) {
            return res.status(200).json({ message: "Producto eliminado correctamente" });
        } else {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Ha ocurrido un error!", error: error.message });
    }
}

const controller = { findAll, findOne, create, update, remove }

export default controller;
