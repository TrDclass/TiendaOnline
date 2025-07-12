import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const personaUsuaria = sequelize.define('personaUsuaria', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, 
        validate: {
            len: [8, 8]
        }
    },
    celular: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isNumeric: true, 
            len: [9, 9] 
        }
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, 
        validate: {
            isEmail: true 
        }
    },
    contrasena: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6, 20] 
        }
    },
    fecha: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Activo'
    },
    foto: {
        type: DataTypes.STRING, 
        allowNull: true
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'USER'
    }
}, {
    tableName: 'personas_usuarias',
    timestamps: false 
});

export default personaUsuaria;
