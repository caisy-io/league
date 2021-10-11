import React from "react";
import styled from "styled-components";

const SIconLoading = styled.div`
  transform: rotateY(180deg);
  height: 24px;
  width: 24px;

  svg {
    animation: load 750ms infinite;
  }

  @keyframes load {
    0% {
      transform: rotateZ(0deg);
    }
    5% {
      transform: rotateZ(-18deg);
    }
    10% {
      transform: rotateZ(-36deg);
    }
    15% {
      transform: rotateZ(-54deg);
    }
    20% {
      transform: rotateZ(-72deg);
    }
    25% {
      transform: rotateZ(-90deg);
    }
    30% {
      transform: rotateZ(-108deg);
    }
    35% {
      transform: rotateZ(-126deg);
    }
    40% {
      transform: rotateZ(-144deg);
    }
    45% {
      transform: rotateZ(-162deg);
    }
    50% {
      transform: rotateZ(-180deg);
    }
    55% {
      transform: rotateZ(-198deg);
    }
    60% {
      transform: rotateZ(-216deg);
    }
    65% {
      transform: rotateZ(-234deg);
    }
    70% {
      transform: rotateZ(-252deg);
    }
    75% {
      transform: rotateZ(-270deg);
    }
    80% {
      transform: rotateZ(-288deg);
    }
    95% {
      transform: rotateZ(-306deg);
    }
    90% {
      transform: rotateZ(-324deg);
    }
    95% {
      transform: rotateZ(-342deg);
    }
    100% {
      transform: rotateZ(-360deg);
    }
  }
`;

export function IconLoading() {
  return (
    <SIconLoading>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M6.75 8.25H3V4.5"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7.467 19.924c.9.521 1.897.89 2.959 1.076M3.482 15.173a9.072 9.072 0 001.57 2.73M13.574 21a9.003 9.003 0 002.959-1.076M18.948 17.903a9.072 9.072 0 001.57-2.73M21 12a9 9 0 00-9-9C8.37 3 5.25 5.154 3.826 8.25"
        ></path>
      </svg>
    </SIconLoading>
  );
}
