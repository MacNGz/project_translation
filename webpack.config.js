const path = require('path');

module.exports = {
  mode: "development", devtool: "inline-source-map",
  entry: './project_translation/js/main.tsx',
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, '/project_translation/static/js/'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
          test: /\.css$/i,
          include: path.join(__dirname, '/project_translation/static/css/'),
          exclude: /node_modules/,
          use: [
            { loader: "style-loader" },
            { loader: "css-modules-typescript-loader"},
            {
              loader: 'css-loader',
              options: {
                modules: true,
              }
            }
          ]
      },
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
    extensions: ['.js', '.ts', '.tsx', '.css'],
  },
};
