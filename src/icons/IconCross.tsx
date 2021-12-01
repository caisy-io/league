import React from "react";
interface ICrossProps {
  variant: "close" | "plus";
}

const rotationDegrees = {
  plus: 0,
  close: 45,
};

export const IconCross = ({ variant }: ICrossProps) => {
  const rotationDegree = rotationDegrees[variant];

  return (
    <svg xmlns="http://www.w3.org/2000/svg"  fill="none" width="24px" height="24px" viewBox="0 0 20 20">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10 5.455v9.09M14.546 10H5.455"
        transform={`rotate(${rotationDegree} 10 10)`}
      />
    </svg>
  );
};
