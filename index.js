const server = require('./api/server')

const port = process.env.PORT || 3300

server.listen(port, () => {
    console.log(`\n Listening on port ${port} \n`)
})