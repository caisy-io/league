import React from "react";

interface IUploadIcon {
  backgroundColor: string;
}

function UploadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.97 8.178L17.5 5.632a1.47 1.47 0 00-.892-.685l-5.092-1.365a1.47 1.47 0 00-1.8 1.04l-2.664 9.94a1.47 1.47 0 001.04 1.8l7.1 1.903a1.47 1.47 0 001.8-1.04l2.126-7.932a1.47 1.47 0 00-.147-1.115z"
        clipRule="evenodd"
        opacity="0.1"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M.641 8.178l1.47-2.546a1.47 1.47 0 01.892-.685l5.093-1.365a1.47 1.47 0 011.8 1.04l2.664 9.94a1.47 1.47 0 01-1.04 1.8l-7.1 1.903a1.47 1.47 0 01-1.8-1.04L.493 9.294a1.47 1.47 0 01.147-1.115z"
        clipRule="evenodd"
        opacity="0.1"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.345 5.345l-2.357-2.357A1.667 1.667 0 0011.81 2.5H5.833c-.92 0-1.666.746-1.666 1.667v11.666c0 .921.745 1.667 1.666 1.667h8.334c.92 0 1.666-.746 1.666-1.667v-9.31c0-.441-.175-.865-.488-1.178z"
        clipRule="evenodd"
      ></path>
      <path
        fill="var(--icon-background-color)"
        fillRule="evenodd"
        d="M15.833 6.667H12.5a.834.834 0 01-.833-.834V2.5"
        clipRule="evenodd"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.833 6.667H12.5a.834.834 0 01-.833-.834V2.5"
      ></path>
      <path
        stroke="var(--icon-background-color)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M9.997 14.497V9.503M11.992 11.498L10 9.506l-1.992 1.992"
      ></path>
    </svg>
  );
}

export default UploadIcon;
