require('dotenv').config();
const express = require("express");
const { Server } = require("socket.io");
const { createServer } = require('node:http');
const path = require('path');

const PORT = process.env.PORT || 3001;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";


const app = express();

/*
// Serve the static files from the React app (build folder)
app.use(express.static(path.join(__dirname, '../client/dist')));

// Handle all other routes by serving the React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
});
*/

// Start the server and Socket.io
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: FRONTEND_URL,
        methods: ['GET', 'POST'],

    },
});

/*app.get("/room", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/room.html'));
});*/

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
        console.log("User: " + msg.userId)
        console.log("Message: " + msg.text);
        console.log("Room: " + room);
        socket.to(room).emit('message', msg);
    } 
)

});

server.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
