var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    path = require('path'),
    webpack = require('webpack');

// In webpack.config.js
module.exports = {
    // devtool: 'eval',
    devtool: 'source-map',
    entry: {
        "main.js":[
            'babel-polyfill',
            './src/js/index.js'
        ],
        "style.css": [
            './src/sass/style.scss'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style', // backup loader when not building .css file
                    'css!sass' // loaders to preprocess CSS
                ),
                exclude: /node_modules/,
            },
            {
                test: /pixi.js/,
                include: path.resolve('./node_modules/phaser/'),
                loader: "script",
            },
            {
                test: /phaser.js/,
                include: path.resolve("./node_modules/phaser"),
                loader: "script",
            },
            {
                test:/\.jsx?$/,
                include: path.resolve(__dirname + '/src'),
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ["es2015", "react"]
                }
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot|png|jpg|gif)/,
                loader: 'url?limit=100000',
            }
        ]
    },
    output: {
        filename: "[name]",
        path: __dirname + '/public/dist',
        pathinfo: true
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new ExtractTextPlugin('[name]')
    ]
};