import styled, { css } from 'styled-components';
import { CSSProgressiveBody03Medium } from '../../../constants/styles/design-tokens/fonts/CSSTypographies';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const Bronze = css`
  background-color: var(--interactional-secondary-08);  
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  padding: 6px 5px 6px 8px;
  width: fit-content;
  cursor: pointer;
  ${CSSProgressiveBody03Medium};
  svg path{
    fill: var(--icon-03);
  }
  svg{
    margin-left: 2px;
  }
  &: hover{
    background-color: var(--hover-interactional-secondary-08);
  }
  &: active{
    background-color: var(--active-interactional-secondary-08);
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SDefaultSolidLabel = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

