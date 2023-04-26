// 引入模块
const fs = require("fs");
const path = require("path");

// 创建两个正则表达式
const resstyle = /<style>[\s\S]*<\/style>/;
const resscript = /<script>[\s\S]*<\/script>/;

fs.readFile(
  path.join(__dirname, "./素材/首页.html"),
  "utf8",
  function (ess, datasrc) {
    if (ess) {
      return console.log("失败", ess.message);
    }
    newCSS(datasrc);
    newJS(datasrc);
    newHTMLs(datasrc);
  }
);
function newCSS(htmlrec) {
  const fscss = resstyle.exec(htmlrec);
  const r1 = fscss[0].replace("<style>", "").replace("</style>", "");
  fs.writeFile(path.join(__dirname, "./click/index.css"), r1, function (err) {
    if (err) {
      return console.log("失败", err.message);
    }
  });
}
function newJS(htmlres) {
  const fsjs = resscript.exec(htmlres);
  const r2 = fsjs[0].replace("<script>", "").replace("</script>", "");
  fs.writeFile(path.join(__dirname, "/click/index.js"), r2, function (err) {
    if (err) {
      return console.log("失败");
    }
  });
}
function newHTMLs(htmlrec) { 
      const r3 = htmlrec.replace(resstyle, '<link rel="stylesheet" href="./index.css"></link>').replace(resscript, '<script src="./index.js"></script>');
  fs.writeFile(path.join(__dirname, "/click/index.html"), r3, function (err) {
    if (err) {
      return console.log("失败");
    }
    console.log("成功");
  });
    console.log(htmlrec);
}

