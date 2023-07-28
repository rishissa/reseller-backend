module.exports = {
    apps: [
      {
        name: 'strapi',
        cwd: '/root/reseller-strapi',
        script: 'npm',
        args: 'start',
        env: {
          NODE_ENV: 'development',
          DATABASE_HOST: 'localhost', // database endpoint
          DATABASE_PORT: '5432',
          DATABASE_NAME: 'reseller_ssa', // DB name
          DATABASE_USERNAME: 'resellerssa', // your username for psql
          DATABASE_PASSWORD: 'resellerssa123', // your password for psql
        },
      },
    ],
  };