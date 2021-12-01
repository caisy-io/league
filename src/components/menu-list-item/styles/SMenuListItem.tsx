import styled, { css } from 'styled-components';
import { CSSProgressiveBody02Medium, CSSProgressiveBody03Medium, CSSProgressiveCaption01Medium } from '../../../constants/styles/fonts';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';
import { IMenuListItemProps } from '../MenuListItem';

const CSSSmall = css`
  height:44px;
  ${CSSProgressiveBody03Medium};
`;

const CSSMedium = css`
  height:48px;
`;

const CSSDisabled = css`
  background-color: var(--ui-02);
  color: var(--disabled-text);
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
  color: var(--text-01);
  background-color: #FFFF;
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
    svg {
      width: 24px;
      height: 24px;
    }
  }
  div:nth-of-type(2){
    ${CSSProgressiveCaption01Medium};
    color: var(--text-04);
    svg{
      color: var(--text-01);
    }
  }
  ${(props) => props.size == "small" ? CSSSmall : ''};
  ${(props) => props.size == "medium" ? CSSMedium : ''};
  &:hover {
    background-color: var(--hover-ui-01);
  }
  &:active {
    background-color: var(--active-ui-01-1);
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

