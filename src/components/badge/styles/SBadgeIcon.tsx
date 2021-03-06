import styled, { css } from "styled-components";
import { ISizes } from "../../../interfaces/index";
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from "../../../constants/styles/mediaquerys";
import { IBadgeType } from "../Badge";
import { EBadgePosition } from "../EBadgePosition";
import { CSSProgressiveHighlight } from "../../../constants/styles/design-tokens/fonts/CSSTypographies";

interface ISBadgeIcon {
  position: EBadgePosition;
  disabled?: boolean;
  height: number;
  type: IBadgeType;
  size?: ISizes;
  value: string;
  withPadding: boolean;
  withBorder: boolean;
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

const CSSColor = css<{ value: string }>`
  background-color: ${(props) => (props.value ? `${props.value}` : "")};
  outline: 1px solid #e8eff3;
  border: 2px solid #ffff;
`;

const CSSCenter = css`
  position: relative;
`;

const CSSTopRight = css`
  top: -0.438rem;
  right: -0.438rem;
`;

const CSSTopLeft = css`
  top: -0.438rem;
  left: -0.438rem;
`;

const CSSMicro = css<{ width: number }>`
  height: 0.75rem;
  min-width: 0.75rem;
`;

const CSSSmall = css<{ width: number }>`
  height: 1rem;
  min-width: 1rem;
`;

const CSSMedium = css<{ width: number }>`
  height: 1.25rem;
  min-width: 1.25rem;
`;

const Bronze = css<ISBadgeIcon>`
  position: absolute;
  ${CSSProgressiveHighlight};
  font-family: "Inter";
  z-index: 10;
  height: 0.75rem;
  color: var(--ui-01);
  text-align: center;
  padding: ${({ withPadding }) => withPadding ? "2px 6px" : "0.125rem"};
  align-items: center;
  justify-content: center;
  background-color: var(--ui-supportive-01);
  box-sizing: border-box;
  border-radius: 6.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  border: ${({ withBorder }) => withBorder ? "2px solid #FFFF" : "none"};

  /* POSITION OF BADGE */
  ${(props) => (props.position == EBadgePosition.Center ? CSSCenter : " ")};
  ${(props) => (props.position == EBadgePosition.TopLeft ? CSSTopLeft : " ")};
  ${(props) => (props.position == EBadgePosition.TopRight ? CSSTopRight : " ")};
  /* TYPE OF BADGE */
  ${(props) => (props.type == "regular" ? CSSRegular : " ")};
  ${(props) => (props.type == "important" ? CSSImportant : " ")};
  ${(props) => (props.type == "white" ? CSSWhite : " ")};
  ${(props) => (props.type == "dark" ? CSSDark : " ")};
  ${(props) => (props.type == "color" ? CSSColor : " ")};
  /* SIZE OF BADGE */
  ${(props) => (props.size == "micro" ? CSSMicro : " ")};
  ${(props) => (props.size == "small" ? CSSSmall : " ")};
  ${(props) => (props.size == "medium" ? CSSMedium : " ")};
  
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
