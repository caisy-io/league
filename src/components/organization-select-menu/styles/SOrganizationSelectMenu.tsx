import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

interface ISOrganizationSelectMenu {
  expanded?: boolean;
}

const Bronze = css`
  border: 1px solid #e8eff3;
  border-radius: 6px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  padding: 5px;
  width: fit-content;
  position: relative;
  box-shadow: 0px 8px 24px rgba(184, 184, 184, 0.24);
  width: ${(props) => (props.expanded ? "168px" : "27px")};
  transition: width 0.3s ease-in-out;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SOrganizationSelectMenu = styled.div<ISOrganizationSelectMenu>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
