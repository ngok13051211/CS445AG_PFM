const express = require("express");
const TransactionController = require("../controllers/transaction.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validateTransaction } = require("../middleware/validation.middleware");

const router = express.Router();

router.use(authMiddleware);

router.get("/", TransactionController.getAll);
router.get("/:id", TransactionController.getById);
router.post("/", validateTransaction, TransactionController.create);
router.put("/:id", validateTransaction, TransactionController.update);
router.delete("/:id", TransactionController.delete);
router.get("/monthly/:year/:month", TransactionController.getMonthlyTotal);

module.exports = router;
