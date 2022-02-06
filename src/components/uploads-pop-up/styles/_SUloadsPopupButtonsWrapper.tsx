import styled from "styled-components";

export const SUloadsPopupButtonsWrapper: any = styled.div`
  width: 100%;
  border-radius: 12px;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.04);
  z-index: 1;
  button {
    :first-child {
      :after {
        border-bottom-left-radius: 12px;
      }
    }
    :last-child {
      :after {
        border-bottom-right-radius: 12px;
      }
    }

  }
`