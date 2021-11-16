import styled, { css } from "styled-components";
import { CSSProgressivePrimaryButtons } from "../../../constants/styles/fonts";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { ISolidLabelType } from "../SolidLabel";

const CSSDefault = css`
    display: flex;
    align-items: center;
    padding: 4px 8px;

    position: static;
    width: 58px;
    height: 24px;
    left: 16px;
    top: 8px;

    /* UI/$ui-02/$ui-02 */

    background: var(--ui-02);
    border-radius: 4px;
    color: #008CFF;
    /* Inside Auto Layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 32px 0px;

    span, p {
        position: static;
        width: 42px;
        height: 16px;
        left: 8px;
        top: 4px;

        /* Progressive/$caption-01@semibold */

        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        /* identical to box height, or 133% */


        /* Text/$text-suppportive-02 */

        color: #008CFF;


        /* Inside Auto Layout */

        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 0px 4px;
    }
`;

const CSSGreen = css`
  
`;

const CSSImportant = css`
  
`;
const CSSRed = css`
  
`;
const CSSYellow = css`
  
`;
const CSSGrey = css`
  
`;
const CSSGreyOutline = css`
  
`;


const getTypeStyling = (type: ISolidLabelType) => {
  switch (type) {
    case "important":
      return CSSImportant;
    case "green":
      return CSSGreen;
    case "red":
      return CSSRed;
    case "yellow":
      return CSSYellow;
    case "grey":
      return CSSGrey;
    case "greyOutline":
      return CSSGreyOutline;
    default:
      return CSSDefault;
  }
};

const Bronze = css<any>` // TODO use label props
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

  ${(props) => getTypeStyling(props.type)};
  cursor: pointer;

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

export const SSolidLabel: any = styled.div<any>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
