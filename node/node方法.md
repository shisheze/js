导入模块用require()

```js
例子：
// 导入fs模块
const fs = require("fs");
```

# fs

```html
fs.readFile()读取文件中的内容
  fs.readFile(参数1，[参数2]，参数3)
    []:是可选，可不选参数
    参数1：读取路径
    参数2：用什么编码格式读取
    参数3：回调函数
fs.writeFile()用来指定的文件写入内容
  fs.writeFile(参数1，参数2，[参数3]，参数4)
    参数1：写入文件路径
    参数2：写入的内容
    参数3：用什么编码格式写入，注：默认不用写这个参数
    参数4：回调函数
```

fs案例

```js
// 导入fs模块
const fs = require("fs");
// 调用fs.readFile方法读取文件
fs.readFile("./成绩.txt", "utf-8", function (err, datastr) {
  if (err) {
    return console.log("读取失败", err.message);
  }
  //   console.log("读取成功", datastr);
  const arr = datastr.split(" ");
  const arrs = [];
  arr.forEach((iten) => {
    arrs.push(iten.replace("=", ":"));
  });
  const newarr = arrs.join("\r\n");
  fs.writeFile("./成绩-ok.txt", newarr, function (err) {
    if (err) {
      console.log("失败", err.message);
    }
    console.log("成功");
  });
});

```



**__dirname**表示当前文件所处路径

# path

```
path.join()
path.join('/a','/b/c','../')可以传入多个路径
注：'../'会抵消前面一个路径
path.basename()
path.basename('路径',['扩展名'])获取到文件的名称部分

path.extname()
path.extname('路径')获取文件的扩展名

```

```

```

# http

 

```
// 导入http模块
const http = require("http");
// 创建一个web服务器
const server = http.createServer()

// 响应给客户端信息然后触发request事件触发函数
server.on('request', function (req,res) {
    console.log('访问服务器');
    req:请求对象
    通过req.url可以获取客户端请求的URL地址
    通过req.method 可以获取请求类型
    res:想要对象
     通过res.end向客户端发送数据
})
// 启动服务器 80是端口
server.listen(80, function () {
    console.log('启动服务器，默认访问地址127.0.0.1');
})

```

