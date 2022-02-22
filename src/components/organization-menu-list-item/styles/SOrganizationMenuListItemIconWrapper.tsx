import styled, { css } from 'styled-components';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';

export const CSSDisplayBlock = css`
  display: block;
`;

export const CSSDisplayNone = css`
  display: none;
`;

const Bronze = css`
  display: flex;
  align-items: center; 
  svg{
    color: var(--icon-04);
    height: 6px;
    margin-left: 0.5rem;
    ${(props) => props.listItemStyle == "disabled"  ? "color: var(--disabled-icon)" : ''};
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SOrganizationMenuListItemIconWrapper = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

