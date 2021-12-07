import styled, { css } from 'styled-components';
import { CSSProgressiveCaption01 } from '../../../constants/styles/fonts';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';

const Bronze = css`
  ${CSSProgressiveCaption01};
  color: var(--text-04);
  ${(props) => props.itemSize !== "large" ? "display: none;" : ''};
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

export const SOrganizationSelectListItemLabel = styled.p`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

