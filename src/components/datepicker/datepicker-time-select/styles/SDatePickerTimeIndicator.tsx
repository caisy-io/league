import styled from "styled-components";

const SDatePickerTimeIndicator = styled.div`
  position: relative;
  font-family: Inter;
  font-size: 13px;
  font-weight: 500;
  color: #4e5e78;

  cursor: pointer;

  margin-right: 8px;
  & + & {
    margin-left: 8px;
    margin-right: 0;
  }
`;

export default SDatePickerTimeIndicator;
