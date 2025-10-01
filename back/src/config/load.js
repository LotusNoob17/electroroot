const Db = require('../db/psql')

const globals = () => {
    global.__config = require('./config.json')
    global.__Db = new Db(__config.db)
    global._u_try = require('../utils/try')
    // __Db.conect() // Conectar a la base de datos al iniciar la aplicación
}

module.exports.load = globals;