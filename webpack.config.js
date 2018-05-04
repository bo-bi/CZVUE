const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    //main是默认入口，也可以是多入口
    entry: {
        main: './src/main.js'
    },
    //出口
    output: {
        filename: './build.js',//指定最后生成的js文件
        path: path.join(__dirname,'dist')
        //path最好是绝对路径,path.join修复路径带来的一些问题
        //代表当前目录上一级的dist
    },
    module: {
        // 一样的功能rules:  webpack2.x之后新加的
        loaders: [    //require('./a.css||./a.js')
            {
                test:/\.css$/, //以.css结尾
                loader: 'style-loader!css-loader',
                //顺序是反过来的 2!1
            },
            {
                test:/\.(jpg|svg|png|gif)$/,
                //loader也可以传参数：①写url上 ②options
                loader: 'url-loader?limit=4096&name=[name].[ext]',
                //[name].[ext]内置提供的，因为本身是先读这个文件


                //------------------------------------------------------
                //用以下这个会报错
                // options: {
                //     limit: 4096,
                //     name: '[name].[ext]'
                // }
                //------------------------------------------------------
            },
            {
                //处理ES6的js
                test: /\.js$/,
                loader: 'babel-loader',
                //排除 node_modules的所有
                exclude: /node_modules/,
                options: {
                    presets: ['es2015'],//关键字
                    plugins: ['transform-runtime'],//函数
                }
            }
        ]
    },
    plugins: [
        //插件的执行顺序是依次执行的
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
        //将src下的template属性描述的文件根据当前配置的output.path,
        //将文件移动到该目录
        //打包后生成的html自动引了build.js
    ]
}