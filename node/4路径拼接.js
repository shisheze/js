const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "/1.js"), "utf8", function (err,res) {
  if (err) {
    return console.log(err, "失败");
  }
  console.log("成功",res);
});
