import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

import { RgbaColorPicker } from "react-colorful";

const Bronze = css`
  &.react-colorful {
    width: 100%;
    height: auto;
  }

  .react-colorful__saturation {
    height: 160px;
    border-radius: 4px;
    border: none;

    margin-bottom: 12px;
  }

  .react-colorful__hue,
  .react-colorful__alpha {
    margin-top: 4px;
    height: 16px;
    border-radius: 12px;
  }

  .react-colorful__alpha {
    background: transparent;
  }

  .react-colorful__hue-pointer,
  .react-colorful__saturation-pointer,
  .react-colorful__alpha-pointer {
    width: 16px;
    height: 16px;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SColorPicker = styled(RgbaColorPicker)`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
