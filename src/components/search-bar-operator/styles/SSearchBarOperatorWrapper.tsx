import styled, { css } from 'styled-components';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';
import { ISearchBarOperatorProps } from '../SearchBarOperator';

const CSSHover = css`
  border-color: var(--hover-ui-03);
`;

const CSSActive = css`
  border-color: var(--active-text-04);
`;

const Bronze = css<ISearchBarOperatorProps>`
  max-width: min-content;
  padding: 0 8px;
  position: relative;
  height: 1.3rem;
  :after {
    content: '';
    width: 100%;
    border-bottom: solid 1px var(--ui-03);
    position: absolute;
    left: 0;
    top: 50%;
    z-index: 0;
    ${(props) => props.hover ? CSSHover : ''};
    ${(props) => props.activated ? CSSActive : ''};
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SSearchBarOperatorWrapper = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

