import { StyledSelect } from "./index.style";
import { StyledLabel } from "../../pages/CreateEmployee/index.style";
import PropTypes from "prop-types";

CustomSelect.propTypes = {
  inputName: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
  handleChange: PropTypes.func,
};

function CustomSelect({ inputName, label, options, handleChange }) {
  function getValueToSave(name) {
    return options.find((option) => option.name === name).valueToSave;
  }

  return (
    <>
      <StyledLabel htmlFor={inputName}>{label}</StyledLabel>
      <StyledSelect
        name={inputName}
        id={inputName}
        onChange={(e) => {
          handleChange(getValueToSave(e.target.value));
        }}
      >
        {options.map((item) => (
          <option key={item.valueToSave}>{item.name}</option>
        ))}
      </StyledSelect>
    </>
  );
}

export default CustomSelect;
