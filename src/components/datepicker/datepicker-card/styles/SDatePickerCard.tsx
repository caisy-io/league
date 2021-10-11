import styled from "styled-components";

interface ISDatePickerCard {
  flexDirection: "column" | "row" | "column-reverse" | "row-reverse";
}

const SDatePickerCard = styled.div<ISDatePickerCard>`
  position: relative;
  padding: 16px;
  border-radius: 12px;
  border: solid 1px #e8edf5;
  background-color: #ffffff;

  /* margin-top: 8px; */

  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.flexDirection};

  input {
    display: none;
  }
`;

export default SDatePickerCard;
