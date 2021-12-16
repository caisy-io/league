import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const Bronze = css`
  font-family: ${(props) => (props.fontFamily ? `${props.fontFamily}` : "")};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "")};
  line-height: ${(props) => (props.lineHeight ? `${props.lineHeight}px` : "")};
  font-weight: ${(props) => (props.fontWeight ? `${props.fontWeight}` : "")};
  letter-spacing: ${(props) => (props.spacing ? `${props.spacing}em` : "")};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const STypography = styled.p`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

