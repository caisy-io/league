import styled, { css } from 'styled-components';
import { CSSProgressiveCaption01Semibold, CSSProgressiveCaption02Medium } from '../../../constants/styles/fonts';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';

const Bronze = css`
  ${CSSProgressiveCaption01Semibold};
  color: var(--text-04);
  ${(props) => props.itemSize !== "large" ? CSSProgressiveCaption02Medium : ''};
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 250px;
  margin-bottom: 0.13rem;
  white-space: nowrap;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SOrganizationMenuListItemLabel = styled.p`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

