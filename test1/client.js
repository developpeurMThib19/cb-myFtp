const net       = require('net');

const client    = new net.Socket()

client.connect(4000, '127.0.0.1', () => {
    console.log('connected')

    client.write('USER thibault \n\r')
})



client.on('data', (data) => {
    console.log(data.toString())
})