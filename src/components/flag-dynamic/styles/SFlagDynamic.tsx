import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISFlagDynamic {
  size?: 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 48;
}

const Bronze = css<ISFlagDynamic>`
  width: ${(props) => (props.size !== undefined ? props.size : 40)}px;
  height: ${(props) => (props.size !== undefined ? props.size : 40)}px;
  overflow: hidden;
  
  svg {
    transform: scale(${(props) => {
      return props.size / 512;
    }});
    transform-origin: top left;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SFlagDynamic = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;