// eslint-disable-next-line no-undef
module.exports = {
  proxy: {
    '/api': {
      target: 'https://example.com',
      changeOrigin: true
    }
  }
}
