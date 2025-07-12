import base from './base.js';

const endpoint = 'carrito';

const findAll = async () => await base.get(endpoint);
const addItem = async (payload) => await base.post(`${endpoint}/item`, payload);
const removeItem = async (id) => await base.remove(`${endpoint}/${id}`);
const removeAll = async () => await base.remove(endpoint);

const carritoApi = {
  findAll,
  addItem,
  removeItem,
  removeAll,
};

export default carritoApi;
