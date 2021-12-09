import styled, { css } from 'styled-components';
import { CSSProgressiveCaption01Semibold } from '../../../constants/styles/design-tokens/fonts/CSSTypographies';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const Bronze = css`
  height: 72px;
  width: 100%;
  display: flex;
  justify-conten: center;
  align-items: center;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.04);
  z-index: 10;
  `;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SBottomButtonWrapper = styled.p`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

