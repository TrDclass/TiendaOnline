import sequelize from './src/config/database.js';
import Producto from './src/models/producto.js';

async function insertarDatos() {
    try {
        await sequelize.sync({ force: false }); // No borrar la BD

        await Producto.bulkCreate([
            {
                nombre: 'Zapatillas Running Pro',
                descripcion: 'Zapatillas ideales para correr largas distancias',
                precio: 199.00,
                stock: 25,
                categoria: 'Zapatillas',
                estado: 'Activo',
                imagen: 'productoZapatillas.webp'
            },
            {
                nombre: 'Camiseta Deportiva',
                descripcion: 'Camiseta ligera y transpirable',
                precio: 59.90,
                stock: 42,
                categoria: 'Ropa',
                estado: 'Activo',
                imagen: 'productoCamiseta.webp'
            },
            {
                nombre: 'Mochila Viajera',
                descripcion: 'Mochila resistente para viajes',
                precio: 29.00,
                stock: 0,
                categoria: 'Accesorios',
                estado: 'Activo',
                imagen: 'productoMochila.webp'
            },
            {
                nombre: 'Reloj Inteligente',
                descripcion: 'Reloj con monitor de actividad',
                precio: 299.00,
                stock: 15,
                categoria: 'Accesorios',
                estado: 'Activo',
                imagen: 'productoReloj.webp'
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
