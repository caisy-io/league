import React, { FC } from "react";

interface IIconSize {
  size: 12 | 16 | 20 | 24 | 32 | 40;
}

export const IconWarningHex: FC<IIconSize> = ({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11.999 16a.25.25 0 10.002.5A.25.25 0 0012 16"
      ></path>
      <path
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7.414 20.414l-3.828-3.828A2 2 0 013 15.172V8.828a2 2 0 01.586-1.414l3.828-3.828A2 2 0 018.828 3h6.343a2 2 0 011.414.586l3.828 3.828c.376.375.587.884.587 1.414v6.343a2 2 0 01-.586 1.414L16 21H8.828a2 2 0 01-1.414-.586v0z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 12.5v-5"
      ></path>
    </svg>
  );
}
