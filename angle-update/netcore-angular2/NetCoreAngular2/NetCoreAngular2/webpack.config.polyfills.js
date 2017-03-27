var isDevBuild = process.argv.indexOf('--env.prod') < 0;
var path = require('path');
var webpack = require('webpack');

module.exports = {
    resolve: {
        extensions: [ '', '.js' ]
    },
    module: {
        loaders: [
            { test: /\.ts$/, exclude: [/\.spec\.ts$/, 'node_modules'], loader: 'ts' },
        ]
    },
    entry: {
        polyfills: './ClientApp/app/polyfills.ts'
    },
    output: {
        path: path.join(__dirname, 'wwwroot', 'dist'),
        filename: '[name].js'
    },
    plugins: [].concat(isDevBuild ? [] : [
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    ])
};
