

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'aiman-my-sql-server.mysql.database.azure.com'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'sampledb'),
      user: env('DATABASE_USERNAME', 'aiman@aiman-my-sql-server'),
      password: env('DATABASE_PASSWORD', 'Aloved12!'),
      ssl: env.bool('DATABASE_SSL', true),
    },

  },

});
