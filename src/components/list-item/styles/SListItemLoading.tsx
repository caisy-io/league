import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { SListItem } from "./SListItem";

interface ISListItemLoading {}

const Bronze = css<ISListItemLoading>``;

const Silver = css<ISListItemLoading>``;

const Gold = css<ISListItemLoading>``;

const Platinum = css<ISListItemLoading>``;

const Diamond = css<ISListItemLoading>``;

export const SListItemLoading = styled(SListItem)`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
