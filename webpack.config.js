const path = require('path');
module.exports = {
  entry: {
    client: './src/client.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "[name].js"
  },
  module:{
    rules: [
        {
            test:/\.js$/,
            exclude:/node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.less$/,
            use: [
              {
                loader: "style-loader"
              },
              {
                loader: "css-loader",
                options: {
                  sourceMap: true,
                  modules: true,
                  localIdentName: "[local]"
                }
              },
              {
                loader: "less-loader"
              }
            ]
        }
    ]
}
}