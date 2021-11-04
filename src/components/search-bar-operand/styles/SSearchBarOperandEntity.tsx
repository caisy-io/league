import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';
import { ISearchBarOperandType, ISearchBarOperandProps } from '../SearchBarOperand';

const CSSNeutral = css`
  background-color: var(--active-ui-01);
`;

const CSSActivated = css`
  background-color: var(--interactional-primary-01); 
  color: var(--text-02);
`;

const getTypeStyling = (type: ISearchBarOperandType) => {
  console.log("entity type " + type)
  switch (type) {
    case "default":
      return CSSNeutral;
    case "hover":
      return CSSNeutral;
    case "activated":
      return CSSActivated;
    default:
      return CSSNeutral;
  }
};

const Bronze = css<ISearchBarOperandProps>`
  height: 100%;
  color: var(--text-02);
  flex-grow: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  position: relative;
  z-index: 0;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  background-color: var(--active-ui-01);
  gap: 9px;
  font-size: 11px;
  padding: 8px;
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
  }`;

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

