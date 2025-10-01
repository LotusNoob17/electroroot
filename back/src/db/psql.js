const { Client } = require('pg')
// var SqlString = require('sqlstring');
let client = null

class db {
    constructor(dataConnection) {
        this.client = new Client(dataConnection)
        // this.client.connect()
        
    }
    async conect() {
        await this.client.connect()
    }
    async insertDatos(datosMonitoreo, callback) {
        try {
            // console.log('datosMonitoreo::: ', datosMonitoreo)
            // var date = new Date().toISOString()
            // console.log('id_monitoreo::: ', id_monitoreo)

            let datos = {
                nombre: datosMonitoreo.nombre,
                comunidad: datosMonitoreo.comunidad,
                municipio: datosMonitoreo.municipio,
                campo: datosMonitoreo.campo,
                fecha: datosMonitoreo.fecha
            }
            console.log('datos a insertar::: ', datos)


            var ins = await this.client.query(`INSERT INTO data_solicitud(
            nombre,
            comunidad,
            municipio,
            campo, 
            fecha
            ) 
            values (
            $1, 
            $2, 
            $3, 
            $4, 
            $5
            )`,
                [
                    datos.nombre,
                    datos.comunidad,
                    datos.municipio,
                    datos.campo,
                    datos.fecha
                ])
            console.log('PASA INSERTAR: ')
            console.log('ins::: ', ins.command)
            return {status:ins.command}
        } catch (e) {
            console.log('ERROR LOGS:: ', e)
        }

    } 

    async insertSugerencia(datosSugerencia, callback) {
        try {
            // console.log('datosMonitoreo::: ', datosMonitoreo)
            // var date = new Date().toISOString()
            // console.log('id_monitoreo::: ', id_monitoreo)

            let datos = {
                fecha: datosSugerencia.fecha,
                sugerencia: datosSugerencia.sugerencia
            }
            console.log('datos a insertar::: ', datos)


            var ins = await this.client.query(`INSERT INTO sugerencias(
            fecha,
            sugerencia
            ) 
            values (
            $1, 
            $2
            )`,
                [
                    datos.fecha,
                    datos.sugerencia
                ])
            console.log('PASA INSERTAR: ')
            console.log('ins::: ', ins.command)
            return {status:ins.command}
        } catch (e) {
            console.log('ERROR LOGS:: ', e)
        }

    }
}


module.exports = db