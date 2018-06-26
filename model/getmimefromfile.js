// 读取mime.js
exports.getMime=function (fs, extname, callback) {
    {
        // 异步操作出现顺序问题
        // console.log(1);
        // fs.readFile('./mime.json',(err,data)=>{
        //     console.log(2);
        //     if(err){
        //         console.log("mime 文件不存在");
        //         return false;
        //     }
        //     // console.log(data.toString());
        //     var mimes=JSON.parse(data.toString());
        //     return mimes[extname];
        // });
        // console.log(3);
    }

    {
        //同步操作 获取外部数据
        // var data=fs.readFileSync('./mime.json');//改为同步读取数据
        // var mimes=JSON.parse(data.toString());
        // return mimes[extname];
    }

    {
        //异步操作 获取外部数据
        //即非阻塞I/O
        fs.readFile('./mime.json',(err,data)=>{
            if(err){
                console.log("mime 文件不存在");
                return false;
            }
            // console.log(data.toString());
            var mimes=JSON.parse(data.toString());
            callback(mimes[extname]||'text/html');
        });
    }
};


