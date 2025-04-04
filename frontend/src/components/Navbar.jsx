import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AppContext } from "../context/AppState.jsx";

function Navbar() {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  return (
    <>
      <div className="fixed-top custom-navbar p-2 d-flex justify-content-between">
        <h4>{user?.given_name}</h4>
        {isAuthenticated ? (
          <button className="btn btn-warning" onClick={() => logout()}>
            Logout
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        )}
      </div>
    </>
  );
}

export default Navbar;
