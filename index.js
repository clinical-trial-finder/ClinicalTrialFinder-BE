const server = require('./api/server.js')

const port = process.env.PORT || 3344

server.listen(port, ()=> {
    console.log(`**** API listening at ${port} ********`)
})