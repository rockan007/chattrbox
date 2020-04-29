var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;
var port = 3001;
var ws = new WebSocketServer({
    port: port
});
var messages = [];
console.log(
    "websockets server started"
);

ws.on("connection", function (socket) {
    console.log("client connection established");
    messages.forEach(function (msg) {
        socket.send(msg);
    })
    socket.on('message', function (data) {
        console.log("message received:" + data);
        messages.push(data);
        //ws的clients属性记录了所有连接，当接收到新消息时，将新消息发送给所有用户
        ws.clients.forEach(function (clientSocket) {
            clientSocket.send(data);
        })
    })
})