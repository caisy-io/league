import styled, { css } from 'styled-components';
import { CSSProgressiveCaption01Medium } from '../../../constants/styles/design-tokens/fonts/CSSTypographies';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const Bronze = css`
  ${CSSProgressiveCaption01Medium};
  color: var(--text-01);
  color: ${(props) => props.activated ? 'var(--active-text-01)' : ''};
  transition: color 0.2s ease-in;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SAssetImageLabel = styled.p`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;