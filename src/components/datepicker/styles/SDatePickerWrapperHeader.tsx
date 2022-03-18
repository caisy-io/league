import styled, { css } from "styled-components";

const CSSWithoutMonthsNavigation = css`
  margin-bottom: 8px;
  margin-left: 4px;
`;

export const SDatePickerWrapperHeader = styled.div<{ withoutMonthsNavigation: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin-bottom: 4px;
  z-index: 1;
  ${({ withoutMonthsNavigation }) => withoutMonthsNavigation && CSSWithoutMonthsNavigation};
`;
