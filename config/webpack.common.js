module.exports = {
	entry: ["./src/js/index.js", "./src/sass/main.scss"],
	module: {
		rules: [
			{
				test: /\.html$/,
				use: "html-loader"
			},
			{
				test: /\.(svg|png|jpg|gif)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[hash].[ext]",
						outputPath: "../dist/imgs"
					}
				}
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: [/node_modules/]
			}
		]
	}
};
