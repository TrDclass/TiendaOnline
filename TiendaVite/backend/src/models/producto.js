
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Producto = sequelize.define('Producto', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Activo'
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'productos',
    timestamps: false
});

export default Producto;



/*const producto = [
    { id: '001', imagen: 'productoZapatillas.webp', nombre: 'Zapatillas Running Pro', descripcion: 'Zapatillas Running Pro', precio: '199.00', stock: 25, estado: 'Activo' },
    { id: '002', imagen: 'productoCamiseta.webp', nombre: 'Camiseta Deportiva', descripcion: 'Zapatillas Running Pro', precio: '59.90', stock: 42, estado: 'Activo' },
    { id: '003', imagen: 'productoMochila.webp', nombre: 'Mochila Viajera', descripcion: 'Zapatillas Running Pro', precio: '29.00', stock: 0, estado: 'Activo' },
    { id: '004', imagen: 'productoReloj.webp', nombre: 'Reloj Inteligente', descripcion: 'Zapatillas Running Pro', precio: '299.00', stock: 15, estado: 'Activo' },
];*/
