import styled from "styled-components";

const SDatePickerTimeIndicator = styled.div`
  position: relative;
  font-family: Inter;
  font-size: 13px;
  font-weight: 500;
  color: #4e5e78;

  cursor: pointer;

  margin-right: 1px;
  & + & {
    margin-left: 1px;
    margin-right: 0;
  }
  :first-child{
    margin-left: 4px;
  }
`;

export default SDatePickerTimeIndicator;
