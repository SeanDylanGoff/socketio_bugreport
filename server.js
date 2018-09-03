const io = require('socket.io')(12345);


function simulateError(data){
    if(data === 'throw'){
        throw 'testError';
    }
    return data;
}

io.on('connection', function(socket){
    console.log('connection', socket.id);
    socket.on('reflect', (data)=>{
        console.log('reflect', data);
        try{
            io.to(socket.id).emit('response', simulateError(data))
            //socket.emit('response', simulateError(data)) //does not cause the bug
        }catch(e){}
    })
})