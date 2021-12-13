import React from "react";

export function IconCircle({ size = 20 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 20 20">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.303 4.697A7.5 7.5 0 114.697 15.303 7.5 7.5 0 0115.303 4.697"
      ></path>
    </svg>
  );
}
