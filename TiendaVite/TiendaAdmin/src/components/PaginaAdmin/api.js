// src/api.js
const productos = [
  { id: '001', imagen: 'productoZapatillas.webp', nombre: 'Zapatillas Running Pro', descripcion: 'Zapatillas ideales para running', precio: '199.00', stock: '25', categoria: 'Zapatillas', estado: 'Activo' },
  { id: '002', imagen: 'productoCamiseta.webp', nombre: 'Camiseta Deportiva', descripcion: 'Camiseta transpirable', precio: '59.90', stock: '42', categoria: 'Ropa', estado: 'Activo' },
  { id: '003', imagen: 'productoMochila.webp', nombre: 'Mochila Viajera', descripcion: 'Mochila resistente para viajes', precio: '129.00', stock: '0', categoria: 'Accesorios', estado: 'Inactivo' }
];

export const fetchProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...productos]), 500);
  });
};

export const fetchProductoById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = productos.find(p => p.id === id);
      if (producto) {
        resolve({...producto});
      } else {
        reject(new Error('Producto no encontrado'));
      }
    }, 500);
  });
};

export const createProducto = (nuevoProducto) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const id = String(Math.floor(Math.random() * 1000)).padStart(3, '0');
      const producto = { ...nuevoProducto, id };
      productos.push(producto);
      resolve(producto);
    }, 500);
  });
};

export const updateProducto = (id, datosActualizados) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = productos.findIndex(p => p.id === id);
      if (index !== -1) {
        productos[index] = { ...productos[index], ...datosActualizados };
        resolve(productos[index]);
      } else {
        reject(new Error('Producto no encontrado'));
      }
    }, 500);
  });
};

export const deleteProducto = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = productos.findIndex(p => p.id === id);
      if (index !== -1) {
        productos.splice(index, 1);
        resolve(true);
      } else {
        reject(new Error('Producto no encontrado'));
      }
    }, 500);
  });
};