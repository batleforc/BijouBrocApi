module.exports = ({ env }) => ({
  host: env("HOST", String(process.env.HOST)),
  port: env.int("PORT", Number(process.env.PORT)),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", Boolean(process.env.ADMIN_JWT_SECRET)),
    },
  },
});
