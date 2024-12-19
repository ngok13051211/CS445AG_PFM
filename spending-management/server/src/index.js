require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const categoryRoutes = require("./routes/category.routes");
const transactionRoutes = require("./routes/transaction.routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/test", (req, res) => {
  res.json({ message: "API is working" });
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Spending Management API" });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/transactions", transactionRoutes);

// Start server on all network interfaces
app.listen(3000, "0.0.0.0", () => {
  console.log("Server is running on port 3000");
});
