import React from "react";

export function IconCheckmarkOutlined({ size = 24 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 20 20">
      <circle
        cx="10"
        cy="10"
        r="7.503"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></circle>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7.035 10.282l1.807 1.807-.012-.012 4.076-4.076"
      ></path>
    </svg>
  );
}
