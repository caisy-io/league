import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const focus = css<{ validateStatus?: string }>`
  &:focus-within {
    --form-item-info-color: var(--interactional-primary-01);
    --form-item-title-color: var(--interactional-primary-01);
    --form-item-text-color: var(--text-priority-neutral-1);
    --form-item-outline-color: var(--interactional-primary-01);
  }
`;

const Bronze = css`
  :not(:last-child) {
    padding-bottom: 8px;
  }

  --form-item-title-color: ${(props: { validateStatus?: string }) =>
    props.validateStatus === "error" ? "var(--states-error)" : `var(--text-priority-neutral-2)`};
  --form-item-info-color: ${(props: { validateStatus?: string }) =>
    props.validateStatus === "error" ? "var(--states-error)" : `var(--text-priority-neutral-2)`};
  --form-item-text-color: var(--text-priority-neutral-2);
  --form-item-outline-color: var(--neutral-200);

  ${(props: { validateStatus?: string }) => (props.validateStatus === "error" ? "" : `${focus}`)}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SFormItem = styled.div<{ validateStatus?: string }>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
