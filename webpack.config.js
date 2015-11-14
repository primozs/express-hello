module.exports = {
  entry: './client.js',
  output: {
    filename: './public/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
};
