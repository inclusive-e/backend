require("dotenv").config();

const postgresConfiguration = (PROJECT_ROOT) => {
  const DB_HOST = process.env.DB_HOST || "localhost";
  const DB_PORT = parseInt(process.env.DB_PORT) || 5432;
  const DB_USERNAME = process.env.DB_USERNAME || "";
  const DB_PASSWORD = process.env.DB_PASSWORD || "";
  const DB_NAME = process.env.DB_NAME || "";

  const DB_SSL = process.env.DB_SSL === "True";
  const extraSslConnectionParam = DB_SSL
    ? { rejectUnauthorized: false }
    : undefined;

  return [
    {
      name: "todo-db",
      host: DB_HOST,
      port: DB_PORT,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_NAME,
      entities: [`${PROJECT_ROOT}/datasources/documents/entities/*{.ts,.js}`],
      migrations: [`${PROJECT_ROOT}/migrations/documents_migration/*{.ts,.js}`],
      subscribers: [
        `${PROJECT_ROOT}/datasources/documents/subscribers/*{.ts,.js}`,
      ],
      logging: false,
      cli: {
        entitiesDir: "src/datasources/documents/entities",
        migrationsDir: "src/migrations/documents_migration",
      },
      extra: {
        connectionLimit: 10,
        ssl: extraSslConnectionParam,
      },
      ssl: DB_SSL,
    },
  ];
};

module.exports = postgresConfiguration;
