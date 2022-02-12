require("dotenv").config();

const { postgresConfiguration } = require("./connections");

const PROJECT_ROOT = process.env.NODE_ENV !== "development" ? "build" : "src";

module.exports = postgresConfiguration(PROJECT_ROOT);
