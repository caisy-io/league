import styled from "styled-components";

interface ISMenuItemDnd {
  hovering?: boolean;
  active?: boolean;
}

export const SMenuItemDnd = styled.div<ISMenuItemDnd>`
  position: relative;
  margin: 4px 0;
  cursor: pointer;
  font-size: 14px;
  width: auto;
  height: max-content;

  padding: 8px;
  min-height: 20px;
  color: var(--neutral-700);
  background-color: transparent;
  border-radius: 6px;
  display: flex;
  align-items: center;
  animation: open 500ms;

  :hover {
    color: var(--interactional-primary-01);
    background-color: var(--primary-500-opacity-8);
    ${(props) => props.active && "color: var(--ui-01)"};
    ${(props) => props.active && "background-color: var(--interactional-primary-01)"};
  }

  ${(props) => props.active && "color: var(--ui-01)"};
  ${(props) => props.active && "background-color: var(--interactional-primary-01)"};

  @keyframes open {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
