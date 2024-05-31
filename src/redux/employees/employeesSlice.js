import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    createEmployee: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { createEmployee } = employeesSlice.actions;

export const selectEmployees = (state) => state.employees;

export default employeesSlice.reducer;
