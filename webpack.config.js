var config = {
   entry: './main.js',
	
   output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
           test: /\.css$/,
           loader: 'style-loader'
         },
         {
           test: /\.css$/,
           loader: 'css-loader',
           query: {
             modules: false
            }
         }
      ]
   }
}

module.exports = config;