import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const CSSError = css`
  background-color: var(--ui-supportive-01);  
`;

const Bronze = css`
  background-color: var(--ui-overlay-02);  
  border-radius: 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 454px;
  padding: 0.75rem;
  box-sizing: border-box;
  svg{
    color: #FFFF;
    margin-right: 10px;
  }
  ${(props) => props.icon ? CSSError : ''};
  animation: ${(props) => (props.exit ? "SlideRight 1000ms forwards" : "SlideTop 350ms forwards")};
 
  @keyframes SlideTop {
    0% {
      transform: translateY(-110%);
    }

    100% {
      transform: translateY(0);
    }
  }

   @keyframes SlideRight {
    0% {
      transform: translateX(0);
      opacity: 1;
    }

    100% {
      transform: translateX(30%);
      opacity: 0;
    } 
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SNotificationSnackbar = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`}; 
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;

