import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const Bronze = css`
  display: flex;
  transition: transform 200ms;
  > * {
    transform-origin: center;
    transition: transform 200ms;
    ${(props) => (props.rotationDegrees ? `transform: rotate(${props.rotationDegrees}deg)` : "")};
  }
  ${({ styleOverwrite }) => styleOverwrite ?? ''};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SIconRotator = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

