import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { ISolidLabelProps, ISolidLabelType } from "../SolidLabel";

const CSSSolidLabelBase = css`
  // Source: https://developer.mozilla.org/en-US/docs/Web/CSS/width
  //width: intrinsic;           /* Safari/WebKit uses a non-standard name */
  //width: -moz-max-content;    /* Firefox/Gecko */
  //width: -webkit-max-content; /* Chrome */
  width: fit-content;
  // TODO max-width needed? 
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 8px;
  border-radius: 4px;
  border: none;
  
  p, span {
    font-size: 12px;
    font-weight: 600;
    text-align: center;
  }
`;

const CSSDefault = css`
  ${CSSSolidLabelBase}
  background: var(--ui-02);
  color: var(--text-suppportive-02);
`;

const CSSImportant = css`
  ${CSSSolidLabelBase}
  background: var(--ui-supportive-01);
  color: var(--text-02);
`;

const CSSGreen = css`
  ${CSSSolidLabelBase}
  background: var(--ui-supportive-04);
  color: var(--text-07);
`;

const CSSRed = css`
  ${CSSSolidLabelBase}
  background: var(--ui-supportive-02);
  color: var(--text-06);
`;

const CSSYellow = css`
  ${CSSSolidLabelBase}
  background: var(--ui-supportive-03);
  color: var(--text-08);
`;

const CSSGrey = css`
  ${CSSSolidLabelBase}
  background: var(--ui-03);
  color: var(--text-03);
`;

const CSSGreyOutline = css`
  ${CSSSolidLabelBase}
  box-sizing: border-box;
  background: transparent;
  border: 1px solid var(--ui-03);
  color: var(--text-03);
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

const Bronze = css<ISolidLabelProps>` // TODO use label props
  ${(props) => getTypeStyling(props.type)}
  cursor: pointer;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSolidLabel: ISolidLabelProps = styled.button<any>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
