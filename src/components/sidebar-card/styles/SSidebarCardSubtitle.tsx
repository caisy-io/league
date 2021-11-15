import styled, { css } from 'styled-components';
import { CSSProgressiveCaption02Medium } from '../../../constants/styles/fonts';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const Bronze = css`
  ${CSSProgressiveCaption02Medium};
  color: var(--text-04);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 170px;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSidebarCardSubtitle = styled.p`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

