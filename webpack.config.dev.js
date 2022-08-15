const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: {
      import: './src/scripts/index.js',
    },
    info: {
      import: './src/scripts/info.js',
    },
    top: {
      import: './src/scripts/top.js',
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
    filename: 'js/[name].bundle.js',
    clean: true,
  },
  devtool: 'eval-source-map',
  target: 'browserslist',
  devServer: {
    hot: false,
    open: true,
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
        },
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        options: {
          helperDirs: path.resolve(__dirname, 'src/templates/helpers'),
          partialDirs: path.resolve(__dirname, 'src/templates/partials'),
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
        test: /\.(png|jpe?g|gif|ttf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.hbs'),
      chunks: ['index'],
      filename: './index.html',
      title: 'Catwiki',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/info.hbs'),
      chunks: ['info'],
      filename: './info.html',
      title: 'Catwiki',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/top.hbs'),
      chunks: ['top'],
      filename: './top.html',
      title: 'Catwiki',
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    new Dotenv(),
  ],
};
