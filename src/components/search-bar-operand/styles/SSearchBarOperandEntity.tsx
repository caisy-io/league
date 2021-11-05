import styled, { css } from 'styled-components';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';
import { ISearchBarOperandProps } from '../SearchBarOperand';

const CSSActive = css`
  background-color: var(--interactional-primary-01); 
  color: var(--text-02);
`;

const Bronze = css<ISearchBarOperandProps>`
  color: var(--text-02);
  height: 100%;
  flex-grow: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  position: relative;
  z-index: 0;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.08em;
  background-color: var(--active-ui-01);
  padding: 0 4px;
  gap: 9px;
  font-size: 8px;
  ${(props) => props.active ? CSSActive : ''};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSearchBarOperandEntity = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

