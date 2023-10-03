import styled, {css} from "styled-components";

const CSSError = css`
  &:before {
    background-color: var(--ui-supportive-01);
  }
`;

const CSSOutsideWrapper = css`
  background-color: var(--ui-01);
  border: 1px solid var(--ui-03);
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
  text-align: left;
  position: relative;
  z-index: 1;
  
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
`

export const SFieldHeader = styled.div<{ required: boolean; isOpen: boolean; error: boolean; outsideWrapper?: boolean; }>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  gap: 12px;
  cursor: pointer;
  
  ${({outsideWrapper}) => outsideWrapper && CSSOutsideWrapper};
`;
