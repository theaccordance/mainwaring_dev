import cronTasks from "./cron-tasks";

export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env("PUBLIC_URL"),
  cron: {
    enabled: true,
    tasks: cronTasks
  }
});
