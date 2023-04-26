// 导入http模块
const http = require("http");
// 创建一个web服务器
const server = http.createServer();

// 响应给客户端信息然后触发request事件触发函数
server.on("request", function (req, res) {
  console.log("访问服务器");
    const url = req.url;
    let content = '<h2>404页面</h2>'
    if (url === '/' || url === '/index.html') {
        content='<h2>首页</h2>'
    } else if (url === '/about.html') {
        content ='<h2>关于页面</h2>'
    }
    res.setHeader('Content-Type','text/html; charset=utf-8')
    res.end(content)
});
// 启动服务器 80是端口
server.listen(80, function () {
  console.log("启动服务器，默认访问地址127.0.0.1");
});
