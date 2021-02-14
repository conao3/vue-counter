const path = require('path');

const { VueLoaderPlugin } = require('vue-loader');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  devServer: {
    contentBase: './dist',
    open: true,
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new VueLoaderPlugin(),
    new PrerenderSpaPlugin(
      Path.join(__dirname, 'dist'),
      [
        '/sample',
      ],
      {
        postProcessHtml: context => {
          return context.html;
        }
      }
    ),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              minimize: true,
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader;
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('autoprefixer')({ grid: true })
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: enabledSourceMap,
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        use: [
          'vue-loader',
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ]
            }
          }
        ]
      }
    ]
  }
};
