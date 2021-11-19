import styled, { css } from 'styled-components';
import { CSSProgressiveCaption01 } from '../../../constants/styles/fonts';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';
import { CSSDisplayBlock, CSSDisplayNone } from './SAssetListItemIconWrapper';

const CSSDisplayFlex = css`
  display: flex;
`;

const Bronze = css`
display: flex;
align-items: center;
position: absolute;
left: 0;
bottom: 0;
width: 100%;
${CSSDisplayNone};
${(props) => props.uploading ? CSSDisplayFlex : ''};
  progress{
    appearance: none;
    height: 0.25rem;
    width: 100%;
    ::-webkit-progress-bar{
      height: 0.25rem;
      border-radius: 20px;
      background-color: var(--ui-03);
    }
    ::-webkit-progress-value{
      height: 0.25rem;
      border-radius: 20px;
      background-color: var(--ui-supportive-03);
    }
  }
  span{
    ${CSSProgressiveCaption01};
    color: var(--text-suppportive-02);
    margin-right: 0.24rem;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SProgressBar = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

