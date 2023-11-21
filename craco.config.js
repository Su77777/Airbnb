const path = require('path')
const CracoLessPlugin = require('craco-less');
const resolve = pathname => path.resolve(__dirname,pathname)
// 在react中配置webpack别名
module.exports  = {
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
 webpack:{
  alias:{
    '@':resolve('src')
  }
 }
}