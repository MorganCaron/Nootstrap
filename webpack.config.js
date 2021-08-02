"use strict";

const webpackConfigGenerator = require("webpack-config-generator");

module.exports = (env, argv) => {
	return webpackConfigGenerator({
		mode: argv.mode,
		entry: {
			Nootstrap: ["./src/sass/Nootstrap.sass", "./src/ts/Nootstrap.ts"]
		},
		exportLibrary: {
			type: "module"
		}
	});
};
