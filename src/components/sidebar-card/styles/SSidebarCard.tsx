import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';
import { ISidebarCardProps } from '../SidebarCard';

const CSSHover = css`
  background-color: var(--hover-ui-02); 
  > * {
    opacity: 1;
  }
`;

const CSSDrag = css`
  background-color: var(--hover-ui-02); 
  box-shadow: 0px 12px 20px rgba(78, 114, 144, 0.08);
`;

const Bronze = css<ISidebarCardProps>`
  border-radius: 6px;
  background-color: var(--ui-02);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0 12px 16px;
  ${(props) => props.hover ? CSSHover : ''};
  :hover{
    ${CSSHover}
  }
  ${(props) => props.drag ? CSSDrag : ''};
  svg{
    margin-right: 12px;
    width: 20px;
    height: 20px;
    color: var(--text-04)
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSidebarCard = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

