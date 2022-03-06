import styled, { css } from "styled-components";
import { CSSProgressiveCaption01Semibold } from "../../../constants/styles";
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from "../../../constants/styles";

const CSSRequired = css`
  &:after {
    content: "";
    width: 4px;
    height: 4px;
    background-color: var(--ui-supportive-01);
    position: absolute;
    top: 0;
    border-radius: 50%;
    right: 0;
    z-index: 10;
  }
`;

const CSSError = css`
  color: var(--text-06);
`;

const CSSOpened = css`
  color: var(--active-text-04);
`;

const Bronze = css`
  ${CSSProgressiveCaption01Semibold};
  color: var(--text-04);
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 90%;
  width: fit-content;
  padding-right: 8px;
  ${({ required, selected }) => required && !selected && CSSRequired};
  ${(props) => props.opened && CSSOpened};
  ${(props) => props.error && CSSError};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SLanguageFormatInputDropdownLabel = styled.p`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
