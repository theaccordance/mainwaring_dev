export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('POSTGRES_HOST', '127.0.0.1'),
      port: env.int('POSTGRES_PORT', 5432),
      database: env('POSTGRES_DATABASE', "mainwaring-dev"),
      user: env('POSTGRES_USER', "strapi"),
      password: env('POSTGRES_PASSWORD', "strapi"),
      ssl: {
        ca: Buffer.from(env("POSTGRES_CERT"), "base64").toString("ascii"),
      },
    },
  },
});
