import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = (app: any) => {
  app.use(
    createProxyMiddleware('/api/students', {
      target: 'https://ius-student-backend.vercel.app',
      changeOrigin: true,
    })
  );
};
