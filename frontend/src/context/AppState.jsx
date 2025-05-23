import React, { createContext } from "react";
import axios from "axios";

const AppContext = createContext();

const AppState = ({ children }) => {
  const url = "https://vistaaratask2-backend.onrender.com/api";

  const fetchCustomerTransaction = async () => {
    const response = await axios.get(`${url}/transaction`, {
      Headers: {
        "Content-Type": "Application/json",
      },
      withCredentials: true,
    });
    return response.data;
  };
  const fetchCustomer = async () => {
    const response = await axios.get(`${url}/customer`, {
      Headers: {
        "Content-Type": "Application/json",
      },
      withCredentials: true,
    });
    return response.data.customer;
  };

  const fetchFiveThousandProducts = async (accountNumber) => {
    const response = await axios.get(
      `${url}/transaction/greaterThenFive/${accountNumber}`,
      {
        Headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      }
    );
    return response.data;
  };
  const fetchCustomerAllTransaction = async (accountNumber) => {
    const response = await axios.get(
      `${url}/transaction/${accountNumber}`,
      {
        Headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      }
    );
    return response.data;
  };
  return (
    <AppContext.Provider
      value={{
        url,
        fetchCustomerTransaction,
        fetchCustomer,
        fetchFiveThousandProducts,
        fetchCustomerAllTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };
export default AppState;
