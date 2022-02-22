import styled, {css} from 'styled-components';
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
  CSSProgressiveCaption01Semibold
} from '../../../constants/styles';

const CSSActiveState = css`
  background-color: var(--active-ui-01-1);
  border-radius: 6px;
  color: var(--icon-04);
`

const Bronze = css<{ active: boolean }>`
  height: 24px;
  padding: 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: var(--icon-01);
  cursor: pointer;
  transition-duration: 300ms;
  transition-property: color, background-color;
  text-transform: capitalize;
  
  svg {
    width: 16px;
    height: 16px;
  }
  
  ${CSSProgressiveCaption01Semibold};
  ${({active}) => active && CSSActiveState};
  
  :hover {
    ${CSSActiveState};
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SMicroTabSwitchItem = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

