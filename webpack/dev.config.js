var webpack = require('webpack');
var path = require('path');

const contextPath = path.resolve(__dirname, '..');
const assetsPath = path.resolve(__dirname, '../dist');
const root = path.resolve(contextPath, 'app');
const nodeModulesPath = path.resolve(contextPath, 'node_modules');
const host = (process.env.HOST || 'localhost');
const port = (+process.env.PORT + 1) || 3001;
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));

module.exports = {
  entry: {
    app: [
      'webpack-hot-middleware/client?path=http://' + host + ':' + port + '/__webpack_hmr',
      'webpack/hot/only-dev-server',
      path.join(root, 'client', 'app.tsx')
    ]
  },
  output: {
    filename: '[name].js',
    path: assetsPath,
    publicPath: 'http://' + host + ':' + port + '/assets/'
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.IgnorePlugin(/webpack-stats\.json$/),
    webpackIsomorphicToolsPlugin.development()
  ]
};
