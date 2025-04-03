import { Customer } from "../models/customer.js";
import bcrypt from "bcrypt";

const addCustomer = async (req, res) => {
  try {
    const { name, address, accountNumber } = req.body;

    let customer = await Customer.findOne({ accountNumber });
    if (customer) {
      return res.send({
        success: false,
        message: "Customer is already exist",
      });
    }
    customer = new Customer({ name, address, accountNumber });
    await customer.save();
    res.send({
      success: true,
      message: "Customer inserted",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

export { addCustomer };
