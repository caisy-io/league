import React from "react";

export function IconCheckmarkSolid({ size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24">
      <circle
        cx="12"
        cy="12"
        r="9.004"
        fill="#008CFF"
        stroke="#008CFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></circle>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.443 12.34l2.168 2.167-.014-.014 4.89-4.891"
      ></path>
    </svg>
  );
}
