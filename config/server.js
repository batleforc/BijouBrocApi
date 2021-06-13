module.exports = ({ env }) => ({
  host: env("HOST", String(process.env.HOST)),
  port: env.int("PORT", Number(process.env.PORT)),
  url: "/api",
  admin: {
    auth: {
      secret: env(
        "ADMIN_JWT_SECRET",
        Boolean(process.env.ADMIN_JWT_SECRET) ||
          "29fa280fe66684edbf50dec1ef1a9b90"
      ),
    },
  },
});
