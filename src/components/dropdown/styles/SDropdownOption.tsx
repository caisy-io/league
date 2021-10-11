import styled from "styled-components";

interface ISDropdownOption {
  selected: boolean | undefined;
}

export const SDropdownOption = styled.li<any>`
  color: var(--neutral-800);
  height: 30px;
  line-height: 30px;
  align-items: center;
  padding: 0 16px;
  font-size: 14px;
  transition: 0.2s;
  &:not(:hover),
  &:not(.current-selection) {
    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
  }

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;

  &.current-selection,
  &:hover {
    color: var(--primary-400);
    background-color: var(--primary-100);
  }

  ${(props) => props.selected && "color: var(--primary-400); background-color: var(--primary-100);"}
`;
