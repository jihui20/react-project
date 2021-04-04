const path = require('path');
const webpack = require('webpack');


module.exports = {
    name: 'word-relay-setting', //웹팩 설정의 이름
    mode: 'development', //개발용 모드 실서비스 : production
    devtool: 'eval', //빠르게 하겠다는 의미 실서비스에는 hidden-source-map
    resolve: {
        extensions: ['.js', '.jsx'] //entry파일에 확장자 안붙여도 js나 jsx 파일이 있는지 웹팩이 알아서 찾아줌
    },
    
    entry: {
        app: [ './client'],
    }, //입력
    module: {// 입력된 내용을 모듈화 시켜서 출력
        rules: [{
            test: /\.jsx?/, //규칙을 적용할 파일들
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> .1% in KR'],
                        },
                        useBuiltIns: 'entry',
                        debug: true,
                    }],
                     '@babel/preset-react'
                    ],
                plugins: ['@babel/plugin-proposal-class-properties']
            },
        }],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({debug: true}),
    ],
    output: {
        path: path.join(__dirname, 'dist'), //__dirname : 현재폴더
        filename: 'app.js',
    }, //출력
};