import styled, { css } from 'styled-components';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';

const CSSError = css`
  background-color: white;
`;

const CSSRecent = css`
  background-color: var(--ui-02);
`;

const Bronze = css`
  width: 100%;
  background-color: #FFFF;
  border-bottom: 1px solid var(--ui-03);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  >svg{
    color: #B4C9D7;
    height: 16px;
    width: 16px;
  }
  ${(props) => props.recent ? CSSRecent : ''};
  ${(props) => props.error ? CSSError : ''};
  &: hover {
    background-color: var(--hover-ui-01);
    ${(props) => props.error ? CSSError : ''};
  }
  &: active {
    background-color: #F3F7F9;
    ${(props) => props.error ? CSSError : ''};
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SAssetListItem = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

