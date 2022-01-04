import styled, { css } from "styled-components";
import { SFlex } from "../../../base-components/flex/styles/SFlex";
import { CSSProgressiveHeading01, CSSProgressiveBody02Medium } from "../../../constants/styles/fonts";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const Bronze = css`
  position: relative;
  width: 460px;
  height: 520px;
  background-color: var(--ui-background);

  box-sizing: border-box;

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

export const SSetImagePreview = styled.img`
  width: 282px;
  height: 148px;

  border-radius: 4px;

  object-fit: cover;

  box-shadow: var(--box-shadow-strong-pop-elavation);
`;

export const SSetImageButtonsBar = styled(SFlex)`
  background-color: var(--ui-01);

  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  justify-content: space-between;
`;

export const SSetImageCard = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
