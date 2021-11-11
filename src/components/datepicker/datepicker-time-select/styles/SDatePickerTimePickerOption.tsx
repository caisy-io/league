import styled from "styled-components";

const SDatePickerTimePickerOption = styled.h3`
  display: flex;
  align-items: center;

  &:hover {
    color: var(--interactional-primary-01);
    transform: scale(1.1);
  }

  & + & {
    margin-top: 8px;
  }
`;

export default SDatePickerTimePickerOption;
