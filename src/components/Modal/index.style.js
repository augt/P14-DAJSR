import styled from "styled-components";

export const StyledModalBackground = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const StyledModalContainer = styled.div`
  position: relative;
  background-color: white;
  width: fit-content;
  padding: 20px 30px;
  border-radius: 15px;
  margin: auto;
  top: 200px;
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: -15px;
  right: -15px;
  padding: 10px 12px;
  border-radius: 25px;
  background-color: black;
  color: white;
  border-color: black;

  &:hover {
    cursor: pointer;
  }
`;
