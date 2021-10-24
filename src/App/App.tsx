import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "Routes/AppRoutes.list";

import AppContextProvider from "AppContext/ContextProvider";
import SearchProvider from "AppContext/SearchContext";

const App: React.FC = () => {
  return (
    <Router>
      <AppContextProvider>
        <SearchProvider>
          <AppRoutes />
        </SearchProvider>
      </AppContextProvider>
    </Router>
  );
};

export default App;
