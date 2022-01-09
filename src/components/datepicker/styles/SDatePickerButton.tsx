import styled from "styled-components";
import {SDatePickerMonthAndYear} from "./SDatePickerMonthAndYear"

export const SDatePickerButton = styled.button`
  display: flex;
  font-family: Inter;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-01);
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  
  svg {
    width: 16px;
    height: 16px;
    color: var(--icon-03);
  }
  
  ${SDatePickerMonthAndYear} & {
    :first-child {
      margin-right: 8px;
    }
  }
`;