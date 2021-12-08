import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const Bronze = css`
  width: 100%;
  height: 100%;
  display: none;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #FFFFFF;
  border-radius: 0.75rem;
  flex-direction: column;
  align-items: center;
  ${(props) => (props.active == true ? "display: flex" : "")};
  `;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SPopoverContentWrapper = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

