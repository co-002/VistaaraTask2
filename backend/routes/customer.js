import express from "express"
import { addCustomer, getAllCustomer } from "../controllers/customer.js";

const router = express.Router();

router.post("/customer", addCustomer)
router.get("/customer", getAllCustomer)

export default router