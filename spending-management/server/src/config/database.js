const knex = require("knex");
const knexfile = require("../../knexfile");
const environment = process.env.NODE_ENV || "development";
const connectionConfig = knexfile[environment];
module.exports = knex(connectionConfig);
