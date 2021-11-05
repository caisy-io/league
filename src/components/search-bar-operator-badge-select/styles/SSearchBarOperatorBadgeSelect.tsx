import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';
import { ISearchBarOperatorBadgeSelectProps } from '../SearchBarOperatorBadgeSelect';

const CSSHover = css`
  background-color: var(--hover-ui-03); 
  color: var(--hover-text-04)
`;

const CSSActive = css`
  background-color: var(--ui-supportive-03); 
  color: #FFFF;
`;

const Bronze = css<ISearchBarOperatorBadgeSelectProps>`
  max-width: min-content;
  height: 24px;
  box-sizing: border-box;
  background-color: var(--ui-03);
  border-radius: 68px;
  color: var(--text-04);
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.06em;
  padding: 4px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.hover ? CSSHover : ''};
  :hover{
    ${CSSHover}
  }
  &, &:active{
    ${(props) => props.active ? CSSActive : ''};
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSearchBarOperatorBadgeSelect = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

