import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { IMenuItemNestableAsFunction } from "../MenuItemNestableAsFunction";

const Bronze = css<IMenuItemNestableAsFunction>`
  display: ${(props) => (props.collapsed ? "none" : "inline-block")};
  margin-left: 28px;
  animation: ${(props) => (props.collapsed ? "closeFolder" : "openFolder")} 200ms forwards;
  flex: 1;

  @keyframes openFolder {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes closeFolder {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SMenuItemNestableChildWrapper = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
` as any; //  any here because styled-components type of as is wrong
