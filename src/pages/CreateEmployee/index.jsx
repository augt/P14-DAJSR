import { useState } from "react";
import {
  StyledFormLayout,
  StyledGlobalLayout,
  StyledLabel,
  StyledAddress,
  StyledSubmitButton,
} from "./index.style.js";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createEmployee } from "../../redux/employees/employeesSlice";
import { Modal } from "@augt/p14-modal";
import CustomSelect from "../../components/CustomSelect/index.jsx";

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
  const [errorMessage, setErrorMessage] = useState("");

  function employeeValidation(employee) {
    const isName =
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

    if (isName.test(employee.firstName) === false) {
      setErrorMessage("First name is not valid.");
      return false;
    }
    if (isName.test(employee.lastName) === false) {
      setErrorMessage("Last name is not valid.");
      return false;
    }
    if (
      !employee.birthDate ||
      !employee.startDate ||
      !employee.street ||
      !employee.city ||
      !employee.zipCode
    ) {
      setErrorMessage("Please fill in all the form items.");
      return false;
    }
  }

  function onSubmit(newEmployee) {
    if (employeeValidation(newEmployee) !== false) {
      setErrorMessage("");
      dispatch(createEmployee(newEmployee));
    }
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
          id="firstName"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <StyledLabel htmlFor="birthDate">Date of birth</StyledLabel>
        <input
          type="date"
          name="birthDate"
          id="birthDate"
          onChange={(event) => {
            setBirthDate(event.target.value);
          }}
        />
        <StyledLabel htmlFor="startDate">Start date</StyledLabel>
        <input
          type="date"
          name="startDate"
          id="startDate"
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
            id="street"
            onChange={(event) => {
              setStreet(event.target.value);
            }}
          />
          <StyledLabel htmlFor="city">City</StyledLabel>
          <input
            type="text"
            name="city"
            id="city"
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
          <CustomSelect
            inputName="federatedState"
            label="State"
            options={states}
            handleChange={setFederatedState}
          />
          <StyledLabel htmlFor="zipCode">Zip code</StyledLabel>
          <input
            type="text"
            name="zipCode"
            id="zipCode"
            onChange={(event) => {
              setZipCode(event.target.value);
            }}
          />
        </StyledAddress>
        <CustomSelect
          inputName="department"
          label="Department"
          options={departments}
          handleChange={setDepartment}
        />
        <StyledSubmitButton
          type="submit"
          name="submit"
          id="submit"
          value="Save"
          onClick={(e) => {
            e.preventDefault();
            onSubmit({
              firstName,
              lastName,
              birthDate,
              startDate,
              department,
              street,
              city,
              federatedState,
              zipCode,
            });
            setShowModal(true);
          }}
        />
      </StyledFormLayout>
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          errorMessage={errorMessage}
          confirmationMessage="Employee created !"
        />
      )}
    </StyledGlobalLayout>
  );
}

export default CreateEmployee;

const states = [
  {
    name: "Alabama",
    valueToSave: "AL",
  },
  {
    name: "Alaska",
    valueToSave: "AK",
  },
  {
    name: "American Samoa",
    valueToSave: "AS",
  },
  {
    name: "Arizona",
    valueToSave: "AZ",
  },
  {
    name: "Arkansas",
    valueToSave: "AR",
  },
  {
    name: "California",
    valueToSave: "CA",
  },
  {
    name: "Colorado",
    valueToSave: "CO",
  },
  {
    name: "Connecticut",
    valueToSave: "CT",
  },
  {
    name: "Delaware",
    valueToSave: "DE",
  },
  {
    name: "District Of Columbia",
    valueToSave: "DC",
  },
  {
    name: "Federated States Of Micronesia",
    valueToSave: "FM",
  },
  {
    name: "Florida",
    valueToSave: "FL",
  },
  {
    name: "Georgia",
    valueToSave: "GA",
  },
  {
    name: "Guam",
    valueToSave: "GU",
  },
  {
    name: "Hawaii",
    valueToSave: "HI",
  },
  {
    name: "Idaho",
    valueToSave: "ID",
  },
  {
    name: "Illinois",
    valueToSave: "IL",
  },
  {
    name: "Indiana",
    valueToSave: "IN",
  },
  {
    name: "Iowa",
    valueToSave: "IA",
  },
  {
    name: "Kansas",
    valueToSave: "KS",
  },
  {
    name: "Kentucky",
    valueToSave: "KY",
  },
  {
    name: "Louisiana",
    valueToSave: "LA",
  },
  {
    name: "Maine",
    valueToSave: "ME",
  },
  {
    name: "Marshall Islands",
    valueToSave: "MH",
  },
  {
    name: "Maryland",
    valueToSave: "MD",
  },
  {
    name: "Massachusetts",
    valueToSave: "MA",
  },
  {
    name: "Michigan",
    valueToSave: "MI",
  },
  {
    name: "Minnesota",
    valueToSave: "MN",
  },
  {
    name: "Mississippi",
    valueToSave: "MS",
  },
  {
    name: "Missouri",
    valueToSave: "MO",
  },
  {
    name: "Montana",
    valueToSave: "MT",
  },
  {
    name: "Nebraska",
    valueToSave: "NE",
  },
  {
    name: "Nevada",
    valueToSave: "NV",
  },
  {
    name: "New Hampshire",
    valueToSave: "NH",
  },
  {
    name: "New Jersey",
    valueToSave: "NJ",
  },
  {
    name: "New Mexico",
    valueToSave: "NM",
  },
  {
    name: "New York",
    valueToSave: "NY",
  },
  {
    name: "North Carolina",
    valueToSave: "NC",
  },
  {
    name: "North Dakota",
    valueToSave: "ND",
  },
  {
    name: "Northern Mariana Islands",
    valueToSave: "MP",
  },
  {
    name: "Ohio",
    valueToSave: "OH",
  },
  {
    name: "Oklahoma",
    valueToSave: "OK",
  },
  {
    name: "Oregon",
    valueToSave: "OR",
  },
  {
    name: "Palau",
    valueToSave: "PW",
  },
  {
    name: "Pennsylvania",
    valueToSave: "PA",
  },
  {
    name: "Puerto Rico",
    valueToSave: "PR",
  },
  {
    name: "Rhode Island",
    valueToSave: "RI",
  },
  {
    name: "South Carolina",
    valueToSave: "SC",
  },
  {
    name: "South Dakota",
    valueToSave: "SD",
  },
  {
    name: "Tennessee",
    valueToSave: "TN",
  },
  {
    name: "Texas",
    valueToSave: "TX",
  },
  {
    name: "Utah",
    valueToSave: "UT",
  },
  {
    name: "Vermont",
    valueToSave: "VT",
  },
  {
    name: "Virgin Islands",
    valueToSave: "VI",
  },
  {
    name: "Virginia",
    valueToSave: "VA",
  },
  {
    name: "Washington",
    valueToSave: "WA",
  },
  {
    name: "West Virginia",
    valueToSave: "WV",
  },
  {
    name: "Wisconsin",
    valueToSave: "WI",
  },
  {
    name: "Wyoming",
    valueToSave: "WY",
  },
];

const departments = [
  {
    name: "Marketing",
    valueToSave: "Marketing",
  },
  {
    name: "Engineering",
    valueToSave: "Engineering",
  },
  {
    name: "Human Resources",
    valueToSave: "Human Resources",
  },
  {
    name: "Legal",
    valueToSave: "Legal",
  },
];
