import { CSSProperties } from "react";
import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

interface ISBadgeLabel {
  styleOverwrite?: CSSProperties;
}

const Bronze = css<ISBadgeLabel>`
  background-color: var(--ui-03);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  color: var(--text-04);
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;

  ${({ styleOverwrite }) => styleOverwrite || {}};
`;

const Silver = css<ISBadgeLabel>``;

const Gold = css<ISBadgeLabel>``;

const Platinum = css<ISBadgeLabel>``;

const Diamond = css<ISBadgeLabel>``;

export const SBadgeLabel = styled.div<ISBadgeLabel>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;