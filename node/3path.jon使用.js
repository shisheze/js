const path = require("path");

// '../'会抵消前面的路径
const src = path.join("/a", "/b/c", "../", "./d");
console.log(src);
