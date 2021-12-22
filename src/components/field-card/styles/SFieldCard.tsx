import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const CSSActivated = css`
  outline: 1px solid #008CFF;
`;

const Bronze = css`
  background-color: var(--ui-01);
  border-radius: 0.25rem;
  padding: 0.5rem 0.5rem 0 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 7.25rem;
  box-sizing: border-box;
  outline: 1px solid #F7F9FA;
  transition: outline 0.1s ease-in;
  ${(props) => (props.activated ? CSSActivated : "")}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SFieldCard = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

