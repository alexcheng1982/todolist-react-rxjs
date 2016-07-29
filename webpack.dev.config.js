var webpack = require('webpack');
var path = require('path');

var root = path.resolve(__dirname, 'app');
var nodeModulesPath = path.join(__dirname, 'node_modules');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.scss']
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
      }, {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap')
      }
    ]
  },
  postcss: [autoprefixer],
  devtool: 'eval',
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
