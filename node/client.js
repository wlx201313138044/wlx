var net = require("net");
var client = new net.Socket();
client.setEncoding("utf8");
client.connect(8431,"localhost",function(){
    console.log("已连接到服务器端");
    client.write("您好");
    setTimeout(function(){
     client.end("再见");        
    },10*1000)
})
client.on("data",function(data){
    console.log("已接收到服务器端发送的数据",data);
})
client.on("error",function(err){
    console.log("与服务器连接或通信的过程中发生了一个错误",err.code);
    client.destroy();
})