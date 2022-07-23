// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//     transpileDependencies: true,
//     lintOnSave: false,
// })
module.exports = {
    lintOnSave: false,
    devServer: {
        // liveReload: false,
        // hot: true,
        open: ['http://localhost:8080'],
    },
};