const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');
const chat = require('./chat.model');
const { Socket } = require('socket.io');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

mongoose.connect('mongodb://localhost:27017/tcsmean',
    function(err){
        if(err){
            console.log(err);
        }
        console.log('db connected');

        io.on('connection',(socket)=>{
            console.log('user connected');
            socket.on("obj",(msg)=>{
                console.log(msg);
            });
            socket.on("chat",(msg)=>{
                console.log(msg);
                chat.insertMany(msg,(err,result)=>{
                    if(!err){
                        console.log("yay");
                    }
                })
            })
        })
    }
)

http.listen(9090,()=>console.log("server on 9090"));