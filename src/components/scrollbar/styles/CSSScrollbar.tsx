import { css } from 'styled-components';

export const CSSScrollbar = css`
::-webkit-scrollbar {
  background-color: #FFFF;
  border-right: 1px solid #E8EFF3;
  border-left: 1px solid #E8EFF3;
  width: 0.75rem;
  box-sizing: border-box;
}
::-webkit-scrollbar-thumb  {
  background: var(--interactional-secondary-08);
  border: 3px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  -webkit-border-radius: 49px;
  background-color: rgba(0, 0, 0, 0.15);
 }
`;