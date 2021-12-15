import styled, { css } from 'styled-components';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';

const CSSActivated = css`
  background-color: var(--active-ui-01-1);
    svg{
      transform: rotate(-180deg);
      color: #008CFF;
    }
`;

const Bronze = css`
  width: 256px;
  height: 59px;
  background-color: #FFFF;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid var(--ui-03);
  transition: background-color 0.3s ease-in-out;
  svg{
    transition: transform 0.75s ease-in-out;
  }
  &: hover {
    background-color: var(--hover-ui-01);
  }
  &: active {
    background-color: #F3F7F9;
  }
  ${(props) => props.activated ? CSSActivated : ''};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SNotificationsGroupSelectListItem = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;