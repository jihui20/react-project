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
            // preset-react: 마크업은 아니지만 마크업과 똑같은 구조를 갖고 있는 문법을
            // 리액트가 갖고있는 'createElement'라는 함수 호출 구문으로 바꿔주는 역할
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
