
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
// const CommonChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin"); 
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Folder path definition
const ROOT_PATH = path.resolve(__dirname);
const JS_DIST_PATH = path.resolve(ROOT_PATH, 'dist/js');


// Judge if there's an argument '-p' or '--production' in script
var isProduction = false;
for (let i in process.argv) {
  if (process.argv[i] === '-p' || process.argv[i] === '--production') {
    isProduction = true;
    break;
  }
}
var outputName  = isProduction ? 'sa.min' : 'sa';

var cleanPath = [path.resolve(ROOT_PATH, '*.zip')];

if(isProduction) {
  cleanPath.push(path.resolve(JS_DIST_PATH, '*.min.js'));
} else {
  cleanPath.push(path.resolve(JS_DIST_PATH, '*.js'));
}


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
    // new CommonChunkPlugin({name: 'vendors', filename:'vendors.js'}),
    // Clean dist folder before compiling
    new CleanWebpackPlugin(cleanPath, {
      //root: ROOT_PATH,
      verbose: true // open console information output
    })
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