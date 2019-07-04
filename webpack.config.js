'use strict'

const WebpackConfigGenerator = require('webpack-config-generator')

module.exports = (env, argv) => {
	return WebpackConfigGenerator({
		mode: argv.mode,
		entry: {
			app: ['./src/docs/ts/App.ts', './src/docs/sass/style.sass'],
			Nootstrap: ['./src/ts/Nootstrap.ts']
		},
		indexSrc: './src/docs/index.html',
		favicon: './src/docs/favicon.png'
	})
}
