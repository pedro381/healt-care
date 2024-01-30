// conecta_banco.js
const Sequelize = require('sequelize');
const sequelize = new Sequelize('sql10680614', 'sql10680614', 'xQqfKmissn', {
    host: "sql10.freemysqlhosting.net",
    dialect: "mysql",
    port: 3306,
    query: { raw: true }
});

// Exportando o Sequelize e o sequelize
module.exports = {
    Sequelize,
    sequelize
};
