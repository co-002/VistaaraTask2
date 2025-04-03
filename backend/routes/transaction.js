import express from "express";
import {
  addTransaction,
  getAllTransaction,
} from "../controllers/transaction.js";

const router = express.Router();

router.post("/transaction", addTransaction);
router.get("/transaction", getAllTransaction);

export default router;
