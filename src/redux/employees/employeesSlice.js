import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    fetchEmployees(state, action) {
      const employees = JSON.parse(localStorage.getItem("employees"));

      if (employees !== null) {
        return employees;
      }
    },
    createEmployee: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("employees", JSON.stringify(state));
    },
  },
});

export const { fetchEmployees, createEmployee } = employeesSlice.actions;

export const selectEmployees = (state) => state.employees;

export default employeesSlice.reducer;
