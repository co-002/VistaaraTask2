import express from "express";
import dotenv from "dotenv"
import connectDB from "./DB_connection.js";
import customerRouter from "./routes/customer.js"

dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(express.json());

// Database connection method
connectDB();

app.use("/api", customerRouter)

app.listen(port, () => {
    console.log("Server is running on port: ", port)
})