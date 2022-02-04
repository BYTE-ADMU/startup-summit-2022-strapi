module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2e9e4101ff0f5d2e3c0703b70510fde3'),
  },
});
