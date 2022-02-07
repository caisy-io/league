import styled, { css } from "styled-components";
import { CSSProgressiveBody02Medium } from "../../../constants/styles/design-tokens/fonts/CSSTypographies";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  ${CSSProgressiveBody02Medium}
  width: 100%;
  line-height: 1rem;
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  >*{
    flex-shrink: 0;
  }
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
