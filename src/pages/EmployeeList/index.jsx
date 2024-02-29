import { useEffect } from "react";
import DataTable from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees } from "../../redux/employees/employeesSlice";
import { Link } from "react-router-dom";
import { StyledEmployeeList } from "./index.style";

function EmployeeList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);
  const employees = useSelector((state) => state.employees);

  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: "Date of Birth",
      selector: (row) => row.birthDate,
      sortable: true,
    },
    {
      name: "Street",
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.federatedState,
      sortable: true,
    },
    {
      name: "Zip Code",
      selector: (row) => row.zipCode,
      sortable: true,
    },
  ];

  return (
    <StyledEmployeeList>
      <h1>Current Employees</h1>
      <DataTable columns={columns} data={employees} />
      <Link to="/">Home</Link>
    </StyledEmployeeList>
  );
}

export default EmployeeList;
