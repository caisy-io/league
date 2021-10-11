import styled from "styled-components";

interface ISDatePickerAMPMIndicator {
  active: boolean;
}

const SDatePickerAMPMIndicator = styled.h3<ISDatePickerAMPMIndicator>`
  color: ${(props) => (props.active ? "#0099ff" : "#b0b6c1")};
  cursor: pointer;

  font-family: Inter;
  font-size: 13px;
  font-weight: 500;

  & + & {
    margin-left: 16px;
  }
`;

export default SDatePickerAMPMIndicator;
