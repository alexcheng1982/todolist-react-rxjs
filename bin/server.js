var path = require('path');
var rootDir = path.resolve(__dirname, '..');
var development = process.env.NODE_ENV !== 'production';

var WebpackIsomorphicTools = require('webpack-isomorphic-tools');
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../webpack/webpack-isomorphic-tools'))
  .development(development)
  .server(rootDir, function() {
    require('../app/server/index');
  });