const { name } = require('./package');

module.exports = {
  devServer: {
    port:"5555",
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('fonts')
      .test(/.(ttf|otf|eot|woff|woff2)$/)
      .use('url-loader')
      .loader('url-loader')
      .tap(options => ({ name: '/fonts/[name].[hash:8].[ext]' }))
      .end()
  },
//   rules: [
//     {
//       test: /\.(png|jpe?g|gif|webp|woff2?|eot|ttf|otf)$/i,
//       use: [
//         {
//           loader: 'url-loader',
//           options: {},
//         },
//       ],
//     },
//   ],
  // 自定义webpack配置
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',// 把子应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};