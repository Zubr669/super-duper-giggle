const net = require('net');
socket = net.createConnection(8124,"localhost",()=>{
    console.log("connected");
});
socket.setEncoding('utf8');
socket.on("data", (data)=>{
    console.log(data)
})
