import styled from "styled-components";

interface ISDatePickerInputDate {
  leftMarginAuto?: boolean;
  rightMarginAuto?: boolean;
}

const SDatePickerInputDate = styled.div<ISDatePickerInputDate>`
  margin-left: ${(props) => (props.leftMarginAuto ? "auto" : "0")};
  margin-right: ${(props) => (props.rightMarginAuto ? "auto" : "0")};
  user-select: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SDatePickerInputDate;
