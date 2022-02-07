import styled, { css } from "styled-components";
import { CSSProgressiveBody02Medium, CSSProgressiveBody03Medium } from "../../../constants/styles/design-tokens/fonts/CSSTypographies";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const CSSMedium = css`
  padding: 14px 16px;
  ${CSSProgressiveBody02Medium}
`;

const CSSSmall = css`
  padding: 12px 16px;
  ${CSSProgressiveBody03Medium}
`;

const Bronze = css`
  background-color: var(--ui-01);
  border-bottom: 1px solid var(--ui-03);
  cursor: pointer;

  display: flex;
  align-items: center;
  color: var(--text-01);

  ${(props) => (props.size === "small" ? CSSSmall : CSSMedium)};
  line-height: unset;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SToggleListItem = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
