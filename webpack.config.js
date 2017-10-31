var autoprefixer = require('autoprefixer');
var precss = require('precss');

var config = {
    context: __dirname + "/src",
    entry: "./index.js",

    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        publicPath: "/dist"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
          {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                  presets: ['react', 'env']
              }
          },
          {
              test: /\.scss$/,
              loaders: ['style-loader', 'css-loader']
          },
          {
              test: /\.scss$/,
              loader: 'postcss-loader',
              options: { plugins: () => [
                autoprefixer,
                precss
              ]
            }
          }
        ],
    }
};

module.exports = config;
