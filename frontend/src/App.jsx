import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <Navbar />
      {isAuthenticated ? <UserList /> : ""}
    </>
  );
}

export default App;
