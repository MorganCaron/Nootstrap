"use strict";

const webpackConfigGenerator = require("webpack-config-generator");

module.exports = (env, argv) => {
	return webpackConfigGenerator({
		mode: argv.mode,
		entry: {
			app: ["./src/docs/ts/App.ts", "./src/docs/sass/style.sass"],
			Nootstrap: ["./src/ts/Nootstrap.ts"]
		},
		index: "src/docs/index.html",
		resourcesFolder: "docs/",
		favicon: "./src/docs/favicon.png"
	});
};
