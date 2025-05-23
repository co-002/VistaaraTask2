import { Transaction } from "../models/transaction.js";
import { Customer } from "../models/customer.js";

const addTransaction = async (req, res) => {
  try {
    const {
      purchasedProductName,
      purchasedProductPrice,
      customerAccountNumber,
    } = req.body;
    let customer = await Customer.findOne({
      accountNumber: customerAccountNumber,
    });
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

const getAllTransactionAboveOrEqualFiveThousand = async (req, res) => {
  try {
    let { customerAccountNumber } = req.params;
    customerAccountNumber = Number(customerAccountNumber);
    const transactions = await Transaction.find({
      purchasedProductPrice: { $gte: 5000 },
      customerAccountNumber: customerAccountNumber,
    });

    res.send({
      success: true,
      message: `Transactions for customer ${customerAccountNumber} with purchasedProductPrice >= 5000`,
      transactions,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const getCustomerTransaction = async (req, res) => {
  try {
    let { customerAccountNumber } = req.params;
    customerAccountNumber = Number(customerAccountNumber);
    const transactions = await Transaction.find({
      customerAccountNumber: customerAccountNumber,
    });

    res.send({
      success: true,
      message: `All transaction of single customer`,
      transactions,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

export {
  addTransaction,
  getAllTransaction,
  getAllTransactionAboveOrEqualFiveThousand,
  getCustomerTransaction
};
