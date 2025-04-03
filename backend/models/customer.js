import mongoose, { mongo } from "mongoose";

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    accountNumber: {
        type: Number,
        required: true,
        unique: true
    }
})

export const Customer = mongoose.model("Customer", customerSchema)