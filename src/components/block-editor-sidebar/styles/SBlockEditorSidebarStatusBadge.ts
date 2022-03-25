import styled, { css } from "styled-components";
import { CSSProgressiveCaption01Semibold} from "../../../constants/styles/fonts";
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  margin-left: auto;
  ${CSSProgressiveCaption01Semibold};
  letter-spacing: normal;
  padding: 4px 8px;
  background-color: var(--ui-03);
  color: var(--text-03);
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SBlockEditorSidebarStatusBadge = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
