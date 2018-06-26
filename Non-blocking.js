//异步操作即非阻塞式I/O

// 当把异步操作封装为方法时，会出现问题，异步导致方法结束时，
// 仍然没有执行该异步操作，导致请求不到想要的数据。

//例子
//错误的写法：
// {
//     function getData(){ //模拟请求数据
//         var result='';
//         setTimeout(function(){
//             result='这是请求到的数据'
//         },200);
//         return result;
//     }
//
//     console.log(getData());/*异步导致请求不到数据*/
// }

//非阻塞方式正确的写法
// {
//     function getData(callback){ //模拟请求数据
//         var result='';
//         setTimeout(function(){
//             result='这是请求到的数据';
//             callback(result);
//         },200);
//     }
//     getData(function (result) {
//         console.log(result);
//         return result;
//     });
// }


//解决方法1——回调函数
// {
//     var fs=require('fs');
//     console.log(1);
//     function getMime(callback) {
//         console.log(2);
//         fs.readFile('mime.json',(err,data)=>{
//             console.log(3);
//             callback(data);
//         });
//         console.log(4);
//     }
//     getMime(function (result) {
//         console.log(5);
//         // console.log(result.toString())
//     })
// }


//解决方法2——订阅和发布
// 引入 events 模块
{
    var events = require('events');
    var EventEmitter=new events.EventEmitter(); /*实例化事件对象*/
    EventEmitter.on('toparent',function(){
        console.log('接收到了广播事件');
    });
    setTimeout(function(){
        console.log('广播');
        EventEmitter.emit('toparent'); /*发送广播*/
    },1000);
}
