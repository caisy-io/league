import styled, { css } from "styled-components";
import { CSSProgressiveBody03Semibold } from "../../../constants/styles/fonts";
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from "../../../constants/styles/mediaquerys";

interface ISBlockEditorSidebarTranslations {
  opened: boolean;
}

const Bronze = css<ISBlockEditorSidebarTranslations>`
  padding: 16px;
  color: var(--text-01);
  ${CSSProgressiveBody03Semibold};

  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  svg {
    transition: transform 200ms;
    transform: rotate(${(props) => (props.opened ? "90deg" : 0)});
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SBlockEditorSidebarTranslations = styled.div<ISBlockEditorSidebarTranslations>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
