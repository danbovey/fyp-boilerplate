var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack/webpack.dev');

var server = new WebpackDevServer(webpack(config), {
    contentBase: './public',
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
});

server.listen(config.port, '0.0.0.0', function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('==> 🚧  Webpack development server running!');
        console.log('==> 💻  Send requests to http://' + config.host + ':' + config.port);
    }
});
