const express = require("express");
const { Server } = require("socket.io");
const { createServer } = require('node:http');
const path = require('path');


const app = express();

//This is necessary to give direct acess of http server to socket.io
const server = createServer(app);
const io = new Server(server);

//This is to lead with static files like index.js
app.use(express.static(path.join(__dirname, '../client')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get("/room", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/room.html'));
});

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
    socket.on('joinRoom', ({ id, room }) => {
        console.log(`User with ID ${id} joined room ${room}`);
        socket.join(room);
    });

    socket.on('message', ({room, msg})=>{
        console.log("Message: " + msg);
        console.log("Room: " + room);
        socket.to(room).emit('message', msg)
    } 
)

});



server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
