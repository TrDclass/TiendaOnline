import sequelize from './src/config/database.js';  
import ListaCategoria from './src/models/ListaCategoria.js';  

async function insertarDatos() {
    try {
        await sequelize.sync({ force: false });  

        await ListaCategoria.bulkCreate([  
            {
                id: 1564,
                nombre: 'Frutas y verduras',    
                descripcion: 'Esta categoría incluye una amplia variedad de productos frescos y naturales, desde frutas tropicales hasta verduras de temporada, perfectas para una dieta saludable y equilibrada.',
            },
            {
                id: 456,
                nombre: 'Carnes, aves y pescado',
                descripcion: 'Aquí encontrarás una selección de carnes rojas, blancas y productos del mar, todos de alta calidad, ideales para preparar comidas nutritivas y deliciosas para cualquier ocasión.',
            },
            {
                id: 777,
                nombre: 'Abarrotes',
                descripcion: 'En esta categoría se agrupan productos no perecederos como granos, pastas, enlatados, aceites, condimentos y más, esenciales para tener siempre a mano en la despensa de tu hogar.',
            },
            {
                id: 333,
                nombre: 'Panadería',
                descripcion: 'Todo lo relacionado con panes, pasteles, galletas y productos horneados. Ideal para quienes disfrutan de un buen pan fresco o dulces artesanales, preparados con ingredientes de la mejor calidad.',
            },
            {
                id: 555,
                nombre: 'Congelados',
                descripcion: 'Aquí podrás encontrar una variedad de productos congelados como vegetales, frutas, carnes, pescados y platos listos para calentar, lo que hace fácil y rápido preparar una comida casera.',
            },
            {
                id: 666,
                nombre: 'Juguetes',
                descripcion: 'Esta categoría abarca una amplia gama de juguetes educativos, creativos y de entretenimiento para niños de todas las edades, diseñados para estimular su desarrollo y proporcionarles horas de diversión.',
            },
            {
                id: 882,
                nombre: 'Ropa',
                descripcion: 'Encuentra ropa de temporada, calzado y accesorios para toda la familia, en diferentes estilos y tamaños, para cada ocasión, desde ropa casual hasta formal, con un enfoque en comodidad y moda.',
            },
            {
                id: 15687,
                nombre: 'Accesorios',
                descripcion: 'Esta categoría incluye una amplia variedad de accesorios de tipo electronico o para viajes',
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
