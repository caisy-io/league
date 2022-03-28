import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

export const CSSTypeGrid = css`
  padding: 1rem;
  width: 13.75rem;
  height: 9.5rem;
`;

export const CSSTypeListItem = css`
  padding: 1rem;
  width: 5.75rem;
  height: 5.75rem;
`;

const Bronze = css`
  background-color: var(--ui-03);
  padding: 3.438rem 3.188rem;
  height: 16.188rem;
  width: 24rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  ${(props) => props.type == "grid" ? CSSTypeGrid : ""};
  ${(props) => props.type == "list-item" ? CSSTypeListItem : ""};
  margin-bottom: 1rem;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SComponentImage = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

