import styled, { css } from "styled-components";
import { CSSProgressiveBody03Medium, CSSProgressiveHighlight } from "../../../constants/styles";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  ${CSSProgressiveBody03Medium};
  color: var(--text-01);
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SNotificationBody = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
