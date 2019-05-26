const DefinePlugin = require('webpack').DefinePlugin

module.exports = {
  entry: './src/main.js',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  resolve: {
    extensions: [ '.js', '.css']
  },
  output: {
    filename: 'kspace-script.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }]
	},
  plugins: [
    new DefinePlugin({
      VUE_APP_BACKEND_URL: JSON.stringify(process.env.VUE_APP_BACKEND_URL || 'http://localhost:8003'),
      VUE_APP_PMAP_URL: JSON.stringify(process.env.VUE_APP_PMAP_URL || 'https://pmaps-sk-test-project.apps-dev.hbp.eu'),
      PLUGIN_NAME: JSON.stringify(process.env.PLUGIN_NAME || 'fzj.xg.webjugex-frontend')
    })
  ],
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    compress: true,
    port: 3002,
    contentBase: './public'
  }
}
