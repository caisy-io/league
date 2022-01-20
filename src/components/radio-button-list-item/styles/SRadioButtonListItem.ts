import styled, { css } from "styled-components";
import { CSSProgressiveBody03Medium } from "../../../constants/styles/design-tokens/fonts/CSSTypographies";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background-color: var(--ui-01);
  border-bottom: 1px solid var(--ui-03);
  color: var(--text-01);
  cursor: pointer;

  ${CSSProgressiveBody03Medium};
  
  *{
    flex: 0 0 auto;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SRadioButtonListItem = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
