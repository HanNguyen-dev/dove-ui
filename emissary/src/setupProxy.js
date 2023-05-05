const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/jobs',
    createProxyMiddleware({
      target: '',
      changeOrigin: true,
    })
  );
};
