import styled from "styled-components";

interface ISDatePickerInput {
  active: boolean;
}

const SDatePickerInput = styled.div<ISDatePickerInput>`
  font-family: Inter;
  font-size: 14px;
  display: flex;

  cursor: pointer;
  width: 100%;
  height: 100%;

  color: ${(props) => (props.active ? "var(--text-priority-neutral-2)" : "var(--text-priority-neutral-4)")};
`;

export default SDatePickerInput;
