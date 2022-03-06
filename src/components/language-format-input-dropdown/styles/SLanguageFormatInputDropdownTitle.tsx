import styled, { css } from "styled-components";
import { CSSProgressiveBody03, CSSProgressiveBody03Medium } from "../../../constants/styles";
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

const CSSSelected = css`
  ${CSSProgressiveBody03};
  color: var(--text-01);
`;

const Bronze = css`
  ${CSSProgressiveBody03Medium};
  color: var(--text-03);
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 90%;
  width: fit-content;
  padding-right: 4px;
  ${({ required, label, selected }) => required && !label && !selected && CSSRequired};
  ${({ selected, opened }) => (selected || opened) && CSSSelected};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SLanguageFormatInputDropdownTitle = styled.p`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
