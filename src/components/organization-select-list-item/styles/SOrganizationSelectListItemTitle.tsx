import styled, { css } from 'styled-components';
import { CSSProgressiveBody02Semibold, CSSProgressiveHeading01 } from '../../../constants/styles/design-tokens/fonts/CSSTypographies';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';

const Bronze = css`
    ${CSSProgressiveHeading01};
    color: var(--text-01);
    overflow: hidden;
    text-overflow: ellipsis;
<<<<<<< HEAD
=======
    white-space: nowrap;
    width: 100%;
>>>>>>> origin/dev
    ${(props) => props.itemSize !== "large" ? CSSProgressiveBody02Semibold : ''};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SOrganizationSelectListItemTitle = styled.p`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

