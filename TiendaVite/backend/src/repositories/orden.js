import Orden from '../models/orden.js';

const findAll = async () => await Orden.findAll();

const findOne = async (id) => await Orden.findByPk(id);

const create = async (payload) => await Orden.create(payload);

const repository = { findAll, findOne, create };

export default repository;
