const config = require('config')
const user = config.get('user')
const password = config.get('password')
const host = config.get('host')
const port = config.get('port')

const { Sequelize } = require('sequelize')

console.log(user, password, host, port)

const sequelize = new Sequelize(`postgres://${user}:${password}@${host}:${port}/`)

async function SpiceConnect() {
    try {
        await sequelize.authenticate();
        console.log('\n,,,,_.~"(_.~"(_.~"(_.~"(_.~"(_.~"(_.~"(_.~"(_.~"(_.~"(_.~"(_.~"~,,,,,\n')
        console.log('_,_,_Connection has been established successfully to SpiceNet.db_,_,_');
      } catch (error) {
        console.error('Unable to connect to the SpiceNet db:', error);
    }
}

module.exports = SpiceConnect;