const path = require('path'); //노드 모듈 중 패스 모듈
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports ={
    mode:  'development',//개발용으로 할거니 프로덕션용으로 할거니
    entry: {//여러개의 모듈로 연결되어있는 시작점을 지정 (제일 상위)
        main: './src/app.js',
    },
    output: {//여러개의 모듈을 하나로 만들어서 저장시킬 위치
        path: path.resolve('./dist'), // 폴더, 절대경로 전달
        filename: '[name].js' ,//파일, entry에 저장한 키값이 들어옴
    },
    module: {
        rules: [
            {//style-loader, css-loader 설정
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
              {//file-loader 설정
                test: /\.(jpg|png)$/,
                use: [{
                    loader: 'file-loader',
                     options: {
                    //     publicPath: '../dist', //이미지 호출시 경로 앞에 disr경로 추가 , html플러그인 설치하면 필요 없어짐
                    name: '[name].[ext]?[hash]', //이미지 원본 파일의 이름과 확장명 가져오기
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
    ]
}