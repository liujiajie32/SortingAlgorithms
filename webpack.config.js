module.exports = {
  entry:  {
    sa: [
      './src/SimpleSorts/SelectionSort/SelectionSort.js',
      './src/Utils/GetRandomArray.js'
    ]
  },

  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  }
}