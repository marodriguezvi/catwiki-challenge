const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  entry: {
    index: {
      import: './src/scripts/index.js',
    },
    info: {
      import: './src/scripts/info.js',
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'js/[name].bundle.js',
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: false,
    liveReload: true,
  },
  resolve: {
    alias: {
      handlebars: 'handlebars/dist/cjs/handlebars',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html/i,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true,
          },
        },
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        options: {
          helperDirs: path.resolve(__dirname, 'src/handlebars/helpers'),
          partialDirs: path.resolve(__dirname, 'src/handlebars/partials'),
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.svg/,
        type: 'asset/inline',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]',
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.hbs'),
      chunks: ['index'],
      filename: './index.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/info.hbs'),
      chunks: ['info'],
      filename: './info.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    new Dotenv(),
  ],
};
