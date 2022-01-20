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
  body{ 
      background-color: var(--white-2);
      color: var(--neutral-700);
  }
  :root{
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px; 
    font-weight: 400;
  }
`;
