var isDevBuild = process.argv.indexOf('--env.prod') < 0;
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('vendor.css');

module.exports = {
    resolve: {
        extensions: [ '', '.js' ]
    },
    module: {
        loaders: [
            { test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, loader: 'url-loader?limit=100000' },
            { test: /\.css(\?|$)/, loader: extractCSS.extract(['css']) }
        ]
    },
    entry: {
        vendor: [
            '@angular/common',
            '@angular/compiler',
            '@angular/core',
            '@angular/http',
            '@angular/platform-browser',
            '@angular/platform-browser-dynamic',
            '@angular/router',
            '@angular/platform-server',
            'angular2-universal',
            'angular2-universal-polyfills',
            'jquery',
            'zone.js',
            'font-awesome/css/font-awesome.css',
            'simple-line-icons/css/simple-line-icons.css',
            'moment/moment.js',
            'weather-icons/css/weather-icons.css',
            'weather-icons/css/weather-icons-wind.css',
            'whirl/dist/whirl.css',
            'spinkit/css/spinkit.css',
            'loaders.css/loaders.css',
            'ng2-dnd/style.css',
            'ag-grid/dist/styles/ag-grid.css',
            'ag-grid/dist/styles/theme-fresh.css',
            'ika.jvectormap/jquery-jvectormap-1.2.2.css',
            'jqcloud2/dist/jqcloud.css',
            'summernote/dist/summernote.css',
            'fullcalendar/dist/fullcalendar.min.css',
            'codemirror/lib/codemirror.css',
            'angular2-toaster/toaster.css',
            'angular2-toaster'
        ]
    },
    output: {
        path: path.join(__dirname, 'wwwroot', 'dist'),
        filename: '[name].js',
        library: '[name]_[hash]',
    },
    plugins: [
        extractCSS,
        new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DllPlugin({
            path: path.join(__dirname, 'wwwroot', 'dist', '[name]-manifest.json'),
            name: '[name]_[hash]'
        })
    ].concat(isDevBuild ? [] : [
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    ])
};
