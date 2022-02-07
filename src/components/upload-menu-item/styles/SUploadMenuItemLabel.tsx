import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

type TUploadMenuItemStatus = "default" | "dragging" | "loading" | "success";

interface IUploadMenuItemLabel {
  state?: TUploadMenuItemStatus;
}

const CSSHover = css`
  color: var(--hover-text-04);
`;

const CSSSuccess = css`
  color: var(--text-07);
`;

const CSSDefault = css`
  color: var(--text-04);
`;

const getStyles = (state: TUploadMenuItemStatus) => {
  switch (state) {
    case "dragging":
      return CSSHover;
    case "success":
    case "loading":
      return CSSSuccess;
    default:
      return CSSDefault;
  }
};

const Bronze = css<IUploadMenuItemLabel>`
  transition: color 200ms;
  font-size: 8px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin-top: 0.25rem;
  ${(props) => getStyles(props.state)}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SUploadMenuItemLabel = styled.h6<IUploadMenuItemLabel>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
