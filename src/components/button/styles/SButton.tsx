import styled, { css } from "styled-components";
import { CSSProgressivePrimaryButtons } from "../../../constants/styles/fonts";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { IButtonProps, IButtonType } from "../Button";
import { ISizesWithDefault } from "../../..";

const getSize = (size?: ISizesWithDefault) => {
  switch (size) {
    case "micro":
      return css`
        height: 18px;
        padding: 0 5px;
        font-size: 11px;
        gap: 5px;
      `;
    case "medium":
      return css`
        height: 36px;
      `;
    case "small":
      return css`
        height: 32px;
        svg {
          height: 20px;
          width: 20px;
        }
        > span {
          &:not(:first-child) {
            padding-left: 0;
          }
        }
      `;
    default:
      return css`
        height: 40px;
      `;
  }
};

const CSSSticked = css`
  border: none;
  border-radius: 0;
  font-weight: 700;
`;

const CSSPrimary = css`
  border: none;
  &:after {
    background-color: var(--interactional-primary-01);
  }
  &:hover {
    &:after {
      background-color: var(--hover-interactional-primary-01);
    }
  }
  &:active {
    &:after {
      background-color: var(--active-interactional-primary-01);
    }
  }
`;

const CSSPrimaryPressed = css`
  &:after {
    background-color: var(--active-interactional-primary-01);
  }
`;

const CSSPrimaryStickedActivated = css`
  ${CSSSticked}
  color: var(--active-text-01);
  &:after {
    border-radius: 0;
    background-color: var(--active-interactional-tertiary-04);
  }

  &:disabled {
    color: var(--disabled-text);
    &:after {
      background-color: var(--disabled-interactional-03);
    }
  }
`;

const CSSPrimarySticked = css`
  ${CSSSticked}
  color: var(--text-01);

  &:after {
    border-radius: 0;
    background-color: transparent;
  }
  &:hover {
    color: var(--hover-text-01);
    &:after {
      background-color: var(--hover-interactional-tertiary-04);
    }
  }
  &:active {
    ${CSSPrimaryStickedActivated}
  }
  &:disabled {
    color: var(--disabled-text);
    &:after {
      background-color: var(--disabled-interactional-03);
    }
  }
`;

const CSSSecondary = css`
  border: none;
  &:after {
    background-color: var(--interactional-secondary-01);
  }
  &:hover {
    &:after {
      background-color: var(--hover-interactional-secondary-01);
    }
  }
  &:active {
    &:after {
      background-color: var(--active-interactional-secondary-01);
    }
  }
`;

const CSSSecondaryPressed = css`
  &:after {
    background-color: var(--active-interactional-secondary-01);
  }
`;

const CSSNeutral = css`
  color: var(--text-01);
  border: none;
  &:after {
    background-color: var(--interactional-secondary-03);
  }
  &:hover {
    &:after {
      background-color: var(--hover-interactional-secondary-03);
    }
  }
  &:active {
    &:after {
      color: var(--active-text-01);
      background-color: var(--active-interactional-secondary-03);
    }
  }
`;

const CSSNeutralPressed = css`
  color: var(--active-icon-01);
  border: none;
  &:after {
    background-color: var(--interactional-secondary-03);
  }
`;

const CSSTertiary = css`
  color: var(--text-04);
  border: solid 1px var(--interactional-tertiary-01);
  &:hover {
    color: var(--hover-text-04);
    &:after {
      border: solid 1px var(--hover-interactional-tertiary-01);
    }
  }
  &:active {
    color: var(--text-02);
    &:after {
      background-color: var(--active-interactional-tertiary-01);
    }
  }
  &:disabled {
    border: solid 1px var(--disabled-interactional-01);
    color: var(--disabled-interactional-01);
    &:after {
      background-color: transparent !important;
    }
  }
`;

const CSSTertiaryPressed = css`
  color: var(--text-02);
  &:after {
    background-color: var(--active-interactional-tertiary-01);
  }
`;

const CSSDanger = css`
  border: none;
  &:after {
    background-color: var(--interactional-secondary-02);
  }
  &:hover {
    &:after {
      background-color: var(--hover-interactional-secondary-02);
    }
  }
  &:active {
    &:after {
      background-color: var(--active-interactional-secondary-02);
    }
  }
`;

const CSSDangerPressed = css`
  color: var(--icon-06);
  &:after {
    background-color: var(--active-interactional-secondary-06);
  }
`;

const CSSDangerSticked = css`
  ${CSSSticked}
  color: var(--text-06);

  &:after {
    border-radius: 0;
    background-color: transparent;
  }
  &:hover {
    color: var(--hover-text-06);
    &:after {
      background-color: var(--hover-interactional-secondary-06);
    }
  }
  &:active {
    color: var(--active-text-06);
    &:after {
      background-color: var(--active-interactional-secondary-06);
    }
  }
  &:disabled {
    color: var(--disabled-text);
    &:after {
      background-color: var(--disabled-interactional-02);
    }
  }
`;

const CSSDangerStickedActivated = css`
  ${CSSSticked}
  color: var(--active-text-06);
  &:after {
    border-radius: 0;
    background-color: var(--active-interactional-secondary-06);
  }
`;

const CSSDisabled = css`
  &:disabled {
    cursor: not-allowed;
    &:after {
      background-color: var(--disabled-interactional-01);
    }
  }
`;

const getTypeStyling = (type: IButtonType, isActivated, isSticked) => {
  switch (type) {
    case "primary":
      return isSticked && isActivated
        ? CSSPrimaryStickedActivated
        : isSticked
        ? CSSPrimarySticked
        : isActivated
        ? CSSPrimaryPressed
        : CSSPrimary;
    case "secondary":
      return isActivated ? CSSSecondaryPressed : CSSSecondary;
    case "tertiary":
      return isActivated ? CSSTertiaryPressed : CSSTertiary;
    case "danger":
      return isSticked && isActivated
        ? CSSDangerStickedActivated
        : isSticked
        ? CSSDangerSticked
        : isActivated
        ? CSSDangerPressed
        : CSSDanger;
    default:
      return isActivated ? CSSNeutralPressed : CSSNeutral;
  }
};

const Bronze = css<IButtonProps>`
  ${CSSProgressivePrimaryButtons}
  color: var(--text-02);
  flex-grow: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  position: relative;
  z-index: 0;
  transition: all 0.3s ease;
  background-color: transparent;
  gap: 9px;
  padding: 0 12px;
  border: none;
  ${(props) => getSize(props.size)};

  /* this after is there to split the background animation from the button content */
  /* after is the background */
  &:after {
    content: "";
    position: absolute;
    transition: all 0.3s ease;
    z-index: 1;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 6px;
  }

  ${(props) => (props.disabled ? CSSDisabled : "cursor: pointer")};
  ${(props) => getTypeStyling(props.type, props.activated, props.sticked)};

  &:active {
    &:after {
      transform-origin: center;
      transform: scale(1.01);
    }
  }
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
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10px;
    width: 10px;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SButton: any = styled.button<any>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
