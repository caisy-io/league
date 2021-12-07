import styled, { css } from 'styled-components';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';

const CSSMedium = css`
  width: 256px;
  height: 67px;
`;

const Bronze = css`
  width: 272px;
  height: 79px;
  background-color: #FFFF;
  border-bottom: 1px solid var(--ui-03);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  gap: 0.75rem;
  ${(props) => props.itemSize == "medium" ? CSSMedium : ''};
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

export const SOrganizationSelectListItem = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

