const { Sequelize } = require('sequelize');
const { db } = require('./config.json');

const sequelize = new Sequelize(db.name, db.user, db.password, {
    host: db.host,
    port: db.port,
    dialect: db.dialect,
});

sequelize
    .authenticate()
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

    module.exports = sequelize;