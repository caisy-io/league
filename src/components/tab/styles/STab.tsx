import styled, { css } from "styled-components";
import { ISizesWithDefault } from "../../../interfaces";
import {
  CSSProgressiveBody02Semibold,
  CSSProgressiveBody03Semibold,
  CSSProgressiveCaption01Semibold,
} from "../../../constants/styles/design-tokens/fonts/CSSTypographies";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISTab {
  size: ISizesWithDefault;
  activated: boolean;
  onlyIcon: boolean;
}

const CSSActivated = css`
  color: var(--text-01);
  background-color: var(--active-ui-01-1);
  path {
    stroke: var(--text-01);
  }
`;

const CSSMicro = css`
  padding: 4px 6px;
  gap: 4px;
  ${CSSProgressiveCaption01Semibold};
`;

const CSSSmall = css`
  padding: 4px 8px;
`;

const CSSMedium = css`
  padding: 8px 12px;
`;

const CSSDefault = css`
  padding: 8px 12px;
  gap: 10px;
  ${CSSProgressiveBody02Semibold}
`;

const getSizeStyling = (size: ISizesWithDefault) => {
  switch (size) {
    case "micro":
      return CSSMicro;
    case "small":
      return CSSSmall;
    case "medium":
      return CSSMedium;
    case "default":
    default:
      return CSSDefault;
  }
};

const Bronze = css<ISTab>`
  border-radius: 6px;
  background-color: var(--ui-01);
  width: fit-content;
  transition: background-color 200ms, color 200ms;
  cursor: pointer;
  color: var(--text-04);
  display: flex;
  align-items: center;
  gap: 8px;
  path {
    stroke: var(--text-04);
  }
  ${CSSProgressiveBody03Semibold};

  &:hover {
    background-color: var(--hover-ui-01);
    ${(props: ISTab) => props.activated && CSSActivated};
  }

  &:active {
    ${CSSActivated};
  }

  ${(props: ISTab) => props.activated && CSSActivated};

  ${(props: ISTab) => getSizeStyling(props.size)};

  ${(props: ISTab) => props.onlyIcon && "padding: 4px;"}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const STab = styled.div<ISTab>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
