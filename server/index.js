const express = require("express")
const {Server} = require("socket.io")
const { createServer } = require('node:http')

const app = express()

//This is necessary to give direct acess of http server to socket.io
const server = createServer(app)

app.get("/", (req,res)=>{
    res.send("<h1>Server is on!</h1>")
})

app.listen(3000, ()=>{
    console.log("Server is running!")
})