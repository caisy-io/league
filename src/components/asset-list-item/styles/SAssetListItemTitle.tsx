import styled, { css } from 'styled-components';
import { CSSProgressiveBody02Semibold } from '../../../constants/styles/fonts';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const Bronze = css`
    ${CSSProgressiveBody02Semibold};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SAssetListItemTitle = styled.p`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

