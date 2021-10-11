import styled from "styled-components";

export const SDropdown = styled.ul<any>`
  background-color: white;
  min-height: auto;
  width: 271px;
  padding-bottom: 8px;
  border-radius: 4px;
  max-height: 300px;
  transition: left 0.2s;
  z-index: 9;
  overflow-y: auto;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 10px;

  &.dropdown-visible {
    transform: scale(1);
    opacity: 1;
    transition: all 0.2s;
  }

  &.dropdown-invisible {
    transform: scale(0);
    opacity: 0;
    transition: all 0.2s;
  }

  .dropdown-option-invisible,
  .title-invisible {
    transform: translateY(-2px);
    height: 0px;
    opacity: 0;
    transition: transform 0.2s;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 0.045);
  }

  .dropdown-option-visible,
  .title-visible {
    opacity: 1;
    height: 30px;
    transform: translateY(0px);
    transition: transform 0.2s, height 0.2s;
    transition-timing-function: cubic-bezier(0.045, 0.355, 0.045, 0.645);

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: flex;
  }

  .search-option-disable {
    pointer-events: none;
    color: var(--neutral-500);
  }

  .search-btn {
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--text-priority-4);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    padding: 20% 0;
  }
`;
