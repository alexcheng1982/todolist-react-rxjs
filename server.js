var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config');

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
    hot: true,
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      hash: true,
      timings: true
    }
});

server.listen(2992, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }
});
