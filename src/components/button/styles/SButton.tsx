import styled, { css } from "styled-components";
import { CSSProgressivePrimaryButtons } from "../../../constants/styles";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles";
import { IButtonProps, IButtonType } from "../Button";
import { ISizesWithDefault } from "../../../interfaces";

const getSize = (size?: ISizesWithDefault) => {
  switch (size) {
    case "micro":
      return css`
        height: 18px;
        padding: 0 5px;
        font-size: 11px;
        gap: 5px;
        border-radius: 4px;

        svg {
          height: 8px;
          width: 8px;
        }

        :after {
          border-radius: 4px;
        }
      `;
    case "medium":
      return css`
        height: 36px;
      `;
    case "small":
      return css`
        height: 32px;

        > span {
          &:not(:first-child) {
            padding-left: 0;
          }
        }

        :after {
          border-radius: 6px;
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

  &:hover:enabled {
    &:after {
      background-color: var(--hover-interactional-primary-01);
    }
  }

  &:active:enabled {
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
  ${CSSSticked};
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
  ${CSSSticked};
  color: var(--text-01);

  &:after {
    border-radius: 0;
    background-color: transparent;
  }

  &:hover:enabled {
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

const CSSNeutral = css`
  border: none;

  &:after {
    background-color: var(--interactional-secondary-01);
  }

  &:hover:enabled {
    &:after {
      background-color: var(--hover-interactional-secondary-01);
    }
  }

  &:active:enabled {
    &:after {
      background-color: var(--active-interactional-secondary-01);
    }
  }
`;

const CSSNeutralPressed = css`
  &:after {
    background-color: var(--active-interactional-secondary-01);
  }
`;

const CSSSecondary = css`
  color: var(--text-01);
  border: none;

  &:after {
    background-color: var(--interactional-secondary-03);
  }

  &:hover:enabled {
    &:after {
      background-color: var(--hover-interactional-secondary-03);
    }
  }

  &:active:enabled {
    &:after {
      color: var(--active-text-01);
      background-color: var(--active-interactional-secondary-03);
    }
  }
`;

const CSSSecondaryPressed = css`
  color: var(--active-icon-01);
  border: none;

  &:after {
    background-color: var(--interactional-secondary-03);
  }
`;

const CSSTertiary = css`
  color: var(--text-04);
  border: solid 1px var(--interactional-tertiary-01);

  &:hover:enabled {
    color: var(--hover-text-04);
    border: solid 1px var(--hover-interactional-tertiary-01);
  }

  &:active:enabled {
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
  border: solid 1px var(--active-interactional-tertiary-01);

  &:after {
    background-color: var(--active-interactional-tertiary-01);
  }
`;

const CSSDanger = css`
  border: none;

  &:after {
    background-color: var(--interactional-secondary-02);
  }

  &:hover:enabled {
    &:after {
      background-color: var(--hover-interactional-secondary-02);
    }
  }

  &:active:enabled {
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

  &:hover:enabled {
    color: var(--hover-text-06);

    &:after {
      background-color: var(--hover-interactional-secondary-06);
    }
  }

  &:active:enabled {
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

const getTypeStyling = (styleType: IButtonType, isActivated, isSticked) => {
  switch (styleType) {
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
    case "neutral":
      return isActivated ? CSSNeutralPressed : CSSNeutral;
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
      return isActivated ? CSSSecondaryPressed : CSSSecondary;
  }
};

const Bronze = css<{ styleType: IButtonType } & IButtonProps>`
  ${CSSProgressivePrimaryButtons};
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

  svg {
    width: 16px;
    height: 16px;
  }

  /* this after is there to split the background animation from the button content */
  /* after is the background */

  &:after {
    content: "";
    position: absolute;
    transition: all 0.3s ease;
    z-index: 1;
    height: 100%;
    width: 100%;
    border-radius: 8px;
    top: 0;
    left: 0;
  }

  ${(props) => getSize(props.size)};
  ${(props) => (props.disabled ? CSSDisabled : "cursor: pointer")};
  ${(props) => getTypeStyling(props.styleType, props.activated, props.sticked)};

  line-height: normal;

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
    white-space: nowrap;
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 11px;
    text-transform: uppercase;
  }

  .icon {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
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
  ${({ styleOverwrite }) => styleOverwrite ?? ""};
`;
