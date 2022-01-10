module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5eeb4a760e2b6af0c87a237e0ad39b28'),
  },
});
