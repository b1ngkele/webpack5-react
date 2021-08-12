const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
// webpack开发 配置文件
const webpackConfig = require('../config/webpack.config.development');
// 自定义日志输出
const logger = require('./logger');
// 服务配置
const appConfig = {
  port: 9000, // 端口号,
  host: 'localhost', // 主机号
};

const { port, host } = appConfig; // 监听的端口号

// 编译器
const compiler = Webpack(webpackConfig);
//  devServer 参数
const developmentServerOptions = {
  ...webpackConfig.devServer, // open: true, // 自动打开浏览器
  compress: true, // gzip 压缩
  stats: 'minimal',
};
const server = new WebpackDevServer(compiler, developmentServerOptions);

server.listen(port, host, async (error) => {
  if (error) {
    return logger.error(error.message);
  }
  logger.appStarted(port, 'localhost');
});
