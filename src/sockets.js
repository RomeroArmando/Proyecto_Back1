import { Server } from "socket.io";

const initSocket = (httpServer) => {

    const io = new Server(httpServer);
    console.log('servicio socket.io activo');

    io.on('connection', client => {

        console.log(`cliente conectado, id ${client.id} desde ${client.handshake.address}`);

        client.on('new_user_data', data => {

            client.broadcast.emit('new_user', data);

        });

    });

    return io;

}

export default initSocket;