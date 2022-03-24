import styled, { css } from 'styled-components';
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from '../../../constants/styles/mediaquerys';

const CSSError = css`
  background-color: var(--ui-supportive-01);  
`;

const Bronze = css`
  background-color: rgba(0, 0, 0, 0.74);
  border-radius: 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.5rem;
  width: 28.375rem;
  padding: 0.75rem;
  box-sizing: border-box;
  margin-top: 1.25rem;
  z-index: 2;
  box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.14);
  svg{
    color: #FFFF;
    margin-right: 0.625rem;
    width: 1rem;
    height: 1rem;
  }
  ${(props) => props.error ? CSSError : ''};
  animation: ${(props) => (props.exit ? "SlideRight 1000ms forwards" : "SlideTop 350ms forwards")};
 
  @keyframes SlideTop {
    0% {
      transform: translateY(110%);
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

