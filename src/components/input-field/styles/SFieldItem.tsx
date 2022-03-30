import styled, {css} from "styled-components";

const CSSError = css`border-left-color: var(--ui-supportive-01);`;
export const SFieldItem = styled.div<{ error: boolean }>`
  background-color: var(--ui-01);
  border: 1px solid var(--ui-03);
  border-left-width: 3px;
  box-sizing: border-box;
  border-radius: 8px;
  
  text-align: left;
  
  &:focus-within {
    border-left-color: var(--active-ui-03-2);
  }
  
  ${({error}) => error && CSSError};
`;
