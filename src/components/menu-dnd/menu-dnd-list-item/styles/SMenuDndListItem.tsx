import styled from "styled-components";

interface ISMenuDndListItem {
  isDragging: boolean;
}

const SMenuDndListItem = styled.li<ISMenuDndListItem>`
  position: relative;

  opacity: ${(props) => (props.isDragging ? ".5" : "1")};
`;

export default SMenuDndListItem;
