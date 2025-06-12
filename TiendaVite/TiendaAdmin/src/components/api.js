// src/api.js
const productos = [
  { id: '#001', imagen: 'productoZapatillas.webp', nombre: 'Zapatillas Running Pro', precio: 'S/ 199.00', stock: 25, estado: 'Activo' },
  { id: '#002', imagen: 'productoCamiseta.webp', nombre: 'Camiseta Deportiva', precio: 'S/ 59.90', stock: 42, estado: 'Activo' },
  { id: '#003', imagen: 'productoMochila.webp', nombre: 'Mochila Viajera', precio: 'S/ 129.00', stock: 0, estado: 'Activo' },
  { id: '#004', imagen: 'productoReloj.webp', nombre: 'Reloj Inteligente', precio: 'S/ 299.00', stock: 15, estado: 'Activo' },
  ];

// Almacenamiento temporal de imágenes en memoria (solo para desarrollo)
const imagenesTemporales = {};

// Función para subir imágenes
export const uploadImage = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageName = `img-${Date.now()}-${file.name}`;
      imagenesTemporales[imageName] = e.target.result;
      resolve(imageName);
    };
    reader.readAsDataURL(file);
  });
};

// Función para obtener la URL de la imagen
export const getImageUrl = (imageName) => {
  // En desarrollo: usa las imágenes temporales o del directorio público
  if (imagenesTemporales[imageName]) {
    return imagenesTemporales[imageName];
  }
  return `/img/${imageName}`; // Ruta relativa al directorio público
};

// Obtener todos los productos
export const fetchProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...productos]), 500);
  });
};

// Obtener un producto por ID
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

// Crear un nuevo producto
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

// Actualizar un producto existente
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

// Eliminar un producto
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