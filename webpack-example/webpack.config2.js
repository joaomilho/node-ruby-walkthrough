module.exports = {
  entry: './src2/index.js',

  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee' }
    ]
  },

  resolve: {
    extensions: ['', '.js']
  },

  output: {
    filename: 'app.js',
    path: './dest'
  }
}
