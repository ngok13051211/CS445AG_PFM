module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: "localhost",
      database: "spending_management",
      user: "postgres", // hoặc username bạn đã tạo
      password: "01646354572@", // password bạn đã đặt
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    seeds: {
      directory: "./src/database/seeds",
    },
  },
};
