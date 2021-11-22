import styled, { css } from 'styled-components';
import { CSSProgressiveCaption01 } from '../../../constants/styles/fonts';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';
import { CSSDisplayNone } from './SAssetListItemIconWrapper';

const CSSError = css`
    color: var(--text-06);
`;

const Bronze = css`
    ${CSSProgressiveCaption01};
    color: var(--text-03);
    ${(props) => props.error ? CSSError : ''};
    ${(props) => props.progressValue !== null && props.progressValue !== undefined ? CSSDisplayNone : ''};
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

