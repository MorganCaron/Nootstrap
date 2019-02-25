const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = function(env, argv) {
	const dev = (argv.mode === 'development')
	const cssLoaders = [
		MiniCssExtractPlugin.loader,
		{
			loader: 'css-loader',
			options: {
				importLoaders: 2,
				sourceMap: true
			}
		},
		{
			loader: 'postcss-loader',
			options: {
				plugins: (loader) => [
					require('autoprefixer')({
						browsers: ['last 2 versions']
					})
				],
				sourceMap: true
			}
		}
	]
	const sassLoader = {
		loader: 'sass-loader',
		options: {
			sourceMap: true
		}
	}
	const jsLoader = {
		loader: 'babel-loader',
		options: {
			presets: ['@babel/preset-env']
		}
	}
	const fileLoader = {
		loader: 'file-loader',
		options: {
			name(file) {
				return 'img/[name].[ext]'
			}
		}
	}
	return {
		mode: argv.mode,
		entry: {
			app: './src/docs/ts/app.ts',
			nootstrap: './src/nootstrap/ts/nootstrap.ts'
		},
		output: {
			filename: '[name].min.js'
		},
		watch: dev,
		resolve: {
			extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.sass', '.scss', '.png', '.svg', '.jpg', '.gif']
		},
		module: {
			rules: [
				{
					test: /\.css$/,
					use: cssLoaders,
					exclude: /(node_modules|bower_components)/
				},
				{
					test: /\.s(a|c)ss$/,
					use: [...cssLoaders, sassLoader],
					exclude: /(node_modules|bower_components)/
				},
				{
					test: /\.js$/,
					use: jsLoader,
					exclude: /(node_modules|bower_components)/
				},
				{
					test: /\.ts?$/,
					use: [jsLoader, 'ts-loader'],
					exclude: /(node_modules|bower_components)/,
				},
				{
					test: /\.(png|svg|jpg|gif)$/,
					use: fileLoader,
					exclude: /(node_modules|bower_components)/
				}
			]
		},
		plugins: [
			new CleanWebpackPlugin(['dist/*']),
			new MiniCssExtractPlugin({
				filename: "[name].min.css",
				chunkFilename: "[id].min.css"
			}),
			new OptimizeCssnanoPlugin({
				cssnanoOptions: {
					preset: ['default', {
						discardComments: {
							removeAll: true,
						},
					}],
				},
			}),
			new UglifyJsPlugin({
				test: /\.js($|\?)/i,
				sourceMap: true,
				cache: true,
				parallel: true
			})
		]
	}
}
