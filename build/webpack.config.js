var path = require('path');
var webpack = require('webpack');
var cssnano = require('cssnano');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

var dir_base = path.resolve(__dirname, '..');
var dir_src = path.resolve(dir_base, 'src');
var dir_html = path.resolve(dir_base, 'html');
var dir_dist = path.resolve(dir_base, 'dist');

var vendorList = [
  'react',
  'react-dom',
  'history',
  'redux',
  'react-router',
  'react-redux',
  'redux-devtools',
  'redux-devtools-log-monitor',
  'redux-devtools-dock-monitor',
  'react-router-redux'
]

var webpackConfig = {
  name: 'app',
  target: 'web',
  context: dir_base,
  devServer: {
    contentBase: dir_dist,
  },
  resolve: {
    root: dir_src,
  },
  stats: {
    // Nice colored output
    colors: true
  },
  // Create source maps for the bundle
  devtool: 'source-map',
}

webpackConfig.entry = {
  app: [path.resolve(dir_src, 'boot.js')],
  vendor: vendorList
}

webpackConfig.output = {
    publicPath: '',
    path: dir_dist,
    filename: '[name].[id].[hash].js'
}


webpackConfig.plugins = [
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([{
      from: 'src/static/',
      toType: 'file'
    }]),
    new HtmlWebpackPlugin({
      template: path.resolve(dir_src, 'index.html'),
      hash: false,
      filename: 'index.html',
      inject: 'body',
      chunks: ['app', 'vendor'],
      minify: {
        collapseWhitespace: true
      }
    })
];

webpackConfig.module = {
    loaders: []
};

webpackConfig.module.loaders.push({
  loader: 'babel-loader',
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  plugins: ['add-module-exports', 'transform-runtime'],
  query: {
    presets: ['es2015', 'react', 'stage-0']
  },
});

webpackConfig.module.loaders.push({
  test: /\.scss$/,
  include: /src/,
  loaders: [
    'style',
    'css?sourceMap',
    'postcss',
    'sass?sourceMap'
  ]
})

webpackConfig.sassLoader = {}

webpackConfig.postcss = [
  cssnano({
    autoprefixer: {
      add: true,
      remove: true,
      browsers: ['last 2 versions']
    },
    discardComments: {
      removeAll: true
    },
    safe: true,
    sourcemap: true
  })
]

module.exports = webpackConfig
