import { Transaction } from "../models/transaction.js";
import { Customer } from "../models/customer.js";

const addTransaction = async (req, res) => {
  try {
    const {
      purchasedProductName,
      purchasedProductPrice,
      customerAccountNumber,
    } = req.body;
    let customer = await Customer.findOne({ accountNumber: customerAccountNumber });
    if (!customer) {
      return res.send({
        success: true,
        message: "This customer is not exist",
      });
    }
    let transaction = new Transaction({
      purchasedProductName,
      purchasedProductPrice,
      customerAccountNumber,
    });
    await transaction.save();
    res.send({
      success: true,
      message: "Customer transaction inserted",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const getAllTransaction = async (req, res) => {
  try {
    let transaction = await Transaction.find();
    res.send({
      success: true,
      message: "All customers",
      transaction,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

export { addTransaction, getAllTransaction };
