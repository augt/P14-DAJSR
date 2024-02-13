import { useState } from "react";
import CreateEmployeeCSS from "./CreateEmployee.module.css";
import { Link } from "react-router-dom";
function CreateEmployee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [department, setDepartment] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  return (
    <main className={CreateEmployeeCSS.global_layout}>
      <h1>HRnet</h1>
      <Link to="/employee-list">View Current Employees</Link>
      <h2>Create Employee</h2>
      <form className={CreateEmployeeCSS.form_layout}>
        <label htmlFor="firstName" className={CreateEmployeeCSS.label_margins}>
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <label htmlFor="lastName" className={CreateEmployeeCSS.label_margins}>
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <label htmlFor="birthDate" className={CreateEmployeeCSS.label_margins}>
          Date of birth
        </label>
        <input
          type="date"
          name="birthDate"
          onChange={(event) => {
            setBirthDate(event.target.value);
          }}
        />
        <label htmlFor="startDate" className={CreateEmployeeCSS.label_margins}>
          Start date
        </label>
        <input
          type="date"
          name="startDate"
          onChange={(event) => {
            setStartDate(event.target.value);
          }}
        />

        <fieldset className={CreateEmployeeCSS.address}>
          <legend>Address</legend>
          <label htmlFor="street" className={CreateEmployeeCSS.label_margins}>
            Street
          </label>
          <input
            type="text"
            name="street"
            onChange={(event) => {
              setStreet(event.target.value);
            }}
          />
          <label htmlFor="city" className={CreateEmployeeCSS.label_margins}>
            City
          </label>
          <input
            type="text"
            name="city"
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
          <label htmlFor="state" className={CreateEmployeeCSS.label_margins}>
            State
          </label>
          <select
            name="state"
            onChange={(event) => {
              setState(event.target.value);
            }}
            className={CreateEmployeeCSS.select}
          >
            {states.map((item) => (
              <option key={item.abbreviation}>{item.name}</option>
            ))}
          </select>
          <label htmlFor="zipCode" className={CreateEmployeeCSS.label_margins}>
            Zip code
          </label>
          <input
            type="text"
            name="zipCode"
            onChange={(event) => {
              setZipCode(event.target.value);
            }}
          />
        </fieldset>
        <label htmlFor="department" className={CreateEmployeeCSS.label_margins}>
          Department
        </label>
        <select name="department" className={CreateEmployeeCSS.select}>
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
        <input
          type="submit"
          name="submit"
          value="Save"
          className="edit-button"
          onClick={(e) => {
            e.preventDefault();
          }}
        />
      </form>
    </main>
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
