module.exports = {
  entry: './src3/index.js',

  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee' },
      { test: /\.svg$/, loader: 'file' }
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
