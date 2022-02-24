import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISOrganizationSelectMenuItem { }

const CSSOrganizationListItemStyle = css`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  z-index: 1000;
`;

const Bronze = css`
  border-radius: 4px;
  width: 26px;
  height: 26px;
  background-color: var(--ui-03);
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--text-04);
  font-size: 11px;

  cursor: pointer;
  ${(props) => props.typeOrganization ? CSSOrganizationListItemStyle : ''};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SOrganizationSelectMenuItem = styled.div<ISOrganizationSelectMenuItem>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
