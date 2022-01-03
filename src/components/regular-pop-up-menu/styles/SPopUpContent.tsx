
import styled from "styled-components";

interface ISPopUpHeader {
  color?: string;
}

export const SPopUpContent = styled.div<ISPopUpHeader>`
  width: 100%;
  > div {
    overflow: auto;
    height: 561px;
  }
`;
