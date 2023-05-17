const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app : any)  {
  app.use(
    createProxyMiddleware('/xhr/media/get-source?type=audio&key=kmJHTZHNCVaSmSuymyFHLH',{
      target: 'http://mp3.zing.vn',
      changeOrigin: true,
    })
  );
};
export {};