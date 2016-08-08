var express = require('express');
var webpack = require('webpack');
var path = require('path');
var config = require('./dev.config');

const app = express();

const compiler = webpack(config);
const host = process.env.HOST || 'localhost';
const port = (+process.env.PORT + 1) || 3001;
var serverOptions = {
  contentBase: 'http://' + host + ':' + port,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: config.output.publicPath,
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {
    colors: true
  }
};

app.use(require('webpack-dev-middleware')(compiler, serverOptions));

app.use(require('webpack-hot-middleware')(compiler));

app.listen(port, (err) => err ?
  console.error(err) :
  console.info('==> Webpack development server listening on port %s', port));
