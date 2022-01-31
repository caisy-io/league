import styled from "styled-components";

interface ISDatePickerInputDateText {
}

const SDatePickerInputDateText = styled.div<ISDatePickerInputDateText>`
  p + p {
    margin-top: 4px;
  }
`;

export default SDatePickerInputDateText;
