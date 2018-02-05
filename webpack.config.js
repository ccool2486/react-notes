const path = require('path');

/** app位置 
 * 如果要暫時換換一下去Playground的話，可以換
*/
const entries = {
  app: './src/app.js',
  playground: './src/playground/redux-101.js'
}

module.exports = {
  entry: entries.playground,
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};
