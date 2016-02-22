var webpack = require('webpack');
var path = require('path');

var root = path.resolve(__dirname, 'app');
var nodeModulesPath = path.join(__dirname, 'node_modules');

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:2992',
      'webpack/hot/only-dev-server',
      path.join(root, 'main.tsx')
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: 'http://localhost:2992/assets/'
  },
  resolve: {
    root: root,
    modulesDirectories: ['web_modules', 'node_modules'],
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  resolveLoader: {
    root: nodeModulesPath
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        include: [
          root
        ],
        loaders: ['react-hot', 'ts-loader']
      }
    ]
  },
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
