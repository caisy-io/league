import styled, { css } from "styled-components";
import { CSSProgressiveHeading01, CSSProgressiveBody02Medium } from "../../../constants/styles/fonts";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  width: 460px;
  height: 520px;
  background-color: var(--ui-background);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSetImageBody = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

export const SSetImageHeader = styled.div`
  text-align: center;
`;

export const SSetImageTitle = styled.p`
  ${CSSProgressiveHeading01};
  color: var(--text-01);
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SSetImageSubtitle = styled.p`
  margin-bottom: 32px;

  ${CSSProgressiveBody02Medium};
  color: var(--text-01);
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SSetImageCard = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
