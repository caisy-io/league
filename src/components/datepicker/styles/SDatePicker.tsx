import styled from "styled-components";

const SDatePicker = styled.div`
  width: max-content;
  max-width: 100%;
  
  > div:first-child:not(:last-child) {
    margin-bottom: 16px;
  }
  
  height: fit-content;
`;

export default SDatePicker;
