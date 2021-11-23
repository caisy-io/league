import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISAvatar {
  size?: number;
}

const Bronze = css<ISAvatar>`
  width: ${(props) => (props.size !== undefined ? `${props.size}px` : "32px")};
  height: ${(props) => (props.size !== undefined ? `${props.size}px` : "32px")};

  border-radius: 50%;
  line-height: 32px;
  border: solid 1px var(--ui-01);
  background-color: #0b1f44;
  overflow: hidden;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  position: relative;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SAvatarLegacy = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
