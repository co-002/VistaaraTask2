import mongoose, { mongo } from "mongoose";

const transactionSchema = new mongoose.Schema({
    purchasedProductName: {
        type: String,
        required: true,
    },
    purchasedProductPrice: {
        type: Number,
        required: true,
    },
    customerAccountNumber: {
        type: Number,
        required: true,
    },
})

export const Transaction = mongoose.model("Transaction", transactionSchema)