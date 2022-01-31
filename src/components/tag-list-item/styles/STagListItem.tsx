import styled, { css } from "styled-components";
import { SFlex } from "../../../base-components/flex/styles/SFlex";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { ITagListItem } from "../TagListItem";
import { STagListItemLabel } from "./STagListItemLabel";
import { STagListItemOutlineLabelWrapper } from "./STagListItemOutlineLabelWrapper";

const CSSHover = css`
  background-color: var(--hover-ui-01);
`;

const CSSActivated = css`
  background-color: var(--active-ui-01-1);
`;

const CSSDisabled = css`
  background-color: var(--disabled-interactional-03);
  color: var(--disabled-text);

  cursor: not-allowed;

  ${STagListItemLabel}, svg, button {
    color: var(--disabled-text);
  }
`;

const CSSAllChildrenDisabled = css`
  ${CSSDisabled};
  ${STagListItemOutlineLabelWrapper} {
    > div {
      ${CSSDisabled}
    }
  }

  &:hover {
    ${CSSDisabled};
    ${STagListItemOutlineLabelWrapper} {
      > div {
        ${CSSDisabled}
      }
    }
  }

  &:active {
    ${CSSDisabled};
    ${STagListItemOutlineLabelWrapper} {
      > div {
        ${CSSDisabled}
      }
    }
  }
`;

const Bronze = css<ITagListItem>`
  padding: 12px 16px;
  gap: 12px;

  > div {
    gap: 12px;
  }

  /* justify-content: space-between; */

  background-color: var(--ui-01);
  border-bottom: 1px solid var(--ui-03);

  cursor: pointer;

  &:hover {
    ${CSSHover};
    > div {
      ${CSSHover}
    }
  }

  &:active {
    ${CSSActivated};
    > div {
      ${CSSActivated}
    }
  }

  ${(props) =>
    props.activated &&
    `
        ${CSSActivated};
        ${STagListItemOutlineLabelWrapper} {
          > div {
            ${CSSActivated}
          }
        }
  `}

  ${(props) => props.disabled && CSSAllChildrenDisabled}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const STagListItem = styled(SFlex)`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
