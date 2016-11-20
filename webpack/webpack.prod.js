const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const autoprefixer = require('autoprefixer');

module.exports = {
    context: path.resolve('src'),
    entry: [
        'babel-polyfill',
        'index'
    ],
    resolve: {
        modules: [
            'node_modules',
            'src',
            'resources/scss',
            'resources',
            'assets'
        ],
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.scss', '.css'],
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'], exclude: /node_modules/
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style',
                    loader: 'css'
                })
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style',
                    loader: 'css!postcss!sass?outputStyle=compressed&imagePath=/assets/images&includePaths[]=' +
                        path.resolve(__dirname, './assets/sass')
                })
            }
        ]
    },
    output: {
        // this file is served directly by webpack
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../public')
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMaps: false
        }),
        new ExtractTextPlugin('style.css')
    ],
    postcss: function() {
        return [autoprefixer];
    }
};
