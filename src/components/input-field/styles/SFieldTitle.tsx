import styled from "styled-components";
import {CSSProgressiveCaption01Semibold} from "../../../constants/styles";

export const SFieldTitle = styled.div<{ required: boolean; isOpen: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  
  > h3 {
    display: flex;
    position: relative;
    ${CSSProgressiveCaption01Semibold};
    
    ${({required}) =>
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
