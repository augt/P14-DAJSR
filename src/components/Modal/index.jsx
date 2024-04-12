import {
  StyledCloseButton,
  StyledModalBackground,
  StyledModalContainer,
} from "./index.style";
import PropTypes from "prop-types";

Modal.propTypes = {
  onClose: PropTypes.func,
  errorMessages: PropTypes.array,
};

function Modal({ onClose, errorMessages }) {
  return (
    <StyledModalBackground>
      <StyledModalContainer>
        <div>Employee Created!</div>
        {errorMessages.map((message) => {
          <div>{message}</div>;
        })}
        <StyledCloseButton
          onClick={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          X
        </StyledCloseButton>
      </StyledModalContainer>
    </StyledModalBackground>
  );
}

export default Modal;
