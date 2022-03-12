import styled, { css } from 'styled-components';
import { CSSProgressiveBody03Medium } from '../../../constants/styles/design-tokens/fonts/CSSTypographies';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';

const CSSRequired = css`
  &:after{
    content: "";
    width: 4px;
    height: 4px;
    background-color: var(--ui-supportive-01);
    position: absolute;
    top: 0;
    border-radius: 50%;
    right: 0px;
    z-index: 10;
  }
`;

const Bronze = css`
  ${CSSProgressiveBody03Medium};
  color: var(--text-03);
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 90%;
  width: fit-content;
  padding-right: 0.5rem;
  ${(props) => props.required && !props.label ? CSSRequired : ''};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SInputDropdownTitle = styled.p`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

