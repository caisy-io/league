import styled, { css } from 'styled-components';
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from '../../../constants/styles/mediaquerys';
import { SCloseButton } from './SCloseButton';

const CSSCloseButtonWrapperDefaultVisible = css`
  :hover {
    ${SCloseButton}{
      opacity: 1;
    }
  }
`;

const Bronze = css`
  position: relative;
  max-width: min-content;
  ${(props) => !props.defaultVisible && CSSCloseButtonWrapperDefaultVisible}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SCloseButtonWrapper = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

