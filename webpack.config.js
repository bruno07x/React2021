// * Evitar erros com outros S.O
const path = require('path');
// * Import html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';
// * Obj de configuração
module.exports = {
    mode: isDev ? 'development' : 'production',
    // * Config source-map
    devtool: isDev ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // * Config HTML Webpack Plugin
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    // * Config Dev server
    devServer:{
        contentBase: path.resolve(__dirname, 'public')
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ]
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    }
}