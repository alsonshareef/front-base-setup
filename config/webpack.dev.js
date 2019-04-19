const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
	mode: "development",
	output: {
		filename: "js/[name].js",
		path: path.resolve(__dirname, "../dist")
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/template.html"
		})
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader", //3. Inject styles into DOM
					"css-loader", //2. Turns css into commonjs
					"sass-loader" //1. Turns sass into css
				]
			}
		]
	}
});
