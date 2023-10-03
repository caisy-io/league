import styled, {css} from "styled-components";

const CSSSmallSize = css`
  height: 24px;
  width: 24px;
`;

export const SActiveUserAvatarImageContainer = styled.div <{ size?: string }>`
  height: 28px;
  width: 28px;
  border-radius: 4px;
  overflow: hidden;
  ${({size}) => size === "small" && CSSSmallSize};
`;
