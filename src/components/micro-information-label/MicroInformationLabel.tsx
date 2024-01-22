import React from "react";
import { SMicroInformationLabel } from "./styles/SMicroInformationLabel";

export interface IMicroInformationLabel {
  children?: any;
}

export const MicroInformationLabel: React.FC<IMicroInformationLabel> = ({ children }) => {
  return (
    <SMicroInformationLabel>
      <div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.1"
            d="M6 4A.125.125 0 106 4.25.125.125 0 005.999 4"
          ></path>
          <path
            fillRule="evenodd"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.1"
            d="M6 10.5v0A4.5 4.5 0 011.5 6v0A4.5 4.5 0 016 1.5v0A4.5 4.5 0 0110.5 6v0A4.5 4.5 0 016 10.5z"
            clipRule="evenodd"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.1"
            d="M6 6v2.5"
          ></path>
        </svg>
      </div>
      {children}
    </SMicroInformationLabel>
  );
};
