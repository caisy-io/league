import styled, { css } from "styled-components";
import { CSSProgressiveBody02Medium } from "../../../constants/styles/design-tokens/fonts/CSSTypographies";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  ${CSSProgressiveBody02Medium}
  display: flex;
  gap: 0.75rem;
`;

const Silver = css`
`;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SLineSelectItem = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
