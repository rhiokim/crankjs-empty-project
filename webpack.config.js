module.exports = {
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/, 
				use: {
					loader: "babel-loader"
				}
			}
		]
	}
};
