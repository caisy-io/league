import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const CSSDisplayNone = css`
  display: none !important;
`;

const Bronze = css`
  display: block;
  ${(props) => (props.type == "color" ? CSSDisplayNone : " ")};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SBadgeIconContent = styled.span`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
