//引入http模块
var http=require('http');

//引入扩展名的方法是在文件里面获取到的。

var router=require('./model/router.js');

http.createServer(function(req,res){
    router.statics(req,res,'static');
    console.log(req.url);
}).listen(8001);
