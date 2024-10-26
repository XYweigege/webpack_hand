const { Tapable, AsyncSeriesHook } = require("tapable");
class Compiler {
  constructor(context) {
    // super();
    this.context = context;
    this.hooks = {
      done: new AsyncSeriesHook(["stats"]), //编译完成会触发的钩子
    };
  }
  run(callback) {
    console.log("Compiler run");
    callback(null, {
      toJson: () => {
        return {
          entries: [], //显示所有的入口
          chunks: [], //显示所有代码块
          modules: [], //显示所有模块
          assets: [], //显示打包后的资源，也就是文件
        };
      },
    });
  }
}
module.exports = Compiler;
