import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';  
const ListaCategoria = sequelize.define('ListaCategoria', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  tableName: 'lista_categorias',  
});

export default ListaCategoria;
