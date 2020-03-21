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

    socket.on('message', function (data) {
        console.log("message received:" + data);

        if (data == "Swordfish") {
            socket.send("欢迎加入组织！");
            //密码正确后，将所有消息发送给新的连接
            messages.forEach(function (msg) {
                socket.send(msg);
            })
            socket.isSecret = true;
           
            return;
        }
        if (socket.isSecret) {
            messages.push(data);
        } else {
            socket.send("请输入暗号,加入组织！");
        }


        //ws的clients属性记录了所有连接，当接收到新消息时，将新消息发送给所有用户
        ws.clients.forEach(function (clientSocket) {
            if (clientSocket.isSecret) {
                clientSocket.send(data);
            }

        })
    })
})