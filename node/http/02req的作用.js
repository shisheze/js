const http = require('http')

const server = http.createServer()

server.on('request', (req,res) => {
    
})

server.listen(80, () => {
    console.log('启动服务器')
})