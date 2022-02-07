import styled from "styled-components";
import { CSSProgressiveBody02Semibold } from "../../../constants/styles";
export const SStringTitle = styled.div<{ required: boolean; isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > h3 {
    display: flex;
    position: relative;
    ${CSSProgressiveBody02Semibold}

    ${({ required }) =>
      required &&
      `
      :after {
        position: absolute;
        display: block;
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 50%;
        top: 0;
        right: -4px;
        background-color: var(--ui-supportive-01);
      }
    `}
  }

  [data-tooltip-icon] {
    padding-top: 4px;
    color: var(--icon-03);
  }
`;
