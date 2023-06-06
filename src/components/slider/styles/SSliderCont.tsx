import styled, {css} from 'styled-components';
import {MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND} from '../../../constants/styles';

const Bronze = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--icon-01);
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const CSSDisabled = css`
pointer-events: none;
opacity: 0.8;
cursor: not-allowed;
`;

export const SSliderCont = styled.div<{disabled?: boolean }>`
  ${Bronze}
  ${(props) => (props.disabled ? CSSDisabled : "")};
`;

