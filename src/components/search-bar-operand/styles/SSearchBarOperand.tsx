import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';
import { ISearchBarOperandType, ISearchBarOperandProps } from '../SearchBarOperand';

const CSSNeutral = css`
  background-color: transparent;
  border: 2px solid var(--hover-interactional-secondary-03);
`;

const CSSHover = css`
  background-color: var(--hover-ui-01); 
  border: 2px solid var(--neutral-300);
`;

const CSSActivated = css`
  background-color: var(--hover-ui-01); 
  border: 2px solid var(--interactional-primary-01);
  color: var(--active-text-04);
`;

const getTypeStyling = (type: ISearchBarOperandType) => {
  switch (type) {
    case "default":
      return CSSNeutral;
    case "hover":
      return CSSHover;
    case "active":
      return CSSActivated;
    default:
      return CSSNeutral;
  }
};

const Bronze = css<ISearchBarOperandProps>`
  max-width: min-content;
  color: var(--active-ui-01);
  flex-grow: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  position: relative;
  z-index: 0;
  transition: all 0.3s ease;
  gap: 9px;
  font-size: 16px;
  font-weight: 700;
  padding: 4px;
  box-sizing: border-box;
  ${(props) => getTypeStyling(props.type)};
  > * {
    z-index: 10;
    position: relative;
  }
  span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSearchBarOperand = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

