import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { IButtonProps, IButtonSize, IButtonType } from "../Button";

const getSize = (size?: IButtonSize) => {
  switch (size) {
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

const CSSNeutral = css`
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

const CSSSecondary = css`
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

const CSSTertiary = css`
  color: var(--text-04);
  border: ${(props: any) => (props.dashed ? "dashed" : "solid")} 1px var(--interactional-tertiary-01);
  &:hover {
    color: var(--hover-text-04);
    &:after {
      border: ${(props: any) => (props.dashed ? "dashed" : "solid")} 1px var(--hover-interactional-tertiary-01);
    }
  }
  &:active {
    color: var(--text-02);
    &:after {
      background-color: var(--active-interactional-tertiary-01);
    }
  }
  &:disabled {
    border: ${(props: any) => (props.dashed ? "dashed" : "solid")} 1px var(--disabled-interactional-01);
    color: var(--disabled-interactional-01);
    &:after {
      background-color: transparent !important;
    }
  }
`;

const CSSLink = css`
  border: ${(props: any) => (props.dashed ? `var(--text-priority-neutral-4) 1px dashed` : "none")};
  background: rgba(0, 0, 0, 0);
  :hover {
    background: rgba(0, 0, 0, 0.05);
  }
  &:active {
    filter: brightness(80%) contrast(150%);
    box-shadow: 0 2px 25px rgba(0, 0, 0, 0.05);
  }
  color: var(--text-priority-neutral-3);
`;

const CSSRound = css`
  border-radius: 50px;
`;

const CSSDisabled = css`
  &:disabled {
    cursor: not-allowed;
    &:after {
      background-color: var(--disabled-interactional-01);
    }
  }
`;

const getTypeStyling = (type?: IButtonType) => {
  switch (type) {
    case "primary":
      return CSSPrimary;
    case "secondary":
      return CSSSecondary;
    case "tertiary":
      return CSSTertiary;
    case "danger":
      return CSSDanger;
    case "link":
      return CSSLink;
    default:
      return CSSNeutral;
  }
};

const Bronze = css<IButtonProps>`
  color: var(--text-02);
  ${(props) => getSize(props.size)};
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
  font-size: 11px;
  padding: 0 12px;
  ${(props) => getTypeStyling(props.type)};
  ${(props) => (props.disabled ? CSSDisabled : "cursor: pointer")};
  ${(props) => (props.round ? CSSRound : "")};

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
    ${(props) => (props.round ? CSSRound : "")};
  }
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
