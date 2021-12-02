import styled, { css } from 'styled-components';
import { CSSProgressiveHighlight } from '../../../constants/styles/design-tokens/fonts/CSSTypographies';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';
import { ISidebarTitleProps } from '../SidebarTitle';

const CSSWidth85 = css`
  max-width: 85%; 
`;

const CSSWidth95 = css`
  max-width: 95%; 
`;

const Bronze = css<ISidebarTitleProps>`
  ${CSSProgressiveHighlight};
  color: var(--text-04);
  text-transform: uppercase;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  ${(props) => props.toggle || props.icon ? CSSWidth95 : ''};
  ${(props) => props.icon && props.toggle ? CSSWidth85 : ''};
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

