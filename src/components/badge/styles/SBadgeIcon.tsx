import styled, { css } from "styled-components";
import { CSSProgressiveBadgesSmall } from "../../../constants/styles/fonts";
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from "../../../constants/styles/mediaquerys";
import { IBadgeSizeType, IBadgeType } from "../Badge";
import { EBadgePosition } from "../EBadgePosition";

interface ISBadgeIcon {
  position: EBadgePosition;
  disabled?: boolean;
  height: number;
  type: IBadgeType;
  size?: IBadgeSizeType
}

const CSSRegular = css`
  background-color: var(--ui-03);
  color: var(--text-04);
`;

const CSSImportant = css`
  background-color: var(--ui-supportive-01);
  color: var(--text-02);
`;

const CSSWhite = css`
  background-color: var(--ui-01);
  color: var(--text-04);
`;

const CSSDark = css`
  background-color: var(--ui-06);
  color: var(--text-02);
`;

const CSSColor = css`
  background-color: ${(props) => {props.value}};
  border: 1px solid blue;
`;

const CSSCenter = css`
  position: relative;
  top: 0;
  border: none;
`;

const CSSMicro = css`
  font-size: 0.5rem;
`;

const CSSSmall = css`
  font-size: 0.563rem;
`;

const CSSMedium = css`
  font-size: 0.688rem;
`;

const Bronze = css<ISBadgeIcon>`
  position: absolute;
  ${CSSProgressiveBadgesSmall}
  z-index: 10;
  top: ${(props) => `-${props.height + 2}px`};
  ${(props) => (props.position == EBadgePosition.TopLeft ? `left: -${props.height}px` : "")};
  ${(props) => (props.position == EBadgePosition.TopRight ? `right: -${props.height + 2}px` : "")};
  border: 2px solid var(--ui-01);
  box-sizing: content-box;

  color: var(--ui-01);
  text-align: center;
  padding: 4.5px;

  /* Center the text contents */
  display: ${({ disabled }) => (disabled ? "none" : "inline-flex")};
  align-items: center;
  justify-content: center;
  background-color: var(--ui-supportive-01);
  border-radius: 50%;
  height: ${(props) => props.height}px;
  width: fit-content;
  aspect-ratio: 1;
  ${(props) => (props.type == "regular" ? CSSRegular : " ")};
  ${(props) => (props.type == "important" ? CSSImportant : " ")};
  ${(props) => (props.type == "white" ? CSSWhite : " ")};
  ${(props) => (props.type == "dark" ? CSSDark : " ")};
  ${(props) => (props.type == "color" ? CSSColor : " ")};
  ${(props) => (props.position == "center" ? CSSCenter : " ")};
  span { 
  overflow: visible !important;
  ${(props) => (props.size == "micro" ? CSSMicro : " ")};
  ${(props) => (props.size == "small" ? CSSSmall : " ")};
  ${(props) => (props.size == "medium" ? CSSMedium : " ")
  }
  ;}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SBadgeIcon = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
