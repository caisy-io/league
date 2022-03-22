import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const CSSWhite = css`
  color: var(--text-02);

  &:hover {
    background-color: var(--hover-interactional-secondary-04);
  }

  &:active {
    background-color: var(--active-interactional-secondary-04);
  }
`;

const CSSBlue = css`
  color: var(--text-04);

  &:hover {
    background-color: var(--hover-interactional-secondary-07);
  }

  &:active {
    background-color: var(--active-interactional-secondary-07);
  }
`;

const CSSSuccess = css`
  color: var(--text-07);

  &:hover {
    background-color: var(--hover-interactional-secondary-05);
  }

  &:active {
    background-color: var(--active-interactional-secondary-05);
  }
`;

const CSSDanger = css`
  color: var(--text-06);
  background-color: rgba(254, 229, 216, 0.0001);

  &:hover {
    background-color: var(--hover-interactional-secondary-06);
  }

  &:active {
    background-color: var(--active-interactional-secondary-06);
  }
`;

const CSSGrey = css`
  color: var(--text-04);
  background-color: var(--interactional-secondary-03);

  &:hover {
    background-color: var(--hover-interactional-secondary-03);
  }

  &:active {
    background-color: var(--active-interactional-secondary-03);
  }

  &:disabled {
    background-color: var(--disabled-interactional-02);

    &:hover,
    &:active {
      background-color: var(--disabled-interactional-02);
    }
  }
`;

const CSSGreyOutline = css`
  color: var(--text-04);
  background-color: transparent;
  border: 1px solid var(--interactional-secondary-08);

  &:hover {
    color: var(--hover-text-04);
    background-color: var(--hover-interactional-secondary-08);
  }

  &:active {
    color: var(--active-text-04);
    background-color: var(--active-interactional-secondary-08);
  }

  &:disabled {
    background-color: var(--disabled-interactional-02);

    &:hover,
    &:active {
      background-color: var(--disabled-interactional-02);
    }
  }
`;

const CSSDefault = css`
  color: var(--text-01);
  background-color: transparent;

  &:hover {
    background-color: var(--hover-interactional-secondary-08);
  }

  &:active {
    background-color: var(--active-interactional-secondary-08);
  }
`;

const getStyles = (type) => {
  switch (type) {
    case "white":
      return CSSWhite;
    case "blue":
      return CSSBlue;
    case "success":
      return CSSSuccess;
    case "danger":
      return CSSDanger;
    case "grey":
      return CSSGrey;
    case "grey outline":
      return CSSGreyOutline;
    default:
      return CSSDefault;
  }
};

const Bronze = css`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  border-radius: 4px;

  font-size: 12px;
  line-height: 16px;
  font-weight: 600;

  transition: color 200ms, background-color 200ms;

  &:disabled {
    cursor: not-allowed;
    color: var(--disabled-text);
    background-color: transparent;

    &:hover,
    &:active {
      color: var(--disabled-text);
      background-color: transparent;
    }
  }

  ${(props) => getStyles(props.type)}

  svg {
    height: 16px;
    width: 16px;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SFlatActionButton = styled.button<any>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
