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
        extensions: ['.js', '.jsx', '.scss', '.css'],
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function() {
                                    return [require('autoprefixer')];
                                }
                            }
                        },
                        'sass-loader?outputStyle=expanded&imagePath=/assets/images&includePaths[]=' +
                            path.resolve('assets/sass')
                    ]
                })
            },
            {
                test: /\.woff(2)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'application/font-woff',
                        publicPath: 'http://localhost:4000/static/'
                    }
                }]
            },
            {
                test: /\.(otf|ttf|eot|svg)?$/,
                use: ['file-loader']
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
    ]
};
