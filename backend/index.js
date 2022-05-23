import express from 'express'
import {Server} from 'socket.io'
import { createServer } from 'http'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectionBd } from './database/config.js'

const serve = express()
serve.use(cors())
serve.use(express.json())
const httpServer = createServer(serve)
const io = new Server(httpServer,{cors: {
    origin: true,
    credentials:true,
    methods:["GET","POST"]
}})

dotenv.config()
connectionBd()
serve.get("/",(req,res) => {
    res.send("hola")
})

io.on("connection",(socket) => {
    console.log("io yes" )

    socket.on("send", (messages) => {
        console.log("enviado user 2")
        socket.broadcast.emit("getMessages",messages)
    })
});

httpServer.listen(3000)