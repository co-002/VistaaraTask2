import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppState";

function UserList() {
  const {
    fetchCustomer,
    fetchFiveThousandProducts,
    fetchCustomerAllTransaction,
  } = useContext(AppContext);
  const [activeRow, setActiveRow] = useState(null);
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [belowFive, setBelowFive] = useState([]);
  const [whichBtnClicked, setWhichBtnClicked] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allCustomer = await fetchCustomer();
        setCustomers(allCustomer);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching customers:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchCustomer]);

  const handleToggle = async (index) => {
    setActiveRow(activeRow === index ? null : index);
    setBelowFive([]);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const belowFiveThousand = async (accountNumber) => {
    const allTransaction = await fetchFiveThousandProducts(accountNumber);
    setWhichBtnClicked("five");
    setBelowFive(allTransaction.transactions);
  };

  const distinctProduct = async (accountNumber) => {
    const allTransaction = await fetchCustomerAllTransaction(accountNumber);
    let products = allTransaction.transactions.map(
      (transaction) => transaction.purchasedProductName
    );
    products = [...new Set(products)];
    setWhichBtnClicked("distinctProduct");
    setBelowFive(products);
  };

  return (
    <div className="container section-padding mt-5">
      <h2>User List</h2>
      <table className="table table-striped table-dark mt-3">
        <thead>
          <tr>
            <th scope="col">Sr.No.</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Account</th>
          </tr>
        </thead>
        <tbody>
          {customers?.map((customer, index) => (
            <React.Fragment key={index}>
              <tr>
                <td>{index + 1}</td>
                <td>{customer.name}</td>
                <td>{customer.address}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleToggle(index, customer)}
                  >
                    Get Transaction
                  </button>
                </td>
              </tr>
              {activeRow === index && (
                <tr>
                  <td colSpan="4">
                    <div className="alert alert-info">
                      <div className="d-flex ">
                        <button
                          className="btn btn-warning"
                          onClick={() =>
                            belowFiveThousand(customer.accountNumber)
                          }
                        >
                          Transaction below 5000
                        </button>
                        <button
                          className="btn btn-warning ms-5"
                          onClick={() =>
                            distinctProduct(customer.accountNumber)
                          }
                        >
                          Trasaction distinct Products
                        </button>
                      </div>
                      <div className="mt-2">
                        {belowFive.length > 0 && whichBtnClicked == "five"
                          ? belowFive.map((item, idx) => (
                              <p key={idx} className="m-0">
                                Product:{" "}
                                {item.purchasedProductName +
                                  ", Price: " +
                                  item.purchasedProductPrice}
                              </p>
                            ))
                          : ""}

                        {whichBtnClicked == "distinctProduct" &&
                        belowFive.length > 0
                          ? belowFive.map((item, idx) => (
                              <p key={idx} className="m-0">{item}</p>
                            ))
                          : ""}
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
