import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const CSSDIsplayBlock = css`
  display: block;
`;

const CSSDisplayNone = css`
  display: none;
`;

const Bronze = css<{icon?:any; error?: any; success?: any}>`
  display: none;
  ${(props) => props.success ? CSSDIsplayBlock : ''};
  ${(props) => props.error == "true" ? CSSDisplayNone : ''};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SIconSuccess = styled.div<{icon?:any; error?: any; success?: any}>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

