console.log("你好世界");
var arr = [1, 2, 3,4 ,5,6, 4, 3, 8, 1]
    // 数组去重：
    // 方法4： set
    function newArrFn (arr) {
      // .new Set方法，返回是一个类数组，需要结合 ...运算符，转成真实数组
      return ([...new Set(arr)])
    }
    console.log([...new Set(arr)]);
