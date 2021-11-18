import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';
import { CSSProgressiveHighLight } from '../../../constants/styles/fonts';
import { ISidebarTitleProps } from '../SidebarTitle';

const CSSWidth90 = css`
  max-width: 90%; 
`;

const Bronze = css<ISidebarTitleProps>`
  ${CSSProgressiveHighLight};
  color: var(--text-04);
  text-transform: uppercase;
  overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  display: flex;
  align-items: center;
  ${(props) => props.icon || props.toggleComponent ? CSSWidth90 : ''};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSidebarTitleLabel = styled.p`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

