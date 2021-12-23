import React from "react";

export function IconClose({ size = 40 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 40 40">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13.333 13.333l13.334 13.334m0-13.334L13.333 26.667"
      ></path>
    </svg>
  );
}
