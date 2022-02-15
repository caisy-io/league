import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { IProfileDetailsListItemStatus } from "../ProfileDetailsListItem";


interface ISProfileDetailsListItemPreviewStatus {
  status?: IProfileDetailsListItemStatus;
}

const Bronze = css<ISProfileDetailsListItemPreviewStatus>`
  width: 10px;
  height: 10px;

  border-radius: 10px;
  border: 2px solid var(--ui-01);
  box-sizing: border-box;

  background-color: ${(props: ISProfileDetailsListItemPreviewStatus) =>
    props.status === "online" ? "var(--tag-05)" : "var(--tag-04)"};

  position: absolute;
  bottom: -5px;
  left: calc(50% - 5px);
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SProfileDetailsListItemPreviewStatus = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
