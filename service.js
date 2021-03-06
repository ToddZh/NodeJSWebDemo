//实现静态web服务功能
//url中输入什么文件的路径就能打开什么文件
//思路：获取url地址，根据地址选取展示文件



var http=require('http');
var fs=require('fs');
var path=require('path');
var url=require('url');//解析json文件
var mimeModel=require('./model/getmime.js');

http.createServer(function(req,res){

    //使用url.parse是为了解析xxx.json?x212223241结构的url
    var pathname=url.parse(req.url).pathname;//解析url
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
                    res.end(); /*结束响应*/
                });
                return;
            } else {//返回这个文件
                //加载过程中会加载很多类型文件，所以type不能写死
                var type = mimeModel.getMime(path.extname(pathname));/* 获取文件类型 */
                res.writeHead(200,{"Content-Type":type+";charset=utf-8"});
                res.write(data);
                res.end(); /*结束响应*/
            }
        });
    }
}).listen(8001);
