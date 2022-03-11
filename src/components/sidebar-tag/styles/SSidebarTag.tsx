import styled, { css } from "styled-components";
import { CSSProgressivePrimaryButtons } from "../../../constants/styles/design-tokens/fonts/CSSTypographies";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { ISidebarTag } from "../SidebarTag";

const CSSSidebarTagBase = css`
  width: 16px; // also change in SVG
  height: 40px; // also change in SVG
  position: absolute;
  bottom: 40px;
  padding: 0;

  > svg {
    position: absolute;
  }
`;

const CSSSidebarTagLeftBase = css`
  right: -17px; // also change in SVG
  z-index: 15;

  > svg {
    -webkit-filter: drop-shadow(3px 0px 5px rgba(0, 0, 0, 0.04));
    filter: drop-shadow(3px 0px 5px rgba(0, 0, 0, 0.04));
  }
`;

const CSSSidebarTagRightBase = css`
  left: -16px; // also change in SVG
  z-index: 15;

  > svg {
    -webkit-filter: drop-shadow(3px 0px 5px rgba(0, 0, 0, 0.04));
    filter: drop-shadow(3px 0px 5px rgba(0, 0, 0, 0.04));
    transform: rotate(180deg);
  }
`;

const CSSSidebarTagClosedBase = css`
  > svg .sidebarTag__content__arrow {
    transform: rotate(180deg);
    transform-origin: center;
  }
`;

const CSSSidebarTagLeftOpen = css`
  ${CSSSidebarTagBase}
  ${CSSSidebarTagLeftBase}
`;

const CSSSidebarTagRightOpen = css`
  ${CSSSidebarTagBase}
  ${CSSSidebarTagRightBase}
`;

const CSSSidebarTagLeftClosed = css`
  ${CSSSidebarTagBase}
  ${CSSSidebarTagLeftBase}
  ${CSSSidebarTagClosedBase}
`;

const CSSSidebarTagRightClosed = css`
  ${CSSSidebarTagBase}
  ${CSSSidebarTagRightBase}
  ${CSSSidebarTagClosedBase}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

const Bronze = css<ISidebarTag>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  background-color: transparent;
  border-radius: 20px;

  ${(props) =>
    props.left
      ? props.open
        ? CSSSidebarTagLeftOpen
        : CSSSidebarTagLeftClosed
      : props.open
      ? CSSSidebarTagRightOpen
      : CSSSidebarTagRightClosed};
  cursor: pointer;
`;

export const SSidebarTag: any = styled.div<any>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
