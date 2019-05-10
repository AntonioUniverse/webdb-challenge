const express = require('express');
const server = express();
const projectRouter = require ('./projects-router')
server.use(express.json())
const actionRouter = require ('./actions-router')



server.use('/api/projects', projectRouter)
server.use('/api/actions', actionRouter)

server.get("/", (req, res) =>{
    res.send( "hello")
})





module.exports = server;