const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = (env, options) => {
    return {
        context: __dirname,
        entry: './src/index.tsx',
        devtool: 'none',
        output: {
            filename: `bundle.js`,
        },
        optimization: {
            sideEffects: false,
            minimize: false, // to fix the problem set
            // concatenateModules: false, // both parameters to false
            splitChunks: {
                chunks: 'all',
                minSize: 300,
                maxSize: 0,
                minChunks: 1,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                automaticNameDelimiter: '~',
                automaticNameMaxLength: 30,
                name: true,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                        filename: `vendors.js`
                    },
                    default: {
                        minChunks: 1,
                        priority: -20,
                        reuseExistingChunk: true,
                        filename: `source.js`
                    }
                }
            }
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                transpileOnly: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html',
                filename: 'index.html',
                inject: 'body'
            })
        ],
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
            modules: [
                path.resolve(__dirname, './src'),
                path.resolve(__dirname, './node_modules')
            ]
        }
    }
}
module.exports = config
