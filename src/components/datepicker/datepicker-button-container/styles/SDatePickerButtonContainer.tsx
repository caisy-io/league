import styled from "styled-components";
import { SButton } from "../../../button/styles/SButton";

export const SDatePickerButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  position: relative;
  z-index: 1;
  gap: 8px;
  margin-top: 16px;
  
  ${SButton} {
    width: 100%;
  }
`;
