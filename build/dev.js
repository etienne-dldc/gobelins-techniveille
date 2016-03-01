require('babel-register')

var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server')
var debug = require('debug')('dev:webpack')
var colors = require('colors')

var webpackCongif = require('./webpack.config.js')

webpackCongif.entry.app.unshift("webpack-dev-server/client?http://localhost:3000/");

debug('Got on http://localhost:3000')

var compiler = webpack(webpackCongif);

var server = new webpackDevServer(compiler, {
  stats: { colors: true },
  // quiet: true
});
server.listen(3000, 'localhost', function () {
  debug('ready !')
});
