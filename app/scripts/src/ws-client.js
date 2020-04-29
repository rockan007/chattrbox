let socket;
//初始化socket
function init(url){
    socket=new WebSocket(url);
    console.log('connecting');
}
//注册socketOpen监听
function registerOpenHandler(handlerFunction){
    socket.onOpen=()=>{
        console.log('open');
        handlerFunction();
    }
}
// 注册接收消息监听
function registerMessageHandler(handlerFunction){
    socket.onMessage=(e)=>{
        console.log("message",e.data);
        let data=JSON.parse(e.data);
        handlerFunction(data);
    }
}
// 发送消息
function sendMessage(payload){
    socket.send(JSON.stringify(payload));
}
export default{
    init,
    registerOpenHandler,
    registerMessageHandler,
    sendMessage
}