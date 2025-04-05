import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB_connection.js";
import customerRouter from "./routes/customer.js";
import cors from "cors";
import transactionRouter from "./routes/transaction.js";

dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(
  cors({
    origin: "https://vistaaratask2-frontend.onrender.com",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
  })
);

// Database connection method
connectDB();

app.use("/api", customerRouter);
app.use("/api", transactionRouter);

app.listen(port, () => {
  console.log("Server is running on port: ", port);
});
