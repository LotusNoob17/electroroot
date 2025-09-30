const express = require("express");
const router = express.Router();
const fs = require('fs')



router.get('/', (req, res) => {
  res.send('¡Servidor Express funcionando!');
});

router.post("/insertData", _u_try.try(async (req, res) => {
    console.log('/insertData')
    const insert = await __Db.insertDatos(req.body)
    return insert
}))

router.post("/insertSugerencia", _u_try.try(async (req, res) => {
    console.log('/insertSugerencia')
    const insert = await __Db.insertSugerencia(req.body)
    return insert
}))

module.exports = router;