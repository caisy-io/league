import styled, { css } from 'styled-components';
import { CSSProgressiveCaption01Medium, CSSProgressiveCaption01Semibold } from '../../../constants/styles/design-tokens/fonts/CSSTypographies';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const Bronze = css`
  ${CSSProgressiveCaption01Semibold};
  color: var(--text-01);
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  white-space: nowrap;
  margin-bottom: 0.25rem;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SComponentCardTitle = styled.p`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

