let express = require("express");
let app = express();
let http = require("http").Server(app);
let io = require("socket.io")(http);

//Automatic Help Message
let helpMessage =
 `Welcome To Chat Bot!
Enter One of The Following Commands:
* Date: Show You The Current Date
* Time: Show You The Current Time
* RNG: Show A Random Number 1-10
* Coin: Flip A Coin
* Help: See Commands Again
* Or You Can Type Anything For A Dynamic Response!


`;

//Dynamic Responses
let dynRes = ["hello","how are you","im hungy","bye","how about the weather","im sleepy","tell me about your day"];

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"\\index.html");
});

io.on("connection",(socket)=>{
    console.log("Client Connected");
    socket.on("obj",(msg)=>{
        console.log(msg);
    });
    socket.emit("obj1",helpMessage);
    
    //Recieve New Message
    socket.on("newMsg",(newMsg)=>{
        newMsg = newMsg.toLowerCase();

        //Type of Message
        //date
        if(newMsg=="date"){
            let date = new Date();
            date = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
            socket.emit("obj1","Server Says: " + date);
        }
        //time
        else if(newMsg=="time"){
            let date = new Date();
            time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            socket.emit("obj1","Server Says: " + time);
        }
        //RNG
        else if(newMsg=="rng"){
            let randNum = Math.floor(Math.random()*10);
            socket.emit("obj1","Server Says: " + randNum);
        }
        //Coin Flip
        else if(newMsg=="coin"){
            let randNum = Math.floor(Math.random()*2);
            if(randNum==1){socket.emit("obj1","Server Says: " + "Heads");}
            else{socket.emit("obj1","Server Says: " + "Tails");}
        }
        //help
        else if(newMsg=="help"){    
            socket.emit("obj1","Server Says: \n" + helpMessage);
        }
        //dynamic responses
        else{
            let randNum = Math.floor(Math.random()*dynRes.length);
            socket.emit("obj1","Server Says: " + dynRes[randNum-1]);
        }
    });
});

http.listen(9090,()=>console.log("server running on 9090"));