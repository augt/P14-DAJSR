import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";
import CreateEmployee from "./pages/CreateEmployee";

import Error from "./pages/Error";
import EmployeeList from "./pages/EmployeeList";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/employee-list" element={<EmployeeList />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
