import sequelize from './src/config/database.js';
import personaUsuaria from './src/models/personaUsuaria.js';
import moment from 'moment'; // Para formatear la fecha

async function insertarDatos() {
    try {
        // Sincroniza la base de datos para asegurarte de que los cambios en el modelo sean reflejados
        await sequelize.sync({ alter: true }); // Esto actualizará la estructura de las tablas

        await personaUsuaria.bulkCreate([
            {
                id: 1,
                nombre: 'Joaquin',
                dni: '12345678',
                celular: '123456789',
                correo: 'usuario@gmail.com',
                contrasena: '1234',
                estado: 'Activo',
                foto: 'gatoEmpresario.png',
                fecha: moment().format('DD/MM/YYYY'),
                categoria: 'USER', 
            },
            {
                id: 2,
                nombre: 'Api',
                dni: '87654321',
                celular: '543216787',
                correo: 'admin@gmail.com',
                contrasena: '4321',
                estado: 'Activo',
                foto: 'gatoEmpresario.png',
                fecha: moment().format('DD/MM/YYYY'), 
                categoria: 'ADMIN',
            },
            {
                id: 3,
                nombre: 'Imanol',
                dni: '71696152',
                celular: '991848950',
                correo: 'sixd@gmail.com',
                contrasena: '8888',
                estado: 'Activo',
                foto: 'gatoEmpresario.png',
                fecha: moment().format('DD/MM/YYYY'), 
                categoria: 'ADMIN',
            },
        ]);

        console.log('Datos insertados correctamente');
    } catch (error) {
        console.error('Error al insertar datos:', error);
    } finally {
        await sequelize.close();
    }
}

insertarDatos();