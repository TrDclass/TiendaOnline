import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Orden = sequelize.define('Orden', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  productos: { type: DataTypes.JSON, allowNull: false },
  total: { type: DataTypes.DECIMAL, allowNull: false },
  fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'ordenes',
  timestamps: false
});

export default Orden;
