import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Producto from './producto.js'; // agrega esta línea arriba


const Carrito = sequelize.define('Carrito', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  producto_id: {
    type: DataTypes.INTEGER,
    allowNull: false  
  },
  cantidad: { 
    type: DataTypes.INTEGER,
    allowNull: false
  } 
}, {
  tableName: 'carrito',
  timestamps: false
});

// 👇 Relación con Producto
Carrito.belongsTo(Producto, { foreignKey: 'producto_id' });

export default Carrito;
