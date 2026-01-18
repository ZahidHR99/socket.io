const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const port = 3000;

const expressServer = http.createServer(app);
const io = new Server(expressServer);

io.on('connection', (socket) => {
  console.log('A user connected');

  io.sockets.emit('MyBroadcast', 'Welcome to the real-time server!');
 
});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

expressServer.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
