const path = require('path');
const webpack = require('webpack');

const autoprefixer = require('autoprefixer');

module.exports = {
    host: '0.0.0.0',
    port: 3000,
    context: path.resolve('src'),
    entry: [
        'babel-polyfill',
        'index',
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/dev-server'
    ],
    resolve: {
        modules: [
            'node_modules',
            'src'
        ],
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.scss', '.css'],
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [require('autoprefixer')];
                            }
                        }
                    },
                    'sass-loader?outputStyle=expanded&imagePath=/static/img&includePaths[]=' +
                        path.resolve('src/scss')
                ]
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
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        publicPath: 'http://localhost:4000/static/'
                    }
                }]
            }
        ]
    },
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
        publicPath: 'http://0.0.0.0:3000/public/'
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    devtool: 'eval-source-map',
    devServer: {
        contentBase: '/',
        proxy: { '*': 'http://0.0.0.0:3000' },
        host: '0.0.0.0',
        port: 3000
    }
};
