import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const CSSOpened = css`
  color: var(--active-icon-03);
  transform: rotate(90deg);
`;

const Bronze = css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--icon-03);
  transition: transform 150ms, color 150ms;
  transform: rotate(0);

  ${(props) => props.opened && CSSOpened}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const STranslationMenuHeaderIconWrapper = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
