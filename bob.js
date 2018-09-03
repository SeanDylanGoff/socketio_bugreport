const io = require('socket.io-client')

let socket = io('ws://127.0.0.1:12345/');

socket.on('response', (data)=>{
    console.log(data);
})

let i = 0;

setInterval(()=>{
    socket.emit('reflect', 'bob\'s secret #'+i++);
}, 1000)
