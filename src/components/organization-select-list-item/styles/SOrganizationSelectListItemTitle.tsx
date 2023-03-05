import styled, { css } from "styled-components";
import { CSSProgressiveBody02Semibold } from "../../../constants/styles";
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from "../../../constants/styles";

const Bronze = css`
  ${CSSProgressiveBody02Semibold};
  line-height: var(--line-heights-2);
  color: var(--text-01);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SOrganizationSelectListItemTitle = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
