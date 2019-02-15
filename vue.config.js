// 基础路径 注意发布之前要先修改这里
let baseUrl = './'
let url = 'http://localhost:8800'
module.exports = {
    baseUrl: baseUrl, // 根据你的实际情况更改这里
    lintOnSave: true,
    productionSourceMap: false,
    chainWebpack: (config) => {
        //忽略的打包文件
        config.externals({
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'axios': 'axios',
            'element-ui': 'ELEMENT',
        })
        const entry = config.entry('app')
        entry
            .add('babel-polyfill')
            .end()
        entry
            .add('classlist-polyfill')
            .end()
        entry
            .add('@/mock')
            .end()
    },
    devServer: {
        proxy: {
            '/api': {
                target: url,
                ws: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    }
}
