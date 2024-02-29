import {
  StyledCloseButton,
  StyledModalBackground,
  StyledModalContainer,
} from "./index.style";

function Modal({ onClose }) {
  return (
    <StyledModalBackground>
      <StyledModalContainer>
        <div>Employee Created!</div>

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
