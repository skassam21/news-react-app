var webpack = require('webpack');

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
              loaders: ['style-loader', 'css-loader', 'sass-loader']
          },
          {
            test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
          }
        ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
};

module.exports = config;
