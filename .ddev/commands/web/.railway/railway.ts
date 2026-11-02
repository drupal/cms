import { defineRailway, mysql, postgres, preserve, project, service, volume } from "railway/iac";

export default defineRailway(() => {
  const files = volume("drupal-files", {});
  const usePostgres = process.env.DDEV_DATABASE_FAMILY === "postgres";
  const db = usePostgres ? postgres("db") : mysql("db");

  const web = service("web", {
    preDeploy: "start.sh release",
    healthcheck: "/",
    healthcheckTimeout: 600,
    volumeMounts: {
      // The Dockerfile links /opt/drupal/site to the site directory, wherever
      // the web root is.
      "/opt/drupal/site/files": files,
    },
    env: {
      // Each kind of database calls its connection URL something different.
      DATABASE_URL: usePostgres ? db.env.DATABASE_URL : db.env.MYSQL_URL,
      DRUPAL_REVERSE_PROXY: "1",
      DRUPAL_HASH_SALT: preserve(),
    },
  });

  return project(process.env.DDEV_PROJECT ?? "drupal", {
    resources: [web, files, db],
  });
});
