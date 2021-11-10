import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../../constants/styles/mediaquerys";

const Bronze = css`
  position: absolute;
  top: 0;
  right: 0;

  background-color: var(--ui-03);
  font-size: 11px;
  font-weight: 600;
  color: var(--text-01);

  padding: 5px 6px;
  border-radius: 0 7px;

  display: flex;
  align-items: center;
  gap: 4px;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SWithTranslationBadge = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
