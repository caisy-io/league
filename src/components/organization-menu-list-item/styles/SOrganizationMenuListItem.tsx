import styled, { css } from 'styled-components';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';

const CSSMedium = css`
  width: 272px;
`;

const Bronze = css`
  width: 288px;
  background-color: #FFFF;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  border-radius: 0.375rem;
  ${(props) => props.itemSize == "medium" || props.itemSize == "small" ? CSSMedium : ''};
  >svg{
    color: #B4C9D7;
    height: 16px;
    width: 16px;
  }
  &: hover {
    background-color: var(--hover-ui-01);
  }
  &: active {
    background-color: #F3F7F9;
  }
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

