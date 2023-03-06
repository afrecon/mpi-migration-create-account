const path = require('path');
const ZipPlugin = require('zip-webpack-plugin');

module.exports = {
  entry: './src/index',
  mode: 'production',
  minimize: false,
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts',
      '.js'
    ]
  },
  target: 'node',
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new ZipPlugin({ filename: 'index' })
  ]
}
