module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        host: env("DATABASE_HOST", String(process.env.DB_HOST)),
        srv: env.bool("DATABASE_SRV", Boolean(process.env.DB_SRV) || false),
        port: env.int("DATABASE_PORT", Number(process.env.DB_PORT) || 27017),
        database: env(
          "DATABASE_NAME",
          String(process.env.DB_NAME) || bijoubrocapi
        ),
        username: env("DATABASE_USERNAME", String(process.env.DB_USERNAME)),
        password: env("DATABASE_PASSWORD", String(process.env.DB_PASSWORD)),
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
        ssl: env.bool("DATABASE_SSL", Boolean(process.env.DB_SSL) || false),
      },
    },
  },
});
