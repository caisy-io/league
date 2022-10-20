import styled from "styled-components";

interface ISDropPositionIndicator {
  isAbove: boolean;
  isSame: boolean;
  isOver: boolean;
}

const SDropPositionIndicator = styled.div<ISDropPositionIndicator>`
  width: 100%;
  background-color: var(--interactional-primary-01);
  height: 2px;
  box-shadow: 0 35px 90px 0 rgba(89, 106, 122, 0.15);
  border-radius: 6px;

  position: absolute;
  display: ${(props) => (!props.isSame && props.isOver ? "block" : "none")};
  ${(props) => (props.isAbove ? "top: 0" : "bottom: 0")};
`;

export { SDropPositionIndicator };
