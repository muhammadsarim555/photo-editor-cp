const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/v1/',
    createProxyMiddleware({
      target: 'https://16e3-149-86-49-47.eu.ngrok.io/api',
      changeOrigin: true,
    })
  );
};