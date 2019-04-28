const HtmlWebpackPlugin  =  require('html-webpack-plugin');


const config = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/, // find all js files
                use: ["babel-loader"] // convert all es6 to es5 using babel loader
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template:"./public/index.html",
        filename:"./index.html"
    })]
}


module.exports = config;