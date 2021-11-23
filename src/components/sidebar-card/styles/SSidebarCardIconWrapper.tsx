import styled, { css } from 'styled-components';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';
import { ISidebarCardProps } from '../SidebarCard';

const CSSHover = css`
  opacity: 1; 
`;

const CSSDrag = css`
  > * {
  &:last-child {
     color: var(--text-01);
    }
  }
`;

const Bronze = css<ISidebarCardProps>`
  opacity: 0;
  display: flex;
  ${(props) => props.hover || props.drag ? CSSHover : ''};
  ${(props) => props.drag ? CSSDrag : ''};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSidebarcardIconWrapper = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

