const microtime = require('microtime')
const client = require('./client')
const t1 = microtime.now()
client.list({}, (error, notes) => {
    if (!error) {
        const t2 = microtime.now()
        console.log(t2 - t1)
        console.log('successfully fetch List notes')
        console.log(notes)
    } else {
        console.error(error)
    }
})
