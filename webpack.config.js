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
  },
  module: {
    loaders:[{
      test:/\.js$/,
      loader: 'babel-loader',
      exclude:"/node_modules/",
      include: __dirname +"/dist",
      query: {presets: ['es2015', 'stage-0'], plugins:[]}
    }]
  },

  resolve:{
    extensions:['.js','.jsx']
  }



}