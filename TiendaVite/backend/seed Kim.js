// seed.js
import sequelize from './src/config/database.js';
import Producto from './src/models/producto.js';

async function insertarDatos() {
    try {
        await sequelize.sync({ force: false }); // ¡No borra la BD!

        await Producto.bulkCreate([
            {
                nombre: "Zanahoria",
                descripcion: "Zanahoria fresca por kilogramo",
                precio: 2.99,
                stock: 100,
                categoria: "Frutas y verduras",
                estado: "Activo",
                imagen: "Zanahoria.png"
            },
            {
                nombre: "Papaya",
                descripcion: "Papaya dulce por kilogramo",
                precio: 5.99,
                stock: 80,
                categoria: "Frutas y verduras",
                estado: "Activo",
                imagen: "Papaya.png"
            },
            {
                nombre: "Mix de frutas",
                descripcion: "Ensalada de frutas lista para consumir",
                precio: 5.69,
                stock: 50,
                categoria: "Frutas y verduras",
                estado: "Activo",
                imagen: "EFrutas.png"
            },
            {
                nombre: "Manzana verde",
                descripcion: "Manzana verde fresca por kilogramo",
                precio: 3.80,
                stock: 70,
                categoria: "Frutas y verduras",
                estado: "Activo",
                imagen: "manzana verde.png"
            },
            {
                nombre: "Naranja",
                descripcion: "Naranja jugosa por kilogramo",
                precio: 3.69,
                stock: 90,
                categoria: "Frutas y verduras",
                estado: "Activo",
                imagen: "naranja.png"
            },
            {
                nombre: "Piña",
                descripcion: "Piña por kilogramo",
                precio: 2.79,
                stock: 60,
                categoria: "Frutas y verduras",
                estado: "Activo",
                imagen: "piña.png"
            },
            {
                nombre: "Sandía",
                descripcion: "Sandía fresca por kilogramo",
                precio: 1.99,
                stock: 40,
                categoria: "Frutas y verduras",
                estado: "Activo",
                imagen: "sandia.png"
            },
            {
                nombre: "Uvas",
                descripcion: "Uvas frescas por kilogramo",
                precio: 11.99,
                stock: 30,
                categoria: "Frutas y verduras",
                estado: "Activo",
                imagen: "uva.png"
            },
            {
                nombre: "Pera",
                descripcion: "Pera fresca por kilogramo",
                precio: 6.49,
                stock: 50,
                categoria: "Frutas y verduras",
                estado: "Activo",
                imagen: "pera.png"
            },
            {
                nombre: "Manzana roja",
                descripcion: "Manzana roja fresca por kilogramo",
                precio: 8.79,
                stock: 40,
                categoria: "Frutas y verduras",
                estado: "Activo",
                imagen: "manzana.png"
            },
            {
                nombre: "Pithaya",
                descripcion: "Pithaya (fruta del dragón) por kilogramo",
                precio: 5.89,
                stock: 20,
                categoria: "Frutas y verduras",
                estado: "Activo",
                imagen: "pitahaya.png"
            }
        ]);

        console.log('Datos insertados correctamente');
    } catch (error) {
        console.error('Error al insertar datos:', error);
    } finally {
        await sequelize.close();
    }
}

insertarDatos();
