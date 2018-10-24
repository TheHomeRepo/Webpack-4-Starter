const path = require("path");

module.exports = {
	entry: {
		main: ["./src/main.js"]
	},
	mode: "development",
	output: {
		filename: "main-bundle.js",
		path: path.resolve(__dirname, "../dist"),
		publicPath: "/"
	},
	devServer: {
		contentBase: "dist",
		watchContentBase: true,
		overlay: true,
		compress: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: "babel-loader"
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: { url: false }
					},
					{
						loader: "less-loader"
					}
				]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].html" // name of file created
						}
					},
					{
						loader: "extract-loader" // make separate file
					},
					{
						loader: "html-loader", // linting
						options: {
							attrs: ["img:src"] // target src attr in <img>
						}
					}
				]
			},
			{
				test: /\.(ttf|eot|svg|woff|woff2)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "fonts/[name].[ext]",
					},
				},
			},
			{
				test: /\.(png|jp(e*)g|gif|svg)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "images/[name].[ext]"
						}
					}
				]
			}
		]
	}
}
