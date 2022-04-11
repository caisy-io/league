import styled, { css } from "styled-components";
import { CSSProgressiveHeading01 } from "../../../constants/styles/fonts";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISDropdownCardHeader {
  styleOverwrite?: any;
}
const Bronze = css`
display: flex;
justify-content: space-between;
align-items: center;
height: 24px;
border-bottom: 1px solid var(--ui-03);
padding: 16px 20px;
color: var(--text-04);
Progressive/$heading-02
${CSSProgressiveHeading01}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SDropdownCardHeader = styled.div<ISDropdownCardHeader>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
  ${({ styleOverwrite }) => styleOverwrite ?? ""};
`;
