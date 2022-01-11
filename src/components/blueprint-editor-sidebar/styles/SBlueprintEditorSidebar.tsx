import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const Bronze = css`
  filter: drop-shadow(-8px 0px 12px rgba(0, 0, 0, 0.04));
  width: 100%;
  overflow-y: scroll;
  border-left: 1px solid #E8F0F3;
  background-color: #FFFF;
  padding-top: 1.25rem;
  
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SBlueprintEditorSidebar = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

