import styled, { css } from "styled-components";
import { CSSProgressiveCaption01Semibold } from "../../../constants/styles/design-tokens/fonts/CSSTypographies";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { ISolidLabelProps, ISolidLabelType } from "../SolidLabel";

const CSSSolidLabelBase = css`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 6px;
  border-radius: 4px;
  border: none;
  transition: all 0.2s ease-in-out;

  > * {
    ${CSSProgressiveCaption01Semibold};
    line-height: normal;
    text-align: center;
  }
`;

const CSSDefault = css`
  ${CSSSolidLabelBase};
  background: var(--ui-02);
  color: var(--text-suppportive-02);
`;

const CSSImportant = css`
  ${CSSSolidLabelBase};
  background: var(--ui-supportive-01);
  color: var(--text-02);
`;

const CSSGreen = css`
  ${CSSSolidLabelBase};
  background: var(--ui-supportive-05);
  color: var(--text-07);
`;

const CSSRed = css`
  ${CSSSolidLabelBase};
  background: var(--ui-supportive-02);
  color: var(--text-06);
`;

const CSSYellow = css`
  ${CSSSolidLabelBase};
  background: var(--ui-supportive-04);
  color: var(--text-08);
`;

const CSSGrey = css`
  ${CSSSolidLabelBase};
  background: var(--ui-03);
  color: var(--text-03);
`;

const CSSGreyOutline = css`
  ${CSSSolidLabelBase};
  box-sizing: border-box;
  background: var(--ui-01);
  border: 1px solid var(--ui-03);
  color: var(--text-03);
`;

const CSSBlack = css`
  ${CSSSolidLabelBase};
  background: var(--ui-02);
  color: var(--text-01);

  :hover {
    color: var(--text-01-1);
  }
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
    case "black":
      return CSSBlack;
    default:
      return CSSDefault;
  }
};

const Bronze = css<ISolidLabelProps>`
  ${(props) => getTypeStyling(props.type)}
  cursor: pointer;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSolidLabel = styled.button<any>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
