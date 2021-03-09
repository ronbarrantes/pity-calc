/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()

const path = require('path')
const { EnvironmentPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const PATHS = {
  public: path.join(__dirname, 'public'),
  dist: path.join(__dirname, 'dist'),
}

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    title: `Genshin pity calculator`,
    meta: {
      viewport: `width=device-width, initial-scale=1, shrink-to-fit=no`,
    },
    // favicon: './public/assets/favicon.png',
  }),
  new CopyWebpackPlugin({ patterns: [{ from: 'public', to: 'public' }] }),
  new EnvironmentPlugin({
    // NODE_ENV: process.env.NODE_ENV,
    // ASSETS_PATH: process.env.ASSETS_PATH,
    // API_URL: process.env.API_URL,
  }),

  new OptimizeCSSAssetsPlugin({}),
]

const optimization = {
  runtimeChunk: 'single',
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all',
      },
    },
  },
}

module.exports = {
  plugins,
  optimization,
  watch: true,
  devtool: 'source-map',
  mode: 'development', // process.env.NODE_ENV,
  entry: './src/main.tsx',

  output: {
    filename: '[name].[hash].js',
    path: PATHS.dist,
    publicPath: '/',
  },

  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    contentBase: './dist',
    disableHostCheck: true,
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },

      {
        test: /\.(woff|woff2|ttf|eot).*/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'font/[name].[hash].[ext]',
            },
          },
        ],
      },

      {
        test: /\.(jpg|gif|png|svg)$/,
        exclude: /\.icon\.svg$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'image/[name].[hash].[ext]',
            },
          },
        ],
      },

      {
        test: /\.icon\.svg$/,
        loader: 'raw-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', '.sass'],
  },
}
