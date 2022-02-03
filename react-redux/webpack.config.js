const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path'); // node에서 가져오니까 require

module.exports = {
  mode: 'development',
  entry: './src/app.js', // 입력 정보, 어떤 자바스크립트 파일에서 실행할거야
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  }, // 출력 정보, 여러가지 정보가 필요해서 객체
  devServer: {
    port: 9999,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '2.3 setup webpack & babel',
      template: 'index.html',
    }),
  ],
};
