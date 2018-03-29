const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = function(env, argv) {
    dev = (argv.mode === 'development');
    return {
        entry: {
            nootstrap: './src/js/nootstrap.js'
        },
        output: {
            filename: '[name].min.js'
        },
        watch: dev,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                camelCase: true,
                                minimize: !dev,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: (loader) => [
                                    require('autoprefixer')({
                                        browsers: ['last 2 versions', 'ie > 8']
                                    })
                                ],
                                sourceMap: true
                            }
                        }
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                camelCase: true,
                                minimize: !dev,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: (loader) => [
                                    require('autoprefixer')({
                                        browsers: ['last 2 versions', 'ie > 8']
                                    })
                                ],
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                },
                {
                    test: /\.sass$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                camelCase: true,
                                minimize: !dev,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: (loader) => [
                                    require('autoprefixer')({
                                        browsers: ['last 2 versions', 'ie > 8']
                                    })
                                ],
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].min.css",
                chunkFilename: "[id].min.css"
            }),
            new UglifyJsPlugin({
                test: /\.js($|\?)/i,
                sourceMap: true,
                cache: true,
                parallel: true,
                parallel: 4
            })
        ]
    }
};
