import styled, { css } from "styled-components";
import { MIN_SILVER, MIN_GOLD, MIN_PLATINUM, MIN_DIAMOND } from "../../../constants/styles/mediaquerys";

const focus = css<{ validateStatus?: string }>`
  &:focus-within {
    --form-item-line-color: var(--action-primary-default);
    --form-item-info-color: var(--action-primary-default);
    --form-item-title-color: var(--action-primary-default);
  }
`;

const Bronze = css`
  padding: 0 18px 0 18px;
  position: relative;
  margin-bottom: 32px;

  --form-item-title-color: ${(props: { validateStatus?: string }) =>
    props.validateStatus === "error" ? "var(--states-error)" : `var(--text-priority-neutral-2)`};
  --form-item-info-color: ${(props: { validateStatus?: string }) =>
    props.validateStatus === "error" ? "var(--states-error)" : `var(--text-priority-neutral-4)`};
  --form-item-line-color: ${(props: { validateStatus?: string }) =>
    props.validateStatus === "error" ? "var(--states-error)" : `var(--neutral-200)`};

  ${(props: { validateStatus?: string }) => (props.validateStatus === "error" ? "" : `${focus}`)}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SFormItemGroup = styled.div<{ validateStatus?: string }>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
