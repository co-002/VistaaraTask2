import express from "express";
import {
  addTransaction,
  getAllTransaction,
  getAllTransactionAboveOrEqualFiveThousand
} from "../controllers/transaction.js";

const router = express.Router();

router.post("/transaction", addTransaction);
router.get("/transaction", getAllTransaction);
router.get("/transaction/greaterThenFive/:customerAccountNumber", getAllTransactionAboveOrEqualFiveThousand);

export default router;
