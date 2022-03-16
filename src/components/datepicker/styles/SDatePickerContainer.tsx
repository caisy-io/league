import styled, { css } from "styled-components";

const CSSWithoutMonthsNavigation = css`
  padding: 20px 16px 8px;
`;

const SDatePickerContainer = styled.div<{ withoutMonthsNavigation: boolean }>`
  position: relative;
  background-color: var(--ui-01);
  padding: 14px 16px 16px;

  input {
    display: none;
  }

  ${({ withoutMonthsNavigation }) => withoutMonthsNavigation && CSSWithoutMonthsNavigation};
`;

export default SDatePickerContainer;
