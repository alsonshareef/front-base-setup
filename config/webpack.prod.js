const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	output: {
		filename: "js/[name].[hash].js",
		path: path.resolve(__dirname, "../dist")
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: "css/[name].[hash].css" }),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader, //3. Extract css into files
					"css-loader", //2. Turns css into commonjs
					"sass-loader" //1. Turns sass into css
				]
			}
		]
	},
	optimization: {
		minimizer: [
			new OptimizeCssAssetsPlugin(), // Minimizes CSS
			new TerserPlugin(),
			new HtmlWebpackPlugin({
				filename: "index.[hash].html",
				template: "./src/template.html",
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true
				}
			})
		]
	}
});
