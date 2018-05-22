const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
	devtool: 'cheap-module-eval-source-map',

	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: "bundle.js"
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			}
		]
	},

	devServer: {
		contentBase: "./dist",
		historyApiFallback: true,
		port: 9999
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	]
}