const path = require('path');

module.exports = {
  entry: {
    bundle: './src/main.jsx'
  },
  output: {
    path: path.join(__dirname, './dist/'),
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        exclude: /node_modules/,
        test: /\.js[x]?$/,
        query: {
          cacheDirectory: false,
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
};
