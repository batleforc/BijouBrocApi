module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        host: env("DATABASE_HOST", String(process.env.DB_HOST)),
        srv: env.bool("DATABASE_SRV", Boolean(process.env.DB_SRV)),
        port: env.int("DATABASE_PORT", Number(process.env.DB_PORT)),
        database: env("DATABASE_NAME", String(process.env.DB_NAME)),
        username: env("DATABASE_USERNAME", String(process.env.DB_USERNAME)),
        password: env("DATABASE_PASSWORD", String(process.env.DB_PASSWORD)),
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
        ssl: env.bool("DATABASE_SSL", Boolean(process.env.DB_SSL)),
      },
    },
  },
});
