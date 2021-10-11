import { createGlobalStyle, css } from "styled-components";
import { CSSReset } from "./css-reset";

const Bronze = css`
  html {
    font-size: 14px;
  }
`;

export const GSBase = createGlobalStyle`
    ${CSSReset}
    ${Bronze}
    :root {
    --black: #212529;
    --secondary-600: #20bb94;
    --secondary-900: #086468;
    --secondary-800: #0e7e78;
    --secondary-700: #169c88;
    --secondary-500: #2cda9d;
    --secondary-400: #5de8aa;
    --secondary-100: #d4fddf;
    --secondary-300: #7ff3b3;
    --secondary-200: #abfbc7;
    --secondary-500-opacity-8: rgba(44, 218, 157, 0.08);
    --secondary-500-opacity-16: rgba(44, 218, 157, 0.16);
    --secondary-500-opacity-48: rgba(44, 218, 157, 0.48);
    --secondary-500-opacity-40: rgba(44, 218, 157, 0.4);
    --secondary-500-opacity-32: rgba(44, 218, 157, 0.32);
    --secondary-500-opacity-24: rgba(44, 218, 157, 0.24);
    --primary-900: #00287a;
    --primary-800: #003993;
    --primary-700: #0050b7;
    --primary-400: #3fb3ff;
    --primary-500: #008cff;
    --primary-300: #66caff;
    --primary-600: #006cdb;
    --primary-200: #99e1ff;
    --primary-100: #ccf3ff;
    --primary-500-opacity-8: rgba(0, 140, 255, 0.08);
    --primary-500-opacity-16: rgba(0, 140, 255, 0.16);
    --primary-500-opacity-24: rgba(0, 140, 255, 0.24);
    --primary-500-opacity-32: rgba(0, 140, 255, 0.32);
    --primary-500-opacity-40: rgba(0, 140, 255, 0.4);
    --primary-500-opacity-48: rgba(0, 140, 255, 0.48);
    --accent-1-100: #fff7d9;
    --accent-1-200: #ffedb3;
    --accent-1-300: #ffe08e;
    --accent-1-400: #ffd371;
    --accent-1-500: #ffbf43;
    --accent-1-600: #db9b30;
    --accent-1-700: #b77a21;
    --accent-1-800: #935b15;
    --accent-2-100: #ffe5d7;
    --accent-1-900: #7a450c;
    --accent-2-200: #ffc5af;
    --accent-2-300: #ff9d87;
    --accent-2-500: #ff3b38;
    --accent-2-400: #ff7869;
    --accent-2-700: #b71c34;
    --accent-2-600: #db2835;
    --accent-2-800: #931131;
    --accent-2-900: #7a0a2f;
    --accent-3-100: #e2d6fe;
    --accent-3-200: #c4adfd;
    --accent-3-300: #a384f9;
    --accent-3-400: #8764f4;
    --accent-3-500: #5c33ee;
    --accent-3-600: #4625cc;
    --accent-3-700: #3319ab;
    --accent-3-800: #22108a;
    --accent-3-900: #170972;
    --white-2: #f5f6fa;
    --white-1: #ffffff;
    --black-opacity-8: rgba(33, 37, 41, 0.08);
    --black-opacity-16: rgba(33, 37, 41, 0.16);
    --black-opacity-32: rgba(33, 37, 41, 0.32);
    --black-opacity-24: rgba(33, 37, 41, 0.24);
    --black-opacity-40: rgba(33, 37, 41, 0.4);
    --black-opacity-48: rgba(33, 37, 41, 0.48);
    --neutral-900: #212529;
    --neutral-800: #343a40;
    --neutral-700: #495057;
    --neutral-600: #868e96;
    --neutral-500: #adb5bd;
    --neutral-400: #ced4da;
    --neutral-300: #dee2e6;
    --neutral-200: #e9ecef;
    --neutral-100: #f1f3f5;
    --action-primary-default: #008cff;
    --action-primary-hover: #3fb3ff;
    --action-primary-active: #006cdb;
    --action-primary-disabled: #addaff;
    --actions-secondary-default: #2cda9d;
    --actions-secondary-active: #20bb94;
    --actions-secondary-hover: #5de8aa;
    --actions-neutral-default: #adb5bd;
    --actions-secondary-disabled: #bcf3e0;
    --actions-neutral-hover: #ced4da;
    --actions-neutral-active: #adb5bd;
    --actions-neutral-disabled: #f0f2f4;
    --states-success: #2cda9d;
    --states-error: #f44336;
    --states-warning: #ffbf43;
    --states-success-bg: #eafbf5;
    --states-warning-bg: rgba(255, 191, 67, 0.1);
    --states-info-bg: rgba(0, 140, 255, 0.1);
    --states-error-bg: #fbece9;
    --states-info: #008cff;
    --text-priority-neutral-5: #ced4da;
    --text-priority-neutral-4: #adb5bd;
    --text-priority-neutral-3: #868e96;
    --text-priority-neutral-2: #495057;
    --text-priority-neutral-1: #212529;
}

body{ 
    background-color: var(--white-2);
    color: var(--neutral-700);
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
`;
