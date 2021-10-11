import styled from "styled-components";
import SDatePickerCard from "../../datepicker-card/styles/SDatePickerCard";

const SDatePickerTimeSelect = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 16px 0;
  position: relative;
  z-index: 3;

  gap: 16px;

  ${SDatePickerCard} {
    padding: 10px 16px;
    margin: 0;
  }
`;

export default SDatePickerTimeSelect;
