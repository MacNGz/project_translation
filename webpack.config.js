const path = require('path');

module.exports = {
  mode: 'development',
  entry: './project_translation/js/main.tsx',
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, '/project_translation/static/js/'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        // Test for js or jsx files
        test: /\.tsx?$/,
        // Exclude external modules from loader tests
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
};
