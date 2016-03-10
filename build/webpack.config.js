var path = require('path');
var webpack = require('webpack');
var cssnano = require('cssnano');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var debug = require('debug')('app:webapck')

var dir_base = path.resolve(__dirname, '..');
var dir_src = path.resolve(dir_base, 'src');
var dir_html = path.resolve(dir_base, 'html');
var dir_dist = path.resolve(dir_base, 'dist');

const environment = process.env.NODE_ENV
const __DEV__ = environment === 'development'
const __PROD__ = environment === 'production'

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
  stats: {
    // Nice colored output
    colors: true
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
  },
  // Create source maps for the bundle
  devtool: (!__PROD__ ? 'source-map' : false),
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `'${environment}'`,
      'NODE_ENV': environment + '',
      '__DEV__': __DEV__,
      '__PROD__': environment === 'production',
      '__TEST__': environment === 'test',
      '__DEBUG__': environment === 'development',
      '__BASENAME__': JSON.stringify(process.env.BASENAME || '')
    }),
    new webpack.ProvidePlugin({
      Promise: 'imports?this=>global!exports?global.Promise!es6-promise'
    }),
    new CopyWebpackPlugin([{
      from: 'src/static/',
      toType: 'file'
    }])
];

if (__DEV__) {
  debug('Enable plugins for live development (HMR, NoErrors).')
  webpackConfig.plugins.push(
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  )
} else if (__PROD__) {
  debug('Enable plugins for production (OccurenceOrder, Dedupe & UglifyJS).')
  webpackConfig.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    })
  )
}

webpackConfig.plugins.push(new HtmlWebpackPlugin({
  template: path.resolve(dir_src, 'index.html'),
  hash: false,
  filename: 'index.html',
  inject: 'body',
  chunks: ['vendor', 'app'],
  minify: {
    collapseWhitespace: true
  }
}))

webpackConfig.module = {
    loaders: []
};

// webpackConfig.module.loaders.push({
//   test: /\.(js|jsx)$/,
//   exclude: /node_modules/,
//   loader: 'babel',
//   query: {
//     cacheDirectory: true,
//     plugins: ['add-module-exports'],
//     presets: ['es2015', 'react', 'stage-0']
//   }
// });

webpackConfig.module.loaders.push({
  test: /\.jsx?$/,
  exclude: /(node_modules|bower_components)/,
  loader: 'babel', // 'babel-loader' is also a legal name to reference
  query: {
    presets: ['react', 'es2015', 'stage-0'],
    plugins: ['transform-runtime']
  }
})

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

webpackConfig.module.loaders.push(
  { test: /\.woff(\?.*)?$/,  loader: 'url?limit=10000&prefix=fonts/&name=assets/[name]-[hash].[ext]&mimetype=application/font-woff' },
  { test: /\.woff2(\?.*)?$/, loader: 'url?limit=10000&prefix=fonts/&name=assets/[name]-[hash].[ext]&mimetype=application/font-woff2' },
  { test: /\.otf(\?.*)?$/,   loader: 'file?limit=10000&prefix=fonts/&name=assets/[name]-[hash].[ext]&mimetype=font/opentype' },
  { test: /\.ttf(\?.*)?$/,   loader: 'url?limit=10000&prefix=fonts/&name=assets/[name]-[hash].[ext]&mimetype=application/octet-stream' },
  { test: /\.eot(\?.*)?$/,   loader: 'file?prefix=fonts/&name=assets/[name]-[hash].[ext]' },
  { test: /\.svg(\?.*)?$/,   loader: 'url?limit=10000&prefix=fonts/&name=assets/[name]-[hash].[ext]&mimetype=image/svg+xml' },
  { test: /\.(png|jpg)$/,    loader: 'file?limit=8192&name=assets/[name]-[hash].[ext]' }
)

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
