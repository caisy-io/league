import styled from "styled-components";

export const SButtonFadeIn: any = styled.div<{ active: boolean | undefined }>`
  transition: opacity 0.3s ease;
  opacity: ${(props: any) => (!props.active ? 0 : 1)};
  ${(props: any) => (!props.active ? "pointer-events: none;" : "")};
`;
