const path = require('path'); // подключаем библиотеку path
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    entry: "./src/index.js", // точка входа
    // точка выхода /dist/bundle.js
    output : {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,  // обрабатываем все файлы js
                exclude: /node_modules/, // исключаем папку  node_modules
                use: {
                    loader: "babel-loader"   // используем обработчик
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]

}