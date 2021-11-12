import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';
import { ISearchBarOperatorBadgeSelectProps } from '../SearchBarOperatorBadgeSelect';
import { ProgressiveHighLight } from '../../../constants/styles/fonts';

const CSSHover = css`
  background-color: var(--hover-ui-03); 
  color: var(--hover-text-04);
  cursor: pointer;
`;

const CSSActivated = css`
  background-color: var(--ui-supportive-03); 
  color: #FFFF;
`;

const Bronze = css<ISearchBarOperatorBadgeSelectProps>`
  ${ProgressiveHighLight};
  color: var(--text-04);
  text-transform: uppercase;
  max-width: min-content;
  height: 24px;
  box-sizing: border-box;
  background-color: var(--ui-03);
  border-radius: 68px;
  padding: 4px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease, color 0.3s ease;
  ${(props) => props.hover ? CSSHover : ''};
  :hover{
    ${CSSHover}
  }
  &, &:hover{
    ${(props) => props.activated ? CSSActivated : ''};
  }
  :active{
    ${CSSActivated}
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

