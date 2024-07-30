const express = require("express");
const { Server } = require("socket.io");
const { createServer } = require('node:http');
const path = require('path');

const app = express();

//This is necessary to give direct acess of http server to socket.io
const server = createServer(app);
const io = new Server(server);


app.use(express.static(path.join(__dirname, '../client')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
