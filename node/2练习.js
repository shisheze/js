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
