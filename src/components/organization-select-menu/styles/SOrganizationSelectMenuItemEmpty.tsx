import styled, { css } from "styled-components";
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from "../../../constants/styles/mediaquerys";

const CSSOrganizationListItemStyle = css`
  position: reative;
  width: 20px;
  height: 20px;
  z-index: 1000;
  color: white;
  background-color: var(--interactional-primary-01);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Bronze = css`
  border-radius: 4px;
  width: 26px;
  height: 26px;
  background-color: var(--ui-01);
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--hover-icon-01);
  font-size: 11px;

  cursor: pointer;
  ${(props) => props.typeOrganization ? CSSOrganizationListItemStyle : ''};
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SOrganizationSelectMenuItemEmpty = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
