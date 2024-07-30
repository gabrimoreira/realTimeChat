const express = require("express")
const {Server} = require("socket.io")
const { createServer } = require('node:http')
const path = require('path')

const app = express()

//This is necessary to give direct acess of http server to socket.io
const server = createServer(app)

const io = new Server(server)

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, '../client/index.html'));
})

app.listen(3000, ()=>{
    console.log("Server is running!")
})