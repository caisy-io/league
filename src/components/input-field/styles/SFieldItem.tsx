import styled, {css} from "styled-components";

const CSSError = css`
  &:before {
    background-color: var(--ui-supportive-01);
  }
`;

export const SFieldItem = styled.div<{ error: boolean }>`
  background-color: var(--ui-01);
  border: 1px solid var(--ui-03);
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
  text-align: left;
  position: relative;
  
  &:before {
    content: "";
    position: absolute;
    width: 3px;
    height: 100%;
    left: 0;
    top: 0;
    background-color: var(--ui-03);
  }
  
  &:focus-within {
    &:before {
      background-color: var(--active-ui-03-2);
    }
    
    ${({error}) => error && CSSError};
  }
  
  ${({error}) => error && CSSError};
`;
