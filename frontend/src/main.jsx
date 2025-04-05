import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import App from "./App.jsx";
import AppState from "./context/AppState.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppState>
      <Auth0Provider
        domain="dev-it8cwstly0bhz7ql.us.auth0.com"
        clientId="qxg4foK5NYaby7YSbAoMEzkTDqfy026g"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
    </AppState>
  </StrictMode>
);
