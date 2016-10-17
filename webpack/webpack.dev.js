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
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!postcss!sass?outputStyle=expanded&imagePath=/assets/images&includePaths[]=' +
                path.resolve(__dirname, './assets/sass')
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
    },
    postcss: function() {
        return [autoprefixer];
    }
};
