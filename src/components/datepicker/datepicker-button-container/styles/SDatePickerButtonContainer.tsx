import styled from "styled-components";
import {SButton} from "../../../button/styles/SButton";
import SDatePickerTimeSelect from "../../datepicker-time-select/styles/SDatePickerTimeSelect";

export const SDatePickerButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  position: relative;
  z-index: 1;
  gap: 8px;
  margin-top: 16px;
  
  ${SDatePickerTimeSelect} > & {
    margin-top: 8px;
  }
  
  ${SButton} {
    width: 100%;
  }
`;
