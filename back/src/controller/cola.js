const async = require('async')

const queueLogs = async.queue(async function (oQueue) {
    console.log('queueLogs')    
    await __Db.insertDatos(oQueue)

}, 1);