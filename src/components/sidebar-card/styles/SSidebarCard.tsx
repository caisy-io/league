import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const CSSHover = css`
  background-color: var(--hover-ui-02); 
`;

const CSSDrag = css`
  color: var(--active-text-04);
  border: 1px solid var(--interactional-primary-01);
  background-color: var(--hover-ui-01); 
`;

const Bronze = css`
  background-color: var(--ui-02);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  ${(props) => props.hover ? CSSHover : ''};
  :hover{
    ${CSSHover}
  }
  ${(props) => props.drag ? CSSDrag : ''};
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

