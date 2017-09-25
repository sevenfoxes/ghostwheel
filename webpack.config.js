const path = require('path')
const fs = require('fs')
const pluralize = require('pluralize')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin')

function getJSONFromCssModules(cssFileName, json) {
  const fileName = path.basename(cssFileName, '.scss')
  const folders = path.dirname(cssFileName).split('/')
  const innerPath = folders.pop()
  const outerPath = pluralize.singular(folders.pop())
  const jsonFileName = (fileName == 'index')
    ? path.resolve('./jekyll/_data/css', `${outerPath}__${innerPath}.json`)
    : path.resolve('./jekyll/_data/css', `${outerPath}__${innerPath}--${fileName}.json`)

  fs.writeFileSync(jsonFileName, JSON.stringify(json))
}

module.exports = {
  entry: './assets/app.js',
  output: {
    path: path.resolve(__dirname, 'jekyll/assets'),
    filename: 'bundle.js'
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
                  generateScopedName: '[name]_[local]_[hash:base64:5]'
                })
              ]
            }
          },
          'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.min.css'),
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
      onBuildStart: ['jekyll serve']
    })
  ]
}
