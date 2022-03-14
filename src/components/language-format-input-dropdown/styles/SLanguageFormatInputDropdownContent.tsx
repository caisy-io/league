import styled, { css } from "styled-components";
import { SFlex } from "../../../base-components/flex/styles/SFlex";
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from "../../../constants/styles";
import { SInput } from "../../input/styles/SInput";

const Bronze = css`
  gap: 8px;
  flex: 1 1 auto;
  max-width: calc(100% - 24px - 8px);

  ${SInput} {
    box-shadow: none;
    padding: 0;
    height: 20px;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SLanguageFormatInputDropdownContent = styled(SFlex)`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
