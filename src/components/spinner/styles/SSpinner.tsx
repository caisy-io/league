import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISSpinner {}

const Bronze = css<ISSpinner>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 30px;
  max-width: 30px;
  animation: spin 1s linear 0s infinite reverse;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(-360deg);
    }
  }
`;

const Silver = css<ISSpinner>``;

const Gold = css<ISSpinner>``;

const Platinum = css<ISSpinner>``;

const Diamond = css<ISSpinner>``;

export const SSpinner = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
