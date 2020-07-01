var AssetsPlugin = require('assets-webpack-plugin')
const version = new Date().getTime();
const path = require('path')

module.exports = {
    entry: {
        MainPage: './src/MainPage.js',
    },
    output: {
        filename: '[name].' + version + '.js',
        path:path.resolve(__dirname,'assets/'),
        publicPath:'/assets/'
    },
    devServer:{
        historyApiFallback:{
            rewrites:[
                {
                    from: /.*/g,
                    to: '/index.html'
                }
            ]
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(less|css)$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        //assets-webpack-plugin
        new AssetsPlugin({
            filename: 'assets/webpack.assets.js',
            processOutput: function (assets) {
                return 'window.WEBPACK_ASSETS = ' + JSON.stringify(assets);
            }
        })
    ],
    devServer: {
        historyApiFallback: true
    }
};