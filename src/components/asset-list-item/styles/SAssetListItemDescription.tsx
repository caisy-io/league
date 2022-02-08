import styled, { css } from 'styled-components';
import { CSSProgressiveCaption01 } from '../../../constants/styles/design-tokens/fonts/CSSTypographies';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';

const CSSError = css`
  color: var(--text-06);
`;

export const CSSDisplayNone = css`
  display: none;
`;

const Bronze = css`
  ${CSSProgressiveCaption01};
  color: var(--text-03);
  ${(props) => props.error ? CSSError : ''};
  ${(props) => props.progressValue !== null && props.progressValue !== undefined ? CSSDisplayNone : ''};
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 250px;
  width: 100%;
  white-space: nowrap;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SAssetListItemDescription = styled.p`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

