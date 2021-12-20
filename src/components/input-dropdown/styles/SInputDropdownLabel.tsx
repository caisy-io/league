import styled, { css } from 'styled-components';
import { CSSProgressiveCaption01Semibold } from '../../../constants/styles/design-tokens/fonts/CSSTypographies';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';
import { IInputDropdownProps } from '../InputDropdown';

const CSSActive = css`
  border-color: var(--ui-supportive-03);
`;

const CSSError = css`
  border-color: var(--ui-supportive-01);
`;

const CSSRequired = css`
  &:after{
    content: "";
    width: 2px;
    height: 2px;
    background-color: var(--ui-supportive-01);
    position: absolute;
    top: 0;
    border-radius: 50%;
    right: -3px;
    z-index: 10;
  }
`;

const Bronze = css`
  ${CSSProgressiveCaption01Semibold};
  line-height: 0.75rem;
  color: var(--text-04);
  position: relative;
  width: fit-content;
  ${(props) => props.required && CSSRequired};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SInputDropdownLabel = styled.p`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

