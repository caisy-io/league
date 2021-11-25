import styled, { css } from "styled-components";
import {
  CSSProgressiveBody02Semibold,
  CSSProgressiveBody03Semibold,
  CSSProgressiveCaption01Semibold,
} from "../../../constants/styles/fonts";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

type ISTabSize = "Micro" | "Small" | "Medium" | "Default";

interface ISTab {
  size: ISTabSize;
  activated: boolean;
  onlyIcon: boolean;
}

const CSSActivated = css`
  color: var(--text-01);
  background-color: var(--active-ui-01-1);
`;

const CSSMicro = css`
  padding: 4px 6px;
  gap: 4px;
  svg {
    height: 16px;
    width: 16px;
  }
  ${CSSProgressiveCaption01Semibold};
`;

const CSSSmall = css`
  padding: 4px 8px;

  svg {
    height: 16px;
    width: 16px;
  }
`;

const CSSMedium = css`
  padding: 8px 12px;
`;

const CSSDefault = css`
  padding: 8px 12px;
  gap: 10px;
  svg {
    height: 24px;
    width: 24px;
  }
  ${CSSProgressiveBody02Semibold}
`;

const getSizeStyling = (size: ISTabSize) => {
  switch (size) {
    case "Micro":
      return CSSMicro;
    case "Small":
      return CSSSmall;
    case "Medium":
      return CSSMedium;
    case "Default":
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
  svg {
    height: 20px;
    width: 20px;
  }
  ${CSSProgressiveBody03Semibold}

  &:hover {
    background-color: var(--hover-ui-01);
  }

  &:active {
    ${CSSActivated}
  }

  ${(props: ISTab) => props.activated && CSSActivated}

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
