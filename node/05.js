const path = require("path");
const res = './a/b/c/index.html'
const ress = './a/b/c/index.html'
const fres = path.basename(res,'.html')
const fress = path.basename(ress)
console.log(fres, fress);
