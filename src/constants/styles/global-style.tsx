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
    ${Bronze}
    /* THE FOLLOWN BLOCK IN DEPRICATED AND WILL BE REMOVED SOON: */
    :root {
    /* these don't have corresponding new variables */
    --black: #212529;
    
    --secondary-500: #2cda9d;
    --secondary-500-opacity-32: rgba(44, 218, 157, 0.32);
    --primary-400: #3fb3ff;
    --primary-300: #66caff;

    --primary-200: #99e1ff;
    --primary-100: #ccf3ff;
    --primary-500-opacity-8: rgba(0, 140, 255, 0.08);
    --primary-500-opacity-16: rgba(0, 140, 255, 0.16);
    --primary-500-opacity-32: rgba(0, 140, 255, 0.32);
    
    --white-2: #f5f6fa;

    --black-opacity-32: rgba(33, 37, 41, 0.32);

    --neutral-800: #343a40;
    --neutral-700: #495057;
    --neutral-600: #868e96;
    --neutral-500: #adb5bd;
    --neutral-300: #dee2e6;
    --neutral-200: #e9ecef;
    --neutral-100: #f1f3f5;

    --action-primary-hover: #3fb3ff;
    --action-primary-active: #006cdb;

    --states-success: #2cda9d;
    --states-error: #f44336;
    --states-warning: #ffbf43;
    --states-success-bg: #eafbf5;
    --states-warning-bg: rgba(255, 191, 67, 0.1);
    --states-info-bg: rgba(0, 140, 255, 0.1);
    --states-error-bg: #fbece9;

    --text-priority-neutral-5: #ced4da;
    --text-priority-neutral-4: #adb5bd;
    --text-priority-neutral-3: #868e96;
    --text-priority-neutral-2: #495057;
    --text-priority-neutral-1: #212529;

}
/* THE ABOVE BLOCK IN DEPRICATED AND WILL BE REMOVED SOON */

${CSSColors}
${CSSFonts}
${CSSBoxShadows}
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
