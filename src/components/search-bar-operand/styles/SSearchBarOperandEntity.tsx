import styled, { css } from 'styled-components';
import { ProgressivehighLightMicro } from '../../../constants/styles/fonts';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';
import { ISearchBarOperandProps } from '../SearchBarOperand';

const CSSActivated = css`
  color: var(--text-02);
  background-color: var(--interactional-primary-01); 
`;

const Bronze = css<ISearchBarOperandProps>`
  ${ProgressivehighLightMicro};  
  text-transform: uppercase;
  color: var(--text-02);
  background-color: var(--active-ui-01);
  height: 100%;
  flex-grow: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  position: relative;
  z-index: 0;
  padding: 0 4px;
  gap: 9px;
  ${(props) => props.activated ? CSSActivated : ''};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSearchBarOperandEntity = styled.div<ISearchBarOperandProps>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

