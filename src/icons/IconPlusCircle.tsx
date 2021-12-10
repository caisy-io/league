import React from "react";

export function IconPlusCircle({ size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 20 20">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10 6.667v6.666M13.333 10H6.667"
      ></path>
      <path
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10 17.5v0A7.5 7.5 0 012.5 10v0A7.5 7.5 0 0110 2.5v0a7.5 7.5 0 017.5 7.5v0a7.5 7.5 0 01-7.5 7.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
