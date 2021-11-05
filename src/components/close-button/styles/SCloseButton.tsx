import styled, { css } from 'styled-components';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';
import { ICloseButtonType, ICloseButtonProps } from '../CloseButton';

const CSSNeutral = css`
  background-color: var(--interactional-secondary-02);
`;

const CSSHover = css`
  background-color: var(--hover-interactional-secondary-02);
`;

const CSSActivated = css`
  background-color: var(--hover-interactional-secondary-02);
`;

const CSSCloseButtonInvisible = css`
  opacity: 0; 
`;

const getTypeStyling = (type: ICloseButtonType) => {
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

const Bronze = css<ICloseButtonProps>`
  width: 12px;
  height: 12px;
  border-radius: 100px;
  border: 2px solid #FFFF;
  position: absolute;
  top: -6px;
  right: -6px;
  ${(props) => getTypeStyling(props.type)};
  ${(props) => !props.defaultVisible && CSSCloseButtonInvisible}
  > * {
    z-index: 10;
  }
  svg {
    width: 12px;
    height: 12px;
    color: #FFFF;
    stroke-width: 2.5;
  }
  `;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SCloseButton = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

