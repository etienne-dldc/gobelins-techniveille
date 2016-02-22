require('babel-register')

var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server')
var debug = require('debug')('dev:webpack')
var colors = require('colors')

var webpackCongif = require('./webpack.config.js')

// returns a Compiler instance
var compiler = webpack(webpackCongif);

compiler.run(function(err, stats) {
    if(err)
        return handleFatalError(err);
    var jsonStats = stats.toJson();
    if(jsonStats.errors.length > 0)
        return handleSoftErrors(jsonStats.errors);
    if(jsonStats.warnings.length > 0)
        handleWarnings(jsonStats.warnings);
    successfullyCompiled(jsonStats);
});

function handleFatalError (error) {
    console.log(error[0])
} // end handleFatalError

function handleSoftErrors (error) {
    console.log(error[0])
} // end handleSoftErrors

function handleWarnings (warning) {
    debug(warning)
} // end handleWarnings

function successfullyCompiled (stats) {
    stats.chunks.forEach(chunk => {
        var result = '';
        result += 'Chunk : ' + colors.green(chunk.names[0])
        debug(result)
    })
} // end successfullyCompiled
