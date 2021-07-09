const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(`postgres://postgres:nothing.@localhost:5432/`)

async function SpiceConnect() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully to SpiceNet.db');
      } catch (error) {
        console.error('Unable to connect to the SpiceNet db:', error);
    }
}

module.exports = SpiceConnect;