import styled, { css } from 'styled-components';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';
import { SAssetListItem } from './SAssetListItem';

const CSSHover = css`
background-color: var(--hover-ui-03);
  border: 1px solid #E8EFF3;
`;

const CSSActive = css`
background-color: var(--ui-03);
  border: 1px solid var(--ui-03);
`;

const CSSError = css`
  background-color: var(--ui-background);
  color: #C7CAD1;
  border: none;
  svg{
    color: #C7CAD1;
  }
`;

const Bronze = css`
    width: 40px;
    height: 40px;
    box-sizing: border-box;         
    border-radius: 4px;
    background-color: var(--ui-03);
    border: 1px solid var(--ui-03);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    svg {
      color: #172C55;
    }
    ${(props) => props.error ? CSSError : ''};

    ${SAssetListItem}:hover & {
      ${CSSHover};
      ${(props) => props.error ? CSSError : ''};
    }
    ${SAssetListItem}:active & {
      ${CSSActive};
      ${(props) => props.error ? CSSError : ''};
    }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SImagePlaceholder = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

