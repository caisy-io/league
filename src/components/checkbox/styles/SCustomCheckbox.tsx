import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const CSSChecked = css`
border-color: var(--active-icon-04);
background: var(--active-icon-04);
  svg{
    opacity: 1;
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
  margin-right: 4px;
  box-sizing: border-box;
  svg{
    opacity: 0;
    color: #FFFF;
    width: 8px;
  }
  svg path {
	fill: none;
	transition: stroke-dashoffset 0.2s ease-in 0s;
  }
  &:hover{
    border: 1px solid var(--active-icon-04);
  }
  ${(props) => (props.checked ? CSSChecked : "")}
}`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SCustomCheckbox = styled.span`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

