require('dotenv').config()

const express=require('express')
const server=express()

const router=require('./routes/router')
const cors=require('cors')

require('./db/connection')

const PORT=3000     

server.use(cors())
server.use(express.json())
server.use(router)
                       
server.get('/',(req,res)=>{
    res.status(200).json('Ecart servver started')
})


server.listen(PORT,()=>{
    console.log(`server started at ${PORT}`); 
})


