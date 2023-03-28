import styled from "styled-components";

export const SActiveUserAvatarBadge = styled.div`
  height: 8px;
  width: 8px;
  border: 2px solid var(--ui-01);
  background-color: ${({ color }) => color};
  box-sizing: border-box;
  position: absolute;
  bottom: -3px;
  margin: 0 auto;
  border-radius: 50%;
`;
