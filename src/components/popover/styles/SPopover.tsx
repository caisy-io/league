import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";
import Poppable from "../../poppable";

interface ISPopover {
  trianglecolor: string;
}

const Bronze = css<ISPopover>`
  .poppable-triangle {
    --triangle-color: ${(props) => props.trianglecolor};
  }
`;

const Silver = css<ISPopover>``;

const Gold = css<ISPopover>``;

const Platinum = css<ISPopover>``;

const Diamond = css<ISPopover>``;

export const SPopover = styled(Poppable)<ISPopover>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
