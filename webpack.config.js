var config = {
    context: __dirname + "/src",
    entry: "./main.js",

    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        publicPath: "/dist"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env']
                }
            }
        ],
    }
};

module.exports = config;
