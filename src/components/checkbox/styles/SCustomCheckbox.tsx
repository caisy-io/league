import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const CSSChecked = css`
border-color: var(--active-icon-04);
background: var(--active-icon-04);
  svg path {
    stroke-dasharray: -60;
    stroke-dashoffset: 0;  
  }
`;

const CSSLoading = css`
  transition: none;
  border-color: var(--active-icon-04);
  background: var(--ui-03);
  border: none;
  border-radius: 4px;
  svg {
    opacity: 0;
  }
`;

const Bronze = css`
  display: inline-flex;
  justify-content: center;
  align-items: center; 
  height: 12px;
  width: 12px;
  background: #fff;
  border: 1px #567A98 solid;
  border-radius: 50%;
  box-sizing: border-box;
  transition: all 0.2s linear;
  svg{
    color: #FFFF;
    fill: none;
    width: 8px;
  }
  svg path {
    stroke-dasharray: 100% 200%;
	  stroke-dashoffset: 100%;
    transition: all .15s ease-in-out;
  }
  &:hover{
    border: 1px solid var(--active-icon-04);
    ${(props) => (props.loading ? CSSLoading : "")}
  }
  ${(props) => (props.checked ? CSSChecked : "")}
  ${(props) => (props.loading ? CSSLoading : "")}
}`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SCustomCheckbox = styled.label`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

