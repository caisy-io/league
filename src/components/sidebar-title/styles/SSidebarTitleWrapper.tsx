import styled, { css } from 'styled-components';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';
import { ISidebarTitleProps } from '../SidebarTitle';

const CSSWidth85 = css`
  max-width: 90%; 
`;


const Bronze = css<ISidebarTitleProps>`
  display: flex;
  align-items: center;
  max-width: 95%; 
  gap: 0.5rem;
  svg{
    min-width: 16px;
    min-height: 16px;
    max-width: 16px;
    max-height: 16px;
  }
  svg path {
    strokeWidth: 1.2px;
  }
  ${(props) => props.icon && props.toggle || props.toggle ? CSSWidth85 : ''};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSidebarTitleWrapper = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

