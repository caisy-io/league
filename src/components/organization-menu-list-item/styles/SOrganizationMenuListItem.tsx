import styled, { css } from 'styled-components';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';

const CSSMedium = css`
  width: 272px;
  height: 52px;
`;

const Bronze = css`
  width: 288px;
  height: 64px;
  background-color: #FFFF;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  border-radius: 0.375rem;
  ${(props) => props.itemSize == "medium" || props.itemSize == "small" ? CSSMedium : ''};
  &: hover {
    background-color: var(--hover-ui-01);
  }
  &: active {
    background-color: #F3F7F9;
  }
  ${({styleOverwrite}) => styleOverwrite ?? ''};
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

