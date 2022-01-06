import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface IButtonsBar {
}

const Bronze = css<IButtonsBar>`
  display: flex;
  flex: 1;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.04);

  > button {
    flex: 1;
    height: 44px;
    :after {
      background-color: var(--ui-01);
      border-radius: 0;
    }
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SButtonsBar = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;