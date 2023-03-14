import * as Sentry from "sentry-expo";

Sentry.init({
  dsn: '<input dsn here>',
  enableInExpoDevelopment: true,
  debug: process.env.NODE_ENV === 'development',
  environment: process.env.NODE_ENV
});
