import styled, { css } from 'styled-components';
import { CSSProgressiveBody02Medium, CSSProgressiveCaption01Medium } from '../../../constants/styles/design-tokens/fonts/CSSTypographies';
import { CSSProgressiveBody03Medium } from '../../../constants/styles/fonts';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';
import { IMenuListItemProps } from '../MenuListItem';

const CSSSmall = css`
  height: 44px;
  ${CSSProgressiveBody03Medium};
  line-height: 14px;
`;

const CSSMedium = css`
  height: 48px;
`;

const CSSDisabled = css`
  background-color: var(--ui-02);
  color: var(--disabled-text);
  cursor: auto;
  div, div:nth-of-type(2) {
    color: var(--disabled-text);
    svg{
      color: var(--disabled-text);
    }
  }
`;

const Bronze = css<IMenuListItemProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  ${CSSProgressiveBody02Medium};
  line-height: 16px;
  color: var(--text-01);
  background-color: transparent;
  border-bottom: 1px solid var(--ui-03);
  padding: 1rem 0.75rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  div {
    display: flex;
    align-items: center; 
    gap: 15px;
    overflow: hidden;
    span{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    svg {
      min-width: 18px;
      min-height: 18px;
      max-width: 18px;
      max-height: 18px;
    }
  }
  div:nth-of-type(2){
    ${CSSProgressiveCaption01Medium};
    line-height: 12px;
    color: var(--text-04);
    svg{
      color: var(--text-01);
    }
  }
  ${(props) => props.size == "small" ? CSSSmall : ''};
  ${(props) => props.size == "medium" ? CSSMedium : ''};
  &:hover {
    background-color: var(--hover-ui-01);
    cursor: pointer;
    ${(props) => props.disabled ? CSSDisabled : ''};
  }
  &:active {
    background-color: var(--active-ui-01-1);
    ${(props) => props.disabled ? CSSDisabled : ''};
  }
  ${(props) => props.disabled ? CSSDisabled : ''};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SMenuListItem = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

