module.exports = {
  chainWebpack: config => {
    config.optimization.splitChunks(false)
  }
}
