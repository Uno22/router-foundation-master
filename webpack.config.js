
module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Account: 'app/components/Account.js',
      HomePage: 'app/components/HomePage.js',
      Main: 'app/components/Main.js',
      Nav: 'app/components/Nav.js',
      Transaction: 'app/components/Transaction.js',
      SignIn: 'app/components/SignIn.js',
      AccountInfo: 'app/components/AccountInfo.js'
    }
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  }
};
