import styled from "styled-components";

export const SLanguageFormatDropdownArrowWrapper = styled.div`
  ${(props) => (props.opened == true ? "color: var(--active-icon-03)}" : "color: var(--icon-03)}")};
`;
