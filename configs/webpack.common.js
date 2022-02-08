/**
 * Common webpack config file for both development and production envs
 * CleanWebpackPlugin is used to clean build folder previous to the build process
 */

const paths = require('./paths')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: [paths.src + '/index.js'],

    output: {
        path: paths.build,
        filename: '[name].bundle.js',
        publicPath: '/',
    },

    plugins: [
        new CleanWebpackPlugin(),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: paths.public,
                    to: paths.build,
                    globOptions: {
                        ignore: ['*.DS_Store'],
                    },
                    noErrorOnMissing: true,
                }
            ]
        }),

        new HtmlWebpackPlugin({
            template: paths.src + '/model.html',
            filename: 'index.html',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.js$/, use: ['babel-loader']
            }, {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            }, {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline'
            }
        ],
    },

    resolve: {
        modules: [paths.src, 'node_modules'],
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@src': paths.src,
            '@pub': paths.public,
        },
    },
}
