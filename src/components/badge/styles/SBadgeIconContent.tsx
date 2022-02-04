import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const CSSDisplayNone = css`
  display: none !important;
`;

const CSSMicro = css`
  font-size: 0.5rem!important;
  line-height: 1!important;
`;

const CSSSmall = css`
  font-size: 0.563rem;
  line-height: 1;
`;

const CSSMedium = css`
  font-size: 0.688rem;
  line-height: 1;
`;

const Bronze = css`
  display: block;
  ${(props) => (props.type == "color" ? CSSDisplayNone : " ")};
  ${(props) => (props.size == "micro" ? CSSMicro : " ")};
  ${(props) => (props.size == "small" ? CSSSmall : " ")};
  ${(props) => (props.size == "medium" ? CSSMedium : " ")};
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
