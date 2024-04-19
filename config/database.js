module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "reseller_ssa"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "ssa@123"),
      // password: env("DATABASE_PASSWORD", "resellerssa123"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
    },
    debug: false,
  },
});

// psql -h localhost -d reseller_ssa -U postgres -f testdb.sql
