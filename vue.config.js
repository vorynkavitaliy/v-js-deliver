const server = require('./server/configure')
module.exports = {
    transpileDependencies: ['vuetify'],
    devServer: {
        before: server
    }
}
