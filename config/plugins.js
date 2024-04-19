module.exports = ({ env }) => ({
  // ...
  "users-permissions": {
    config: {
      ratelimit: {
        interval: 30000,
        max: 20,
      },
    },
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "smtpout.secureserver.net",
        port: 465,
        auth: {
          user: "noreply@orderr.app",
          pass: "Socialseller@07",
        },
        // ... any custom nodemailer options
      },
    },
  },
  upload: {
    config: {
      sizeLimit: 250 * 1024 * 1024, // 256mb in bytes
    },
  },
  // ...
});
