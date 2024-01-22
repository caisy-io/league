import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { CSSProgressiveCaption02Medium } from "../../../constants/styles";

const Bronze = css`
  border-radius: 4px;
  background: var(--ui-ui-03-ui-03, #e8eff3);
  display: flex;
  padding: 4px 6px;
  gap: 4px;
  color: var(--text-text-04-text-04, #567a98);
  ${CSSProgressiveCaption02Medium};
  .icon {
    padding-top: 1px;
    width: 12px;
    display: flex;
    justify-content: center;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SMicroInformationLabel = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
