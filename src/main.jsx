import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./app/store.js";
import { Provider } from "react-redux";

import { ThemeProvider as MaterialThemeProvider } from "@material-tailwind/react";
import { ThemeProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <MaterialThemeProvider>
          <App />
        </MaterialThemeProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
