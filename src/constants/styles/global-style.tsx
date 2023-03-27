import { createGlobalStyle, css } from "styled-components";
import { CSSReset } from "./css-reset";
import { CSSBoxShadows } from "./design-tokens/box-shadows/CSSBoxShadows";
import { CSSColors } from "./design-tokens/colors/CSSColors";
import { CSSFonts } from "./design-tokens/fonts/CSSFonts";

const Bronze = css`
  html {
    font-size: 14px;
  }
`;

export const GSBase = createGlobalStyle`
  ${CSSReset}
  ${CSSColors}
  ${CSSFonts}
  ${CSSBoxShadows}
  ${Bronze}
  html {
  overscroll-behavior: none;
  }
  body{ 
      background-color: var(--ui-background);
      color: var(--text-01);
  }
  :root{
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px; 
    font-weight: 400;
  }
`;
