/**
 * For the dev environment we setup development mode,
 * user webpack's dev server to ease up the development
 * process and inject css source maps
 */

const { merge } = require('webpack-merge')

const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'development',

    devServer: {
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: false,
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true },
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true },
                    },
                ],
            },
        ],
    },
})