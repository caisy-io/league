import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISUploadsPopup {
}

const Bronze = css<ISUploadsPopup>`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: static;
width: 408px;
height: 452px;

background: var(--ui-01);

box-shadow: 0px 8px 24px rgba(124, 154, 179, 0.2);
border-radius: 12px;

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 16px;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SUploadsPopup = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
