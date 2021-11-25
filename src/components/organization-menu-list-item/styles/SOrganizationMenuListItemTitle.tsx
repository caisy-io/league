import styled, { css } from 'styled-components';
import { CSSProgressiveHeading01 } from '../../../constants/styles/fonts';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';

const CSSError = css`
  color: var(--disabled-text);
`;

const Bronze = css`
    ${CSSProgressiveHeading01};
    color: var(--text-01);
    ${(props) => props.error ? CSSError : ''};
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SOrganizationMenuListItemTitle = styled.p`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

