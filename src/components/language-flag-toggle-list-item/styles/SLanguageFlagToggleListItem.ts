import styled, { css } from "styled-components";
import { CSSProgressiveBody03Medium } from "../../../constants/styles/fonts";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const CSSHover = css`
  background-color: var(--hover-ui-01);
  svg {
    opacity: 1;
  }
`;

const CSSDragging = css`
  background-color: var(--active-ui-01-1);
  cursor: grabbing;
  // this is just to have higher secificity
  & {
    div {
      svg {
        opacity: 1;
      }
    }
  }
`;

const Bronze = css`
  ${CSSProgressiveBody03Medium};
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px 16px;

  background-color: var(--ui-01);
  color: var(--text-01);

  transition: background-color 200ms;

  border-bottom: 1px solid var(--ui-03);

  cursor: grab;

  &:hover {
    ${CSSHover};
    ${(props) => props.dragging && CSSDragging};
  }

  ${(props) => props.dragging && CSSDragging};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SLanguageFlagToggleListItem = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
