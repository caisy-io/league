import styled, { css } from "styled-components";
import { SActiveUserAvatarBadge } from "./SActiveUserAvatarBadge";

const CSSHover = css`
  background-color: var(--hover-ui-01);
  border-color: var(--hover-ui-03);
  ${SActiveUserAvatarBadge} {
    border-color: var(--hover-ui-01);
  }
`;

const CSSActive = css`
  background-color: var(--active-ui-01-1);
  border-color: var(--active-ui-03-1);
  ${SActiveUserAvatarBadge} {
    border-color: var(--active-ui-01-1);
  }
`;

const CSSActivated = css`
  background-color: var(--ui-01);
  border-color: ${({ color }) => color};
  ${SActiveUserAvatarBadge} {
    border-color: var(--ui-01);
  }
`;

export const SActiveUserAvatar = styled.div`
  position: relative;
  border: 1px solid var(--ui-03);
  border-radius: 6px;
  padding: 4px;
  height: fit-content;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  transition: border-color 200ms, background-color 200ms;
  ${SActiveUserAvatarBadge} {
    transition: border-color 200ms;
  }

  :hover {
    ${CSSHover}
  }

  :active {
    ${CSSActive}
  }

  ${({ activated }) => activated && CSSActivated}
`;
