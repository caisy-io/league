import styled, {css} from "styled-components";

interface ISDatePickerAMPMIndicator {
  active: boolean;
}

const CSSActiveIndicator = css`
  color: var(--text-01);
  background-color: var(--active-ui-01-1);
`
const SDatePickerAMPMIndicator = styled.h3<ISDatePickerAMPMIndicator>`
  cursor: pointer;
  font-family: Inter;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-04);
  width: 40px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  
  :hover {
    ${CSSActiveIndicator};
  }
  
  :first-child {
    margin-right: 4px;
  }
  
  ${(props) => (props.active && CSSActiveIndicator)};

`;

export default SDatePickerAMPMIndicator;
