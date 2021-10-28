import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

type TUploadMenuItemStatus = "default" | "dragging" | "loading" | "success";

interface ISUploadMenuItem {
  state: TUploadMenuItemStatus;
}

const CSSDefault = css`
  background-color: var(--ui-01);
  color: var(--icon-04);
  --icon-background-color: var(--ui-01);

  &:hover {
    background-color: var(--hover-ui-01);
    color: var(--hover-icon-04);
    --icon-background-color: var(--hover-ui-01);
    --text-color: var(--hover-text-04);
  }

  &:active {
    background-color: var(--active-ui-01);
    color: var(--ui-01);
    --icon-background-color: var(--active-ui-01);
    --text-color: var(--text-01);
  }
`;

const CSSDrag = css`
  background-color: var(--hover-ui-01);
  color: var(--ui-supportive-03);
  border: 1px dashed var(--ui-supportive-03);
`;

const CSSSuccess = css`
  background-color: var(--ui-01);
  color: var(--icon-07);
  border: 1.5px solid var(--tag-05);
`;

const CSSLoading = css`
  background-color: var(--ui-01);
  color: var(--icon-07);
  border: none;
`;

const getStateStyles = (state: TUploadMenuItemStatus) => {
  switch (state) {
    case "dragging":
      return CSSDrag;
    case "success":
      return CSSSuccess;
    case "loading":
      return CSSLoading;
    default:
      return CSSDefault;
  }
};

const Bronze = css<ISUploadMenuItem>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: color 200ms, background-color 200ms;
  overflow: hidden;
  ${(props) => getStateStyles(props.state)};
`;

const Silver = css<ISUploadMenuItem>``;

const Gold = css<ISUploadMenuItem>``;

const Platinum = css<ISUploadMenuItem>``;

const Diamond = css<ISUploadMenuItem>``;

export const SUploadMenuItem = styled.button<ISUploadMenuItem>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
