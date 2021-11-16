import styled, { css } from 'styled-components';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';
import { ISidebarTitleProps } from '../SidebarTitle';

const CSSWidth80 = css`
  max-width: 80%; 
`;

const Bronze = css<ISidebarTitleProps>`
  display: flex;
  width: 100%;
  max-width: 90%;
  ${(props) => props.toggleComponent ? CSSWidth80 : ''};
  svg{
    width: 16px;
    height: 16px;
    margin-right: 0.5rem;
  }
  svg path {
    stroke-width: 1.2px;
  }
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

