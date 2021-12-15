import React, { FC } from "react";

interface IIconSize {
  size: 12 | 16 | 20 | 24 | 32 | 40;
}

export const IconCheckmark: FC<IIconSize> = ({ }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="8"
      fill="none"
      viewBox="0 0 10 8"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1.443 4.34L3.61 6.506l-.014-.014 4.89-4.891"
      ></path>
    </svg>
  );
}
