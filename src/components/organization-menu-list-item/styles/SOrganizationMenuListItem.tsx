import styled, { css } from 'styled-components';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';

const CSSMedium = css`
  width: 272px;
  height: 52px;
`;

const Bronze = css`
  width: 100%;
  height: 64px;
  background-color: #FFFF;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  border-radius: 0.375rem;
  cursor: pointer;
  ${(props) => props.listItemStyle == "disabled" ? "cursor: default" : ''};
  ${(props) => props.itemSize == "medium" || props.itemSize == "small" ? CSSMedium : ''};
  &: hover {
    ${(props) => props.listItemStyle != "disabled"  ? "background-color: var(--hover-ui-01-1)" : ''};
  }
  &: active {
    ${(props) => props.listItemStyle != "disabled"  ? "background-color: var(--active-ui-01-1);" : ''};
  }
  ${({ styleOverwrite }) => styleOverwrite ?? ''};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SOrganizationMenuListItem = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

