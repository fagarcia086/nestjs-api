import { Socket } from 'net';
const JsonSocket = require('json-socket'); // eslint-disable-line tslint2/config

const port = 43210; // The same port that the server is listening on
const host = '127.0.0.1';
const socket: Socket = new JsonSocket(new Socket()); // Decorate a standard net.Socket with JsonSocket
socket.connect(port, host);
socket.on('connect', () => { // Don't send until we're connected
    console.log('connected');
    (<any>socket).sendMessage({ pattern: 'service1', data: {a: 1, b: 2 }});
    socket.on('message', (message) => {
        console.log('message', message);
        // console.log('The result is: '+message.result);
        socket.end();
    });
});
