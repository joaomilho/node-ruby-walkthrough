module.exports = {
  entry: './src1/index.js',

  resolve: {
    extensions: ['', '.js']
  },

  output: {
    filename: 'app.js',
    path: './dest'
  }
}
