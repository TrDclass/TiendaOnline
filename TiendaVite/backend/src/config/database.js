import Sequelize from 'sequelize'
/*
const hostname = 'localhost';
const username = 'postgres';
const password = '123';
const database = 'Tienda';
const port = 5432;
const dialect = 'postgres'

const sequelize = new Sequelize(database, username, password, {
    host: hostname,
    port: port,
    dialect: dialect,
    operatorAliases: false
})
*/

const hostname = 'tienda.postgres.database.azure.com';
const username = 'postgres';
const password = 'Ayrton22!';
const database = 'Tienda';
const port = 5432;
const dialect = 'postgres'

const sequelize = new Sequelize(database, username, password, {
    host: hostname,
    port: port,
    dialect: dialect,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false 
        }
    },
    logging: false 
});
export default sequelize;