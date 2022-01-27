import { css } from 'styled-components';

export const SButtonOverwrite = css`
  position: absolute;
  left: 1rem;
  top: 0.5rem;
  width: 2rem;
  height: 2rem;
  padding: 0;
  color: #172C55;
  &:after{
    background-color:var(--interactional-secondary-08);
  }
  &:hover:after{
    background-color:var(--hover-interactional-secondary-08);
  }
  &:active:after{
    background-color:var(--active-interactional-secondary-08);
  }
`;

