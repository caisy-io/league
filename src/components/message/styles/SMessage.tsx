import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface IMessage {
  exit: boolean;
}

const Bronze = css<IMessage>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 460px;
  margin: 20px auto;
  color: var(--black);

  padding: 20px;
  border-radius: 6px;

  box-shadow: 0 10px 35px 0 rgba(89, 106, 122, 0.12);
  background-color: var(--ui-01);

  z-index: 2;

  transform: translateY(-110%);

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

export const SMessage = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
