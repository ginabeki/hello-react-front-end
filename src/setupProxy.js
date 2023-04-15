const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/random_greeting',
    createProxyMiddleware({
      target: 'http://localhost:3000',
      changeOrigin: true,
    }),
  );
};
