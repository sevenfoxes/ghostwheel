const path = require('path')
const fs = require('fs')
const pluralize = require('pluralize')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin')
const SpritePlugin = require('svg-sprite-loader/plugin')

function getJSONFromCssModules(cssFileName, json) {
  const fileName = path.basename(cssFileName, '.scss')
  const folders = path.dirname(cssFileName).split('/')
  const innerPath = folders.pop()
  const outerPath = pluralize.singular(folders.pop())
  const jsonFileName = (fileName == 'index')
    ? path.resolve('./jekyll/_data/css', `${outerPath}_${innerPath}.json`)
    : path.resolve('./jekyll/_data/css', `${outerPath}_${innerPath}__${fileName}.json`)

  fs.writeFileSync(jsonFileName, JSON.stringify(json))
}

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'jekyll'),
    filename: 'assets/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              spriteFilename: '_includes/svg-sprite.html'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: { importLoaders: 1 }
          }, {
            loader: 'clean-css-loader',
            options: {
              format: 'keep-breaks'
            }
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')
              ]
            }
          }]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: { importLoaders: 1 }
          }, {
            loader: 'clean-css-loader',
            options: {
              format: 'keep-breaks'
            }
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer'),
                require('postcss-modules')({
                  getJSON: getJSONFromCssModules,
                  generateScopedName: '[local]_[hash:base64:5]'
                })
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve(__dirname, './helpers/css')
              ]
            }
          }]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('assets/app.min.css'),
    new BrowserSyncPlugin({
      files: [
        './_site'
      ],
      server: {
        baseDir: './_site'
      },
      open: false,
      browser: 'default',
      reloadOnRestart: true,
      notify: false
    }),
    new WebpackShellPlugin({
      onBuildEnd: ['jekyll serve']
    }),
    new SpritePlugin()
  ]
}
