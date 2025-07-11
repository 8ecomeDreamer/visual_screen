const path = require("path");
const resolve = (dir) => {
  return path.join(__dirname, dir);
};
module.exports = {
  publicPath: "/visualPanel/", // 关键配置：指定打包后静态资源的基础路径
  assetsDir: "static", // 可选：指定静态资源的输出目录（默认是 js/css）
  transpileDependencies: [],
  chainWebpack: (config) => {
    config.resolve.alias.set("_c", resolve("src/components")); // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
};
