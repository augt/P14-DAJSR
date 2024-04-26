import {
  StyledCloseButton,
  StyledModalBackground,
  StyledModalContainer,
} from "./index.style";
import PropTypes from "prop-types";

Modal.propTypes = {
  onClose: PropTypes.func,
  errorMessage: PropTypes.string,
};

function Modal({ onClose, errorMessage }) {
  return (
    <StyledModalBackground>
      <StyledModalContainer>
        {errorMessage ? (
          <div>{errorMessage}</div>
        ) : (
          <div>Employee Created!</div>
        )}
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
