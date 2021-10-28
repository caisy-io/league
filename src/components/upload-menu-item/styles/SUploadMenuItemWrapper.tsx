import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISUploadMenuItemWrapper {
  isDefault: boolean;
}

const Bronze = css<ISUploadMenuItemWrapper>`
  max-width: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;

  font-size: 8px;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    h6 {
      ${(props) => props.isDefault && "color: var(--hover-text-04);"}
    }
  }

  &:active {
    h6 {
      ${(props) => props.isDefault && "color: var(--text-01);"}
    }
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SUploadMenuItemWrapper = styled.div<ISUploadMenuItemWrapper>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
