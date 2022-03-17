import styled from "styled-components";
import { CSSProgressiveCaption02Medium, CSSProgressiveCaption02Semibold } from "../../../../constants/styles/fonts";

interface ISDatePresetButton {}

const SDatePresetButton = styled.button<ISDatePresetButton>`
  background: var(--interactional-secondary-03);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 8px;
  ${CSSProgressiveCaption02Semibold};
  color: var(--text-04);
  border: none;
  outline: none;
  width: 100%;
  cursor: pointer;

  p:last-of-type {
    ${CSSProgressiveCaption02Medium};
  }

  p:first-of-type {
    ${CSSProgressiveCaption02Semibold};
  }

  :hover {
    background: var(--hover-interactional-secondary-03);
  }

  :active {
    background: var(--active-interactional-secondary-03);
    outline: none;
    border: none;
  }
`;

export default SDatePresetButton;
