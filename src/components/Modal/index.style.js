import styled from "styled-components";

export const StyledModalBackground = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.7;
`;

export const StyledModalContainer = styled.div`
  position: relative;
  background-color: white;
  width: fit-content;
  padding: 10px;
  left: 50px;
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: -5px;
  right: -5px;
  padding: 10px;
  border-radius: 25px;
  background-color: black;
  color: white;
  border-color: black;
`;
