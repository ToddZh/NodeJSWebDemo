//实现静态web服务功能
//url中输入什么文件的路径就能打开什么文件
//思路：获取url地址，根据地址选取展示文件



var http=require('http');
var fs=require('fs');


http.createServer(function(req,res){
    var pathname=req.url;
    if(pathname=='/'){
        pathname='index.html';//默认加载的首页
    }
    if(pathname!='favicon.ico'){//过滤无效文件
        console.log(pathname);

        fs.readFile('static/'+pathname, (error, data) => {
            if(error) {//没有这个文件
                // console .log(error);
                fs.readFile('static/404.html',(error, data) => {
                    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
                    res.write(data);
                    console.log(data);
                    res.end(); /*结束响应*/
                });
                return;
            } else {//返回这个文件
                res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

                res.write(data);
                console.log(data);
                res.end(); /*结束响应*/
            }
        });
    }
}).listen(8001);