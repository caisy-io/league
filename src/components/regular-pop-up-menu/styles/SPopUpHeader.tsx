import styled from "styled-components";

interface ISPopUpHeader {
  color?: string;
}

export const SPopUpHeader = styled.div<ISPopUpHeader>`
  width: 100%;
  color: ${({ color }) => color || "var(--text-04)"};
  > div {
      padding: 16px 20px;
    div {
      background: transparent;
    };
  };
`;
