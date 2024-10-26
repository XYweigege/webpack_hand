const Compiler = require("./Compiler");
const NodeEnvironmentPlugin = require("./node/NodeEnvironmentPlugin");
const Webpack = (options, callback) => {
  let compiler = new Compiler(options); //创建compiler实例
  compiler.options = options; //赋值一个options属性
  new NodeEnvironmentPlugin().apply(compiler); //让compiler可以读写文件

  //   挂载配置文件里提供的所有plugin
  if (options.plugins && Array.isArray(options.plugins)) {
    for (const plugin of options.plugins) {
      plugin.apply(compiler); //compiler传递给Plugin使用。
    }
  }
  return compiler;
};

exports = module.exports = Webpack;
