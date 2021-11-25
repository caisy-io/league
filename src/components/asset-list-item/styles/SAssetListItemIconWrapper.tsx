import styled, { css } from 'styled-components';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';
import { IAssetListItemProps } from '../AssetListItem'

const CSSVisible = css`
  opacity: 1;
`;

export const CSSDisplayBlock = css`
  display: block;
`;

export const CSSDisplayNone = css`
  display: none;
`;

const Bronze = css<IAssetListItemProps>`
  display: flex;
  svg{
    color: #B4C9D7;
    height: 16px;
    width: 16px;
  }
  svg:first-of-type {
    margin-right: 0.75rem;
    display: none;
    ${(props) => props.recent ? CSSDisplayBlock : ''};
    ${(props) => props.error ? CSSDisplayNone : ''};
  }
  svg:nth-of-type(2) {
    display: none;
    color: #ED3E3E;
    margin-right: 0.75rem;
    ${(props) => props.error ? CSSDisplayBlock : ''};
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SAssetListItemIconWrapper = styled.div<IAssetListItemProps>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

