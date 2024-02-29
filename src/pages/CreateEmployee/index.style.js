import styled from "styled-components";

export const StyledGlobalLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledFormLayout = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  margin-top: 1rem;
  margin-bottom: 10px;
`;

export const StyledAddress = styled.fieldset`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const StyledSelect = styled.select`
  border: 1px solid #c5c5c5;
  background: #f6f6f6;
  width: 14em;
  padding: 0.4em 1em;
`;

export const StyledSubmitButton = styled.input`
  margin-top: 1rem;
  padding: 0 5px;
  width: fit-content;
  align-self: center;
`;
