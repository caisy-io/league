import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';
import { CSSProgressiveCaption01 } from '../../../constants/styles/fonts';

interface ISOutLineLabel {
  size?: 'medium' | 'large';
  activated?: boolean;
}

const Bronze = css<ISOutLineLabel>`
  ${CSSProgressiveCaption01};
  font-size: ${(props) => props.size === 'medium' ? '12px' : '14px'};
  font-weight: ${(props) => props.size === 'medium' ? '400' : '500'};
  color: ${(props) => props.activated ? 'var(--text-02)' : 'var(--text-01)'};
  line-height:  ${(props) => props.size === 'medium' ? '16px' : '20px'};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${(props) => props.size === 'medium' ? '4px 8px' : '8px 12px'};
  position: absolute;
  background-color: ${(props) => props.activated ? 'var(--interactional-primary-01)' : 'var(--ui-01)'};
  border: 1px solid var(--ui-03);
  box-sizing: border-box;
  border-radius: 4px;
  &:hover {
    background-color: ${(props) => !props.activated && 'var(--hover-ui-01)'};
  }
  &:active {
    background-color:  ${(props) => !props.activated && 'var(--active-interactional-tertiary-04)'};
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SOutLineLabel = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
