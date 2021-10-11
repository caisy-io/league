import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISDivider {
  orientation?: "left" | "right";
  hasText: boolean;
  marginBottom?: number | undefined;
  marginTop?: number | undefined;
  dashed: boolean;
}

const Bronze = css<ISDivider>`
  display: flex;
  margin: 24px 0;
  color: #000000d9;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  text-align: center;
  border-top: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  ${(props) => props.dashed && "border-top: 1px dashed rgba(0, 0, 0, 0.06);"}

  line-height: 1.5715;
  white-space: nowrap;

  ${(props) =>
    props.hasText &&
    `
    margin: 16px 0;
    border-top-color: transparent;

    &:before,
    &:after {
        position: relative;
        top: 50%;
        width: 50%;
        border-top: 1px solid rgba(0, 0, 0, 0.06);
        ${(props) => props.dashed && "border-top: 1px dashed rgba(0, 0, 0, 0.06)"}
        border-bottom: 0;
        transform: translateY(50%);
        content: "";
    }
  `}

  &:before {
    width: ${(props) => (props.orientation === "left" ? "5%" : "95%")};
  }

  &:after {
    width: ${(props) => (props.orientation === "left" ? "95%" : "5%")};
  }

  ${(props) => props.marginBottom !== undefined && `margin-bottom: ${props.marginBottom}px;`}
  ${(props) => props.marginTop !== undefined && `margin-top: ${props.marginTop}px;`}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SDivider = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
