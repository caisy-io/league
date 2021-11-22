import styled, { css } from 'styled-components';
import { CSSProgressiveCaption01 } from '../../../constants/styles/fonts';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';
import { CSSDisplayBlock, CSSDisplayNone } from './SAssetListItemIconWrapper';

const CSSFlex = css`
  display: flex;
`;

const Bronze = css`
  align-items: center;
  display: flex;
    span{
        ${CSSProgressiveCaption01};
        color: var(--text-suppportive-02);
        margin-right: 0.25rem;
    }
    ${(props) => props.progressValue == undefined && props.progressValue == null ? CSSDisplayNone : ''};
  `;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SProgressBarContainer = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

