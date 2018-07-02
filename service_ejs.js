//引入http模块
var http=require('http');

var url=require('url');

// var ejs=require('ejs');
//路由:指的就是针对不同请求的 URL，处理不同的业务逻辑。
http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    if(pathname=='/login'){
        // 把数据库的数据渲染到模板上边

        res.end('login');
    }else if(pathname=='/register'){
        res.end('register');
    }else if(pathname=='/order'){
        res.end('order');
    }else{
        res.end('index');
    }
}).listen(8001);
