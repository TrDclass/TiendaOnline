import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Carrito = sequelize.define('Carrito', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  productoId: { type: DataTypes.INTEGER, allowNull: false },
  cantidad: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
}, {
  tableName: 'carrito',
  timestamps: false,
});

export default Carrito;
