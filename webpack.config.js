var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

module.exports = {
  //entry: "./src/matui.js",
  entry: "./src/index.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  },
  output: {
    path: __dirname + "/www/",
    filename: "bundle.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      // Eliminate comments
      comments: false,

      // Compression specific options
      compress: {
        // remove warnings
        warnings: false,

        // Drop console statements
        drop_console: true
      },

      mangle: {
        keep_fnames: true,
        except: ['$super']
      },
      sourcemap: false
    }),
  ],
};
