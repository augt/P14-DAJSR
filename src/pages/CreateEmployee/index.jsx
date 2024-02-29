import { useEffect, useState } from "react";
import {
  StyledFormLayout,
  StyledGlobalLayout,
  StyledLabel,
  StyledAddress,
  StyledSelect,
  StyledSubmitButton,
} from "./index.style.js";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchEmployees,
  createEmployee,
} from "../../redux/employees/employeesSlice";
import Modal from "../../components/Modal/index.jsx";

function CreateEmployee() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [department, setDepartment] = useState("Sales");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [federatedState, setFederatedState] = useState("Alabama");
  const [zipCode, setZipCode] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  function onSubmit() {
    dispatch(
      createEmployee({
        firstName,
        lastName,
        birthDate,
        startDate,
        department,
        street,
        city,
        federatedState,
        zipCode,
      })
    );
  }

  return (
    <StyledGlobalLayout>
      <h1>HRnet</h1>
      <Link to="/employee-list">View Current Employees</Link>
      <h2>Create Employee</h2>
      <StyledFormLayout>
        <StyledLabel htmlFor="firstName">First Name</StyledLabel>
        <input
          type="text"
          name="firstName"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
        <input
          type="text"
          name="lastName"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <StyledLabel htmlFor="birthDate">Date of birth</StyledLabel>
        <input
          type="date"
          name="birthDate"
          onChange={(event) => {
            setBirthDate(event.target.value);
          }}
        />
        <StyledLabel htmlFor="startDate">Start date</StyledLabel>
        <input
          type="date"
          name="startDate"
          onChange={(event) => {
            setStartDate(event.target.value);
          }}
        />

        <StyledAddress>
          <legend>Address</legend>
          <StyledLabel htmlFor="street">Street</StyledLabel>
          <input
            type="text"
            name="street"
            onChange={(event) => {
              setStreet(event.target.value);
            }}
          />
          <StyledLabel htmlFor="city">City</StyledLabel>
          <input
            type="text"
            name="city"
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
          <StyledLabel htmlFor="federatedState">State</StyledLabel>
          <StyledSelect
            name="federatedState"
            onChange={(event) => {
              setFederatedState(event.target.value);
            }}
          >
            {states.map((item) => (
              <option key={item.abbreviation}>{item.name}</option>
            ))}
          </StyledSelect>
          <StyledLabel htmlFor="zipCode">Zip code</StyledLabel>
          <input
            type="text"
            name="zipCode"
            onChange={(event) => {
              setZipCode(event.target.value);
            }}
          />
        </StyledAddress>
        <StyledLabel htmlFor="department">Department</StyledLabel>
        <StyledSelect
          name="department"
          onChange={(event) => {
            setDepartment(event.target.value);
          }}
        >
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </StyledSelect>
        <StyledSubmitButton
          type="submit"
          name="submit"
          value="Save"
          onClick={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setShowModal(true);
          }}
        >
          montrer modale
        </button>
      </StyledFormLayout>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </StyledGlobalLayout>
  );
}
const states = [
  {
    name: "Alabama",
    abbreviation: "AL",
  },
  {
    name: "Alaska",
    abbreviation: "AK",
  },
  {
    name: "American Samoa",
    abbreviation: "AS",
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
  },
  {
    name: "California",
    abbreviation: "CA",
  },
  {
    name: "Colorado",
    abbreviation: "CO",
  },
  {
    name: "Connecticut",
    abbreviation: "CT",
  },
  {
    name: "Delaware",
    abbreviation: "DE",
  },
  {
    name: "District Of Columbia",
    abbreviation: "DC",
  },
  {
    name: "Federated States Of Micronesia",
    abbreviation: "FM",
  },
  {
    name: "Florida",
    abbreviation: "FL",
  },
  {
    name: "Georgia",
    abbreviation: "GA",
  },
  {
    name: "Guam",
    abbreviation: "GU",
  },
  {
    name: "Hawaii",
    abbreviation: "HI",
  },
  {
    name: "Idaho",
    abbreviation: "ID",
  },
  {
    name: "Illinois",
    abbreviation: "IL",
  },
  {
    name: "Indiana",
    abbreviation: "IN",
  },
  {
    name: "Iowa",
    abbreviation: "IA",
  },
  {
    name: "Kansas",
    abbreviation: "KS",
  },
  {
    name: "Kentucky",
    abbreviation: "KY",
  },
  {
    name: "Louisiana",
    abbreviation: "LA",
  },
  {
    name: "Maine",
    abbreviation: "ME",
  },
  {
    name: "Marshall Islands",
    abbreviation: "MH",
  },
  {
    name: "Maryland",
    abbreviation: "MD",
  },
  {
    name: "Massachusetts",
    abbreviation: "MA",
  },
  {
    name: "Michigan",
    abbreviation: "MI",
  },
  {
    name: "Minnesota",
    abbreviation: "MN",
  },
  {
    name: "Mississippi",
    abbreviation: "MS",
  },
  {
    name: "Missouri",
    abbreviation: "MO",
  },
  {
    name: "Montana",
    abbreviation: "MT",
  },
  {
    name: "Nebraska",
    abbreviation: "NE",
  },
  {
    name: "Nevada",
    abbreviation: "NV",
  },
  {
    name: "New Hampshire",
    abbreviation: "NH",
  },
  {
    name: "New Jersey",
    abbreviation: "NJ",
  },
  {
    name: "New Mexico",
    abbreviation: "NM",
  },
  {
    name: "New York",
    abbreviation: "NY",
  },
  {
    name: "North Carolina",
    abbreviation: "NC",
  },
  {
    name: "North Dakota",
    abbreviation: "ND",
  },
  {
    name: "Northern Mariana Islands",
    abbreviation: "MP",
  },
  {
    name: "Ohio",
    abbreviation: "OH",
  },
  {
    name: "Oklahoma",
    abbreviation: "OK",
  },
  {
    name: "Oregon",
    abbreviation: "OR",
  },
  {
    name: "Palau",
    abbreviation: "PW",
  },
  {
    name: "Pennsylvania",
    abbreviation: "PA",
  },
  {
    name: "Puerto Rico",
    abbreviation: "PR",
  },
  {
    name: "Rhode Island",
    abbreviation: "RI",
  },
  {
    name: "South Carolina",
    abbreviation: "SC",
  },
  {
    name: "South Dakota",
    abbreviation: "SD",
  },
  {
    name: "Tennessee",
    abbreviation: "TN",
  },
  {
    name: "Texas",
    abbreviation: "TX",
  },
  {
    name: "Utah",
    abbreviation: "UT",
  },
  {
    name: "Vermont",
    abbreviation: "VT",
  },
  {
    name: "Virgin Islands",
    abbreviation: "VI",
  },
  {
    name: "Virginia",
    abbreviation: "VA",
  },
  {
    name: "Washington",
    abbreviation: "WA",
  },
  {
    name: "West Virginia",
    abbreviation: "WV",
  },
  {
    name: "Wisconsin",
    abbreviation: "WI",
  },
  {
    name: "Wyoming",
    abbreviation: "WY",
  },
];

export default CreateEmployee;
