
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var CommonChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin"); 

// Folder path definition
var ROOT_PATH = path.resolve(__dirname);
var JS_DIST_PATH = path.resolve(ROOT_PATH, 'dist/js');


// Judge if there's an argument '-p' or '--production' in script
var isProduction = false;
for (let i in process.argv) {
  if (process.argv[i] === '-p' || process.argv[i] === '--production') {
    isProduction = true;
    break;
  }
}
var outputName  = isProduction ? 'sa.min' : 'sa';


module.exports = {
  entry:  {
    [outputName]: [
      './src/SimpleSorts/SelectionSort/SelectionSort.js',
      './src/Utils/GetRandomArray.js'
    ]
  },
  output: {
    path: JS_DIST_PATH,
    filename: '[name].js'
  },
  plugins: [
    // Abstract common chunks to vendor.js
    new CommonChunkPlugin({name: 'vendors', filename:'vendors.js'})
  ],
  module: {
    loaders:[{
      // babel loader
      test:/\.js$/,
      loader: 'babel-loader',
      exclude: /(node_modules|bower_components)/,
      // include: JS_DIST_PATH,
      query: {
      // presets: ['es2015', 'stage-1']
      }
    }]
  },

  resolve:{
    extensions:['.js', '.jsx', '.css']
  }



}