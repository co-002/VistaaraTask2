import React, { useState } from "react";

function UserList() {
  const [activeRow, setActiveRow] = useState(null);

  const handleToggle = (index) => {
    setActiveRow(activeRow === index ? null : index);
  };

  const users = [
    { id: 1, name: "Test User 1", address: "Address 1" },
    { id: 2, name: "Test User 2", address: "Address 2" },
    // Add more users as needed
  ];

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
          {users.map((user, index) => (
            <React.Fragment key={user.id}>
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.address}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleToggle(index)}
                  >
                    Get Transaction
                  </button>
                </td>
              </tr>
              {activeRow === index && (
                <tr>
                  <td colSpan="4">
                    <div className="alert alert-info">
                      {/* Replace this content with whatever you want */}
                      Transaction details for
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
