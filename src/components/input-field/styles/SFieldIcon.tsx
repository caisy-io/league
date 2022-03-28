import styled from "styled-components";
import {CSSProgressiveBody02Semibold, CSSProgressiveBody03Medium} from "../../../constants/styles";

export const SFieldIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 8px;
  background-color: var(--ui-supportive-12);
  color: var(--icon-supportive-02);
  overflow: hidden;
  flex: 0 0 auto;
  svg{
    width: 1.25rem;
    height: 1.25rem;
  }
`;
