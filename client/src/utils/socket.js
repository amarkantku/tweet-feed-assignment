import io from 'socket.io-client';
const socket = io(process.env.SOCKET_IO_URL, { 'sync disconnect on unload': true });

socket.on('disconnect', function () {
    socket.emit("end", true);
    console.log('disconnect client event....');
});

export default socket;