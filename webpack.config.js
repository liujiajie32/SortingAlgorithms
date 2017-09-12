'use strict';

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
// const CommonChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin'); 
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Folder path definition
const ROOT_PATH = path.resolve(__dirname);
const JS_DIST_PATH = path.resolve(ROOT_PATH, 'dist/js');


// Judge if there's an argument '-p' or '--production' in script
let isProduction = false;
for (let i in process.argv) {
  if (process.argv[i] === '-p' || process.argv[i] === '--production') {
    isProduction = true;
    break;
  }
}
//let outputName  = isProduction ? 'sa.min' : 'sa';

let cleanPath = [path.resolve(ROOT_PATH, '*.zip')];

if(isProduction) {
  cleanPath.push(path.resolve(JS_DIST_PATH, '*.min.js'));
} else {
  cleanPath.push(path.resolve(JS_DIST_PATH, '*.js'));
}


let config = {
  entry:  {
    'sa': './src/sa.all',
    'GetRandomArray': './src/Utils/GetRandomArray',
    'SelectionSort': './src/SimpleSorts/SelectionSort/SelectionSort'
  },
  output: {
    path: JS_DIST_PATH,
    filename: isProduction ? '[name].min.js' : '[name].js',
    library: '[name]',
    libraryTarget: 'umd'
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
      options: {
        // Not to use .babelrc or .babelignore files
        babelrc: false,
        // use the default cache directory in node_modules/.cache/babel-loader
        cacheDirectory: true,
        presets: [
          'es2015',
          'stage-1'
        ],
        // plugins: [
        //   ['transform-runtime', {
        //     'helpers': false,
        //     'polyfill': true,
        //     'regenerator': true
        //   }],
        //   'add-module-exports',
        //   'transform-es3-member-expression-literals',
        //   'transform-es3-property-literals'
        // ]


      // presets: ['es2015', 'stage-1']
      }
    }]
  },

  resolve:{
    extensions:['.js']
  }

};

module.exports = config;