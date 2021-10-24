import React from "react";
import ReactDOM from "react-dom";
import App from "App/App";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from "@mui/material/CssBaseline";

import { QueryClientProvider } from "react-query";
import ReactQueryClient from "Utils/query-client";

// theme provider
import { ThemeProvider } from "@mui/material";
import MuiTheme from "Mui/Theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={MuiTheme}>
      <QueryClientProvider client={ReactQueryClient}>
        <CssBaseline />
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

reportWebVitals();
