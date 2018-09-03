const io = require('socket.io')(12345);


io.on('connection', function(socket){
    console.log('connection', socket.id);
    socket.on('reflect', (data)=>{
        console.log('reflect', data);
        try{
            if(data === 'throw'){
                io.to(socket.id);
            }else{
                io.to(socket.id).emit('response', data)
            }
            //socket.emit('response', simulateError(data)) //does not cause the bug
        }catch(e){}
    })
})