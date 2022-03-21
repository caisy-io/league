import styled, { css } from "styled-components";
import { CSSProgressiveCaption01, CSSProgressiveCaption02Medium } from "../../../constants/styles";
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from "../../../constants/styles";

const Bronze = css`
  color: var(--text-04);
  ${({ itemSize }) => (itemSize === "large" ? CSSProgressiveCaption01 : CSSProgressiveCaption02Medium)};
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 250px;
  white-space: nowrap;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SOrganizationSelectListItemLabel = styled.p`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
