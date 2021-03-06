import styled, { css } from "styled-components";
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from "../../../constants/styles/mediaquerys";
import { SUploadMenuItemLabel } from "./SUploadMenuItemLabel";

interface ISUploadMenuItemWrapper {
  hovering: boolean;
  activated: boolean;
  isDefault: boolean;
}

const CSSDefault = css<ISUploadMenuItemWrapper>`
&:hover{
  ${SUploadMenuItemLabel} {
    color: var(--hover-text-04);
  }
}
&:active{
  ${SUploadMenuItemLabel} {
    color: var(--text-01);
  }
}
`;

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
  position: relative;
  ${(props) => props.state == "default" ? CSSDefault : ''};
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
