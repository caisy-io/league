import styled from "styled-components";
import SDatePickerCard from "../../datepicker-card/styles/SDatePickerCard";
import SDatePickerTimePickerWrapper from "./SDatePickerTimePickerWrapper";

const SDatePickerTimeSelect = styled.div`
  display: flex;
  margin: 16px 0;
  position: relative;
  z-index: 3;
  width: 100%;
  ${SDatePickerTimePickerWrapper}{
    :first-child{
      margin-right: 8px;
      flex: 1 1 auto;
    }
  }
`;

export default SDatePickerTimeSelect;
