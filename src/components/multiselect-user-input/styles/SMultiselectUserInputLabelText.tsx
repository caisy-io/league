import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import { CSSProgressiveCaption01Semibold } from "../../../constants/styles";

type TProps = {
  isRequired: boolean;
};

const Bronze = css<TProps>`
  color: var(--text-04);
  ${CSSProgressiveCaption01Semibold}

  position: relative;

  ${({ isRequired }) =>
    isRequired &&
    css`
      &::after {
        content: "";
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        transform: translate(2px, 0);
        background: var(--ui-supportive-01);
      }
    `}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SMultiselectUserInputLabelText = styled.div<TProps>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
