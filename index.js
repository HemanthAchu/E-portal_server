const express  =require('express')
const cors =require('cors')
require('dotenv').config()
const router =require('./Routers/router')
require('./DB/database')
const server =express()

const PORT = process.env.PORT || 3000;

server.use(cors())
server.use(express.json())
server.use(router)
server.use('/uploads',express.static('./uploads'))
server.listen(PORT,()=>{
  console.log("Server runing");
})