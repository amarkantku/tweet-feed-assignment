module.exports = (app) => {
    app.io.on('connection', function(socket){
        console.log('a user connected');
        socket.on('end', function(){
            socket.disconnect(0);
        });

        socket.on('disconnect', function () {
            console.log('client disconnect...', socket.id)
        })
      
        socket.on('error', function (err) {
            console.log('received error from client:', socket.id)
        })
    });  
}