// Important notes
// 🚨 Configuration file must use ES5 not ES6
// that's why you will see "requires" not "imports"

// Importing an file routing manager
const path = require('path');
// Importing Extract Plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const EslintPlugin = require("eslint-webpack-plugin");

// We export a configuration object
// that will be used by webpack
module.exports = {
  // 1. The entry file or indexer
  entry: "./client/index.js",
  // 2. Specify the output file
  output: {
    // 2.1 Absolute output path
    path: path.resolve(__dirname, "public"),
    // 2.2 Output file name
    filename: "bundle.js",
    publicPath: '/'
  },
  // 3. Configuring the development server
  devServer: {
    // 3.1 Static files folder
    static: path.join(__dirname, "public"),
    // 3.2 Development server port
    port: 8080,
    // 3.3 Defining the host
    host: "localhost"
  },
  // Adding a module to webpack
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    'modules': false,
                    'useBuiltIns': 'usage',
                    'targets': {"chrome": "80"},//'> 0.25%, not dead',
                    'corejs': 3
                  }
                ]
              ]
            }
          }
        ]
      }, {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({
    // Archivo css de salida
    filename: 'styles/app.css'
  }),
new EslintPlugin()
]
}